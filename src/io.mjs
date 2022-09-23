import { readFileSync, writeFileSync } from "fs";

const read = (fileName) => {
  let success = true;
  let data;

  try {
    data = readFileSync(fileName, { encoding: "utf8" });
  } catch (err) {
    console.log("Error while reading file!");
    console.log(err);
    success = false;
  }

  return {
    success: success,
    data: data.toString(),
  };
};

const write = (fileName, message) => {
  let success;

  try {
    writeFileSync(fileName, message, { encoding: "utf8" });
  } catch (err) {
    console.log("Error while writing file!");
    console.log(err);
    success = false;
  }

  return success;
};

export { read, write };
