function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (!words.every((word) => typeof word === "string")) {
            reject("All items must be strings.");
            return;
        }

        resolve(words.map((word) => word.toUpperCase()));
    });
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length <= 4) {
            reject("The array must contain more than 4 words.");
            return;
        }

        resolve([...words].sort());
    });
}

makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
