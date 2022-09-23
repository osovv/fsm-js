import { read } from "./src/io.mjs";
import { parse } from "./src/parse.mjs";
import { isTraversible } from "./src/traverse.mjs";
import { isDeterministic } from "./src/deterministic.mjs";
import { DEBUG_ENABLED, DEFAULT_FILEPATH } from "./src/constants.mjs";

function getFilepath() {
  const argsFilepath = process.argv[0];

  return argsFilepath || DEFAULT_FILEPATH;
}

function analyze(filepath, input) {
  const data = read(filepath);

  const transitionsTable = parse(data);

  const deterministic = isDeterministic(transitionsTable);

  const traversible = isTraversible(transitionsTable, input);

  console.log("==========");
  console.log("Input: ", input);
  console.log("Deterministic: ", deterministic);
  console.log("Traversible: ", traversible);
}

function main() {
  const filepath = getFilepath();

  analyze(filepath, "ab + cd * e =357");
  analyze(filepath, "abc");

  if (DEBUG_ENABLED) {
    debugger;
  }
}

main();
