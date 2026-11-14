const rows = 6;

console.log("--- One loop ---");

for (let i = 1; i <= rows; i++) {
    console.log("* ".repeat(i).trimEnd());
}

console.log("--- Two nested loops ---");

for (let i = 1; i <= rows; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
        line += "* ";
    }

    console.log(line.trimEnd());
}
