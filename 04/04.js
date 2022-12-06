const fs = require("fs");

const lines = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .split("\n")
  .map((x) => {
    const [elf1, elf2] = x.split(",").map((x) => {
      const [from, to] = x.split("-").map(Number);
      return {
        from,
        to,
      };
    });
    return {
      elf1,
      elf2,
    };
  });

function part1() {
  let counter = 0;
  for (const line of lines) {
    if (
      (line.elf1.from <= line.elf2.from && line.elf1.to >= line.elf2.to) ||
      (line.elf1.from >= line.elf2.from && line.elf1.to <= line.elf2.to)
    ) {
      counter++;
    }
  }
  console.log(counter);
}

function part2() {
  let counter = 0;
  for (const line of lines) {
      console.log(line);
    if (
      ((line.elf1.from <= line.elf2.from && line.elf1.to >= line.elf2.from) ||
      (line.elf1.from <= line.elf2.to && line.elf1.to >= line.elf2.to)) ||
      ((line.elf1.from >= line.elf2.from && line.elf1.from <= line.elf2.to) ||
      (line.elf1.to >= line.elf2.from && line.elf1.to <= line.elf2.from))
    ) {
      counter++;
    }
  }
  console.log(counter);
}

// part1();
part2();
