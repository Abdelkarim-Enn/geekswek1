const form = document.getElementById("libform");
const story = document.getElementById("story");
const shuffleButton = document.getElementById("shuffle-button");
const fields = ["noun", "adjective", "person", "verb", "place"];

let answers = null;
let currentIndex = -1;

const stories = [
    (a) => `${a.person} found a ${a.adjective} ${a.noun} in ${a.place} and decided to ${a.verb} with it.`,
    (a) => `While visiting ${a.place}, ${a.person} spotted a ${a.adjective} ${a.noun} and began to ${a.verb} immediately.`,
    (a) => `A ${a.adjective} ${a.noun} followed ${a.person} around ${a.place} because it wanted to ${a.verb}.`,
    (a) => `In ${a.place}, ${a.person} used a ${a.adjective} ${a.noun} as an excuse to ${a.verb} all afternoon.`,
    (a) => `Nobody in ${a.place} expected ${a.person} to bring a ${a.adjective} ${a.noun} and start to ${a.verb}.`,
];

function getAnswers() {
    const values = {};

    for (const field of fields) {
        values[field] = document.getElementById(field).value.trim();
    }

    return values;
}

function hasEmptyValues(values) {
    return fields.some((field) => !values[field]);
}

function renderRandomStory() {
    let index;

    do {
        index = Math.floor(Math.random() * stories.length);
    } while (index === currentIndex && stories.length > 1);

    currentIndex = index;
    story.textContent = stories[index](answers);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const values = getAnswers();

    if (hasEmptyValues(values)) {
        story.textContent = "Please fill in every field.";
        return;
    }

    answers = values;
    renderRandomStory();
});

shuffleButton.addEventListener("click", () => {
    if (!answers) {
        story.textContent = "Fill in the form first.";
        return;
    }

    renderRandomStory();
});
