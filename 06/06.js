const fs = require("fs");

const buffer = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .replace(/\r/g, "");

// console.log(...buffer);

function part1() {
  let tempArray = [];

  for (let i = 0; i < buffer.length; i++) {
    tempArray.push(buffer[i]);
    if (tempArray.length !== new Set(tempArray).size) {
      tempArray.shift();
    }

    if (tempArray.length === 4) {
      console.log(i + 1);
      break;
    }
  }
}

function part2() {
  let tempArray = [];

  for (let i = 0; i < buffer.length; i++) {
    tempArray.push(buffer[i]);
    if (tempArray.length !== new Set(tempArray).size) {
      tempArray.shift();
    }

    if (tempArray.length === 14) {
      console.log(i + 1);
      break;
    }
  }
}

part1();
part2();
