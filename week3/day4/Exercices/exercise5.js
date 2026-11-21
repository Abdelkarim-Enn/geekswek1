const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

const sentence = epic.reduce((accumulator, word) => `${accumulator} ${word}`, "");
console.log(sentence.trim());
