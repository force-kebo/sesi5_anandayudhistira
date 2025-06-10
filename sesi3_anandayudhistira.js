for (let i = "*"; i.length < 5; i += "*") {
    console.log(i)
}

let rows = 5;
let pattern = "";

for (let n = 1; n <= rows; n++) {
    for (let number = 1; number <= 6 - n; number++) {
        pattern += "*";
    }
    pattern += "\n";
}
for(let n = 1; n <= rows; n++) {
    for (let space = 1; space <= rows - n; space++) {
        pattern += " ";
    }
    for (let number = 1; number <= 2 * n - 1; number++) {
        pattern += "*";
    }
    pattern += "\n"
}
console.log(pattern);