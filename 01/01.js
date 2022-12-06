const fs = require("fs");

const lines = fs
    .readFileSync("input.txt", { encoding: 'utf-8' })
    .replace(/\r/g, "")
    .split("\n")
    .map(Number)


function part1() {
    let calories = 0;
    let caloriesArray = new Array();
    for (const line of lines) {
        if (line === 0) {
            caloriesArray.push(calories);
            calories = 0;
        } else {
            calories += line;
        }
    }
    console.log(Math.max(...caloriesArray));
}

function part2() {
    let calories = 0;
    let caloriesArray = new Array();
    for (const line of lines) {
        if (line === 0) {
            caloriesArray.push(calories);
            calories = 0;
        } else {
            calories += line;
        }
    }
    let threeBiggestCallories = caloriesArray
        .sort((a, b) => a - b)
        .slice(-3).reduce((a, b) => a + b, 0);
    console.log(threeBiggestCallories);
}

part1();
part2();