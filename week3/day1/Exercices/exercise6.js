const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

const list = navBar.querySelector("ul");

const newItem = document.createElement("li");
const logoutText = document.createTextNode("Logout");
newItem.appendChild(logoutText);
list.appendChild(newItem);

const firstItem = list.firstElementChild;
const lastItem = list.lastElementChild;

console.log("First link:", firstItem.textContent);
console.log("Last link:", lastItem.textContent);
