let input = "Hello, World, in, a, frame";

if (typeof prompt === "function") {
    const answer = prompt("Enter several words separated by commas:");
    if (answer && answer.trim() !== "") {
        input = answer;
    }
}

const words = input
    .split(",")
    .map((word) => word.trim())
    .filter((word) => word.length > 0);

const longest = Math.max(...words.map((word) => word.length));
const border = "*".repeat(longest + 4);

console.log(border);

for (const word of words) {
    console.log(`* ${word.padEnd(longest)} *`);
}

console.log(border);
