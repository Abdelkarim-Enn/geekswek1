const sentence = "This dinner is not that bad ! You cook well";

const wordNot = sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    const result =
        sentence.slice(0, wordNot) +
        "good" +
        sentence.slice(wordBad + "bad".length);

    console.log(result);
} else {
    console.log(sentence);
}
