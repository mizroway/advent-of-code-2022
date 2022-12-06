const fs = require("fs");

const lines = fs
    .readFileSync("input.txt", { encoding: 'utf-8' })
    .replace(/\r/g, "")
    .split("\n");


let letters = {};

let counter = 1;
// Using for loop for (a-z):
for (i = 97; i <= 122; i++) {
    letters[String.fromCharCode(i)] = counter;
    counter++;
}
// Using for loop for (A-Z):
for (i = 65; i <= 90; i++) {
    letters[String.fromCharCode(i)] = counter;
    counter++;
}


function part1() {

    sum = 0;
    for (const line of lines) {
        firstComparment = new Array(...line.slice(0, line.length / 2));
        secondComparment = new Array(...line.slice(line.length / 2));

        const item = firstComparment
            .filter(elem => secondComparment.includes(elem))
            .shift();

        sum += letters[item];
    }
    console.log(sum);

}

function part2() {

    counter = 0;
    sum = 0;
    for (const line of lines) {
        if (counter % 3 === 0) {
            first = new Array(...lines[counter]);
            second = new Array(...lines[counter + 1]);
            third = new Array(...lines[counter + 2]);

            const item = first
                .filter(elem => second.includes(elem))
                .filter(elem => third.includes(elem))
                .shift();
            sum += letters[item];
        }
        counter++;
    }
    console.log(sum);

}

// part1();
part2();