import { DEBUG_ENABLED } from "./constants.mjs";

function isTraversible(transitionsTable, input) {
  let state = {
    type: "q",
    number: "0",
    symbol: undefined,
  };

  for (const symbol of input) {
    const key = JSON.stringify({ ...state, symbol: symbol });

    const transition = transitionsTable.get(key);

    if (DEBUG_ENABLED) {
      console.log("key", key, "transition", transition);
    }

    if (transition === undefined) {
      return false;
    }

    const chosenTransition = transition[0];

    state = { ...chosenTransition };
  }

  return true;
}

export { isTraversible };
