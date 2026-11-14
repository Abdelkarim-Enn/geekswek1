const allBooks = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        image: "images/book1.svg",
        alreadyRead: true,
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "images/book2.svg",
        alreadyRead: false,
    },
];

const section = document.querySelector(".listBooks");

for (const book of allBooks) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    const image = document.createElement("img");
    image.src = book.image;
    image.alt = `Cover of ${book.title}`;
    image.style.width = "100px";

    const details = document.createElement("p");
    details.textContent = `${book.title} written by ${book.author}`;

    if (book.alreadyRead) {
        details.style.color = "red";
    }

    bookDiv.appendChild(image);
    bookDiv.appendChild(details);
    section.appendChild(bookDiv);
}
