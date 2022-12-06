const fs = require("fs");

const lines = fs
    .readFileSync("input.txt", { encoding: 'utf-8' })
    .replace(/\r/g, "")
    .split("\n")  
    .map((line) => {
        const [opponent, me] = line.split(' ');
        return {
            opponent,
            me,
        };
    })
    

function part1() {
    let points = 0;
    for (const line of lines) {
        if ((line.opponent === 'A' && line.me === 'X') ||
            (line.opponent === 'B' && line.me === 'Y') ||
            (line.opponent === 'C' && line.me === 'Z')) {
            points +=3;
        }
        if ((line.opponent === 'A' && line.me === 'Y') ||
            (line.opponent === 'B' && line.me === 'Z') ||
            (line.opponent === 'C' && line.me === 'X')) {
            points +=6;
        }
        if (line.me === 'X'){
            points +=1;
        }
        if (line.me === 'Y'){
            points +=2;
        }
        if (line.me === 'Z'){
            points +=3;
        }
    }
    console.log(points)
}

function part2() {
    let points = 0;
    for (const line of lines) {
        if (line.me === 'Y'){
            points +=3;
            if (line.opponent === 'A'){
                points +=1;
            }
            if (line.opponent === 'B'){
                points +=2;
            }
            if (line.opponent === 'C'){
                points +=3;
            }
        }
        if (line.me === 'Z'){
            points +=6;
            if (line.opponent === 'A'){
                points +=2;
            }
            if (line.opponent === 'B'){
                points +=3;
            }
            if (line.opponent === 'C'){
                points +=1;
            }
        }
        if (line.me === 'X'){
            if (line.opponent === 'A'){
                points +=3;
            }
            if (line.opponent === 'B'){
                points +=1;
            }
            if (line.opponent === 'C'){
                points +=2;
            }
        }
    }
    console.log(points)
}

part1();
part2();