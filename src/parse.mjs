import { json } from "stream/consumers";
import { TRANSITION_REGEX } from "./constants.mjs";

function parse(data) {
  const transitions = parseTransitions(data);

  return transitions.reduce((acc, transition) => {
    const key = JSON.stringify(transition.from);

    if (acc.has(key)) {
      acc.set(key, [...acc.get(key), transition.to]);
    } else {
      acc.set(JSON.stringify(transition.from), [transition.to]);
    }

    return acc;
  }, new Map());
}

function parseTransitions(raw) {
  if (!raw["success"]) {
    return undefined;
  }

  const rows = raw["data"].split("\n");

  return rows.map(parseRow).filter((row) => row !== undefined);
}

function parseRow(row) {
  if (row === "") {
    return undefined;
  }

  if (row.match(TRANSITION_REGEX) === null) {
    return undefined;
  }

  const [_, fromStateNumber, fromSymbol, toStateType, toStateNumber] =
    Array.from(...row.matchAll(TRANSITION_REGEX));

  return {
    from: {
      type: "q",
      number: fromStateNumber,
      symbol: fromSymbol,
    },
    to: {
      type: toStateType,
      number: toStateNumber,
    },
  };
}

export { parse };
