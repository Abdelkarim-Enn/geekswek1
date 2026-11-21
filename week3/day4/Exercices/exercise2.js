const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
    const number = index + 1;
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    let suffix = ordinal[0];

    if (lastTwoDigits < 11 || lastTwoDigits > 13) {
        suffix = lastDigit === 1 ? ordinal[1]
            : lastDigit === 2 ? ordinal[2]
            : lastDigit === 3 ? ordinal[3]
            : ordinal[0];
    }

    console.log(`${number}${suffix} choice is ${color}.`);
});
