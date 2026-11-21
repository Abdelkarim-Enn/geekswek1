const article = document.querySelector("article");
const h1 = article.firstElementChild;
console.log(h1);

const paragraphs = document.querySelectorAll("article p");
paragraphs[paragraphs.length - 1].remove();

const h2 = document.querySelector("article h2");
h2.addEventListener("click", () => {
    h2.style.backgroundColor = "red";
});

const h3 = document.querySelector("article h3");
h3.addEventListener("click", () => {
    h3.style.display = "none";
});

document.getElementById("bold-button").addEventListener("click", () => {
    for (const paragraph of paragraphs) {
        paragraph.style.fontWeight = "bold";
    }
});

h1.addEventListener("mouseover", () => {
    h1.style.fontSize = `${Math.floor(Math.random() * 101)}px`;
});

const secondParagraph = document.querySelectorAll("article p")[1];
secondParagraph.addEventListener("mouseover", () => {
    secondParagraph.classList.add("fade-out");
});
