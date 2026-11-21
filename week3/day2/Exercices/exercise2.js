const form = document.querySelector("form");
console.log(form);

const firstNameById = document.getElementById("fname");
const lastNameById = document.getElementById("lname");
console.log(firstNameById, lastNameById);

const firstNameByName = document.getElementsByName("firstname");
const lastNameByName = document.getElementsByName("lastname");
console.log(firstNameByName, lastNameByName);

const answersList = document.querySelector(".usersAnswer");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = firstNameById.value.trim();
    const lastName = lastNameById.value.trim();

    if (!firstName || !lastName) {
        return;
    }

    answersList.textContent = "";

    for (const value of [firstName, lastName]) {
        const li = document.createElement("li");
        li.textContent = value;
        answersList.appendChild(li);
    }
});
