const fs = require("fs");

const lines = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .replace(/\r/g, "");

const [rawStacks, rawMoves] = lines
  .split("\n\n")
  .map((line) => line.split("\n"));

const parsedStacks = rawStacks.map((line) =>
  [...line].filter((value, index) => index % 4 === 1)
);
const indexes = parsedStacks.pop();

const stacks = {};

for (const line of parsedStacks) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== " ") {
      if (!stacks[indexes[i]]) {
        stacks[indexes[i]] = [];
      }
      stacks[indexes[i]].unshift(line[i]);
    }
  }
}

const moves = [];
for (const move of rawMoves) {
  const match = /move (\d+) from (\d+) to (\d+)/g.exec(move);
  moves.push({
    count: parseInt(match[1]),
    from: parseInt(match[2]),
    to: parseInt(match[3]),
  });
}
console.log(stacks);

function part1() {
  for (const move of moves) {
    for (let i = 0; i < move.count; i++) {
      const temp = stacks[move.from].pop();
      stacks[move.to].push(temp);
    }
  }
  let result = "";
  for (let i = 1; i <= indexes.length; i++) {
    result += stacks[i].pop();
  }
  console.log(result);
}

function part2() {
  for (const move of moves) {
    let tempStack = [];
    for (let i = 0; i < move.count; i++) {
      const temp = stacks[move.from].pop();
      tempStack.push(temp);
    }
    const reversedStack = tempStack.reverse();
    stacks[move.to].push(...reversedStack);
  }
  let result = "";
  for (let i = 1; i <= indexes.length; i++) {
    result += stacks[i].pop();
  }
  console.log(result);
}

// part1();
part2();
