const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

const output = document.getElementById("morse-output");

function toJs() {
    return new Promise((resolve, reject) => {
        let morseJS;

        try {
            morseJS = JSON.parse(morse);
        } catch (error) {
            reject(error);
            return;
        }

        if (Object.keys(morseJS).length === 0) {
            reject("The Morse object is empty.");
            return;
        }

        resolve(morseJS);
    });
}

function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const input = prompt("Enter a word or a sentence:");

        if (input === null) {
            reject("No input provided.");
            return;
        }

        const translation = [];

        for (const rawCharacter of input) {
            const character = rawCharacter === " " ? "/" : rawCharacter.toLowerCase();

            if (!Object.prototype.hasOwnProperty.call(morseJS, character)) {
                reject(`The character "${rawCharacter}" is not supported.`);
                return;
            }

            translation.push(morseJS[character]);
        }

        if (translation.length === 0) {
            reject("Please enter at least one character.");
            return;
        }

        resolve(translation);
    });
}

function joinWords(morseTranslation) {
    output.textContent = morseTranslation.join("\n");
}

toJs()
    .then((morseJS) => toMorse(morseJS))
    .then((morseTranslation) => joinWords(morseTranslation))
    .catch((error) => {
        console.log(error);
        output.textContent = error;
    });
