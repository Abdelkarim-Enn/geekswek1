let allBoldItems;

const sentence = document.querySelector(".sentence");

function getBoldItems() {
    allBoldItems = sentence.querySelectorAll("strong");
}

function highlight() {
    for (const item of allBoldItems) {
        item.style.color = "blue";
    }
}

function returnItemsToDefault() {
    for (const item of allBoldItems) {
        item.style.color = "black";
    }
}

getBoldItems();

sentence.addEventListener("mouseover", highlight);
sentence.addEventListener("mouseout", returnItemsToDefault);
