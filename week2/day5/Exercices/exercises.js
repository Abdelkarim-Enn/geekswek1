console.log("--- Exercise 1: List of people ---");

const people = ["Greg", "Mary", "Devon", "James"];

people.shift();
console.log("1. After removing Greg:", people);

people[people.indexOf("James")] = "Jason";
console.log("2. After replacing James with Jason:", people);

people.push("Abdelkarim");
console.log("3. After adding my name:", people);

console.log("4. Mary's index:", people.indexOf("Mary"));

const peopleCopy = people.slice(1, -1);
console.log("5. Copy without Mary and my name:", peopleCopy);

console.log("6. Index of Foo:", people.indexOf("Foo"), "- -1 means the value is not in the array.");

const last = people[people.length - 1];
console.log("7. Last element:", last);

console.log("Part II - Every person:");
for (const person of people) {
    console.log(person);
}

console.log("Part II - Stop after Devon:");
for (const person of people) {
    console.log(person);
    if (person === "Devon") {
        break;
    }
}


console.log("\n--- Exercise 2: Favorite colors ---");

const colors = ["blue", "red", "green", "black", "orange"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}


console.log("\n--- Exercise 3: Repeat the question ---");

if (typeof prompt === "function") {
    let answer = prompt("Enter a number:");
    console.log("Data type received:", typeof answer);

    let number = Number(answer);

    while (number < 10) {
        answer = prompt("The number is smaller than 10. Enter a new number:");
        if (answer === null) {
            break;
        }
        number = Number(answer);
    }

    console.log("Final number:", number);
} else {
    console.log("Exercise 3 needs a browser because it uses prompt().");
}


console.log("\n--- Exercise 4: Building Management ---");

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};

console.log("Number of floors:", building.numberOfFloors);

console.log(
    "Apartments on floors 1 and 3:",
    building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor
);

console.log(
    "Second tenant:",
    building.nameOfTenants[1],
    "- number of rooms:",
    building.numberOfRoomsAndRent.dan[0]
);

const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log("Dan's rent:", building.numberOfRoomsAndRent.dan[1]);


console.log("\n--- Exercise 5: Family ---");

const family = {
    father: "Ahmed",
    mother: "Fatima",
    sister: "Salma",
    brother: "Youssef",
};

console.log("Keys:");
for (const key in family) {
    console.log(key);
}

console.log("Values:");
for (const key in family) {
    console.log(family[key]);
}


console.log("\n--- Exercise 6: Rudolf ---");

const details = {
    my: "name",
    is: "Rudolf",
    the: "reindeer",
};

let rudolfSentence = "";

for (const key in details) {
    rudolfSentence += `${key} ${details[key]} `;
}

console.log(rudolfSentence.trim());


console.log("\n--- Exercise 7: Secret Group ---");

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const secretName = names
    .map((name) => name[0])
    .sort()
    .join("");

console.log("Secret society name:", secretName);
