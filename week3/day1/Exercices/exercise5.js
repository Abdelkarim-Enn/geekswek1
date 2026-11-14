const container = document.getElementById("container");
console.log(container);

const lists = document.querySelectorAll(".list");

lists[0].children[1].textContent = "Richard";
lists[1].children[1].remove();

for (const list of lists) {
    list.firstElementChild.textContent = "Abdelkarim";
}

for (const list of lists) {
    list.classList.add("student_list");
}

lists[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

const allItems = document.querySelectorAll("li");

const dan = [...allItems].find((li) => li.textContent === "Dan");
dan.style.display = "none";

const richard = [...allItems].find((li) => li.textContent === "Richard");
richard.style.border = "2px solid black";

document.body.style.fontSize = "18px";

console.log("All lists:", document.querySelectorAll(".list"));
console.log("First list classes:", lists[0].className);

if (container.style.backgroundColor === "lightblue") {
    const users = [
        ...new Set(
            [...document.querySelectorAll(".list li")]
                .filter((li) => li.style.display !== "none")
                .map((li) => li.textContent)
        ),
    ];

    alert(`Hello ${users.join(" and ")}`);
}
