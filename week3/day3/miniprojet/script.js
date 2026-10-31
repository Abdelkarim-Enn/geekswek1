const cardsGrid = document.querySelector("#cards-grid");
const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");
const sortSelect = document.querySelector("#sort-select");
const favoritesFilter = document.querySelector("#favorites-filter");
const emptyState = document.querySelector("#empty-state");
const themeToggle = document.querySelector("#theme-toggle");

const toggleFormBtn = document.querySelector("#toggle-form-btn");
const addPlayerSection = document.querySelector("#add-player-section");
const addPlayerForm = document.querySelector("#add-player-form");
const formMessage = document.querySelector("#form-message");
const cancelFormBtn = document.querySelector("#cancel-form-btn");

const modal = document.querySelector("#player-modal");
const modalClose = document.querySelector("#modal-close");
const modalImage = document.querySelector("#modal-image");
const modalName = document.querySelector("#modal-player-name");
const modalCategory = document.querySelector("#modal-category");
const modalRating = document.querySelector("#modal-rating");
const modalNationality = document.querySelector("#modal-nationality");
const modalClub = document.querySelector("#modal-club");
const modalPosition = document.querySelector("#modal-position");
const modalDescription = document.querySelector("#modal-description");
const modalAchievements = document.querySelector("#modal-achievements");

const FAVORITES_KEY = "footballLegendsFavorites";
const THEME_KEY = "footballLegendsTheme";

const FALLBACK_IMAGE = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">' +
    '<rect width="100%" height="100%" fill="#1e293b"/>' +
    '<text x="50%" y="50%" fill="#ffffff" font-family="Arial" font-size="22" ' +
    'text-anchor="middle" dominant-baseline="middle">No Image</text></svg>'
);

let favorites = loadFavorites();

function loadFavorites() {
    try {
        const savedFavorites = JSON.parse(localStorage.getItem(FAVORITES_KEY));
        if (Array.isArray(savedFavorites)) {
            return new Set(savedFavorites.map(Number).filter(Number.isFinite));
        }
    } catch (error) {
        return new Set();
    }
    return new Set();
}

function saveFavorites() {
    try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(favorites)));
    } catch (error) {
        console.warn("Favorites could not be saved.");
    }
}

function toggleFavorite(playerId) {
    if (favorites.has(playerId)) {
        favorites.delete(playerId);
    } else {
        favorites.add(playerId);
    }
    saveFavorites();
}

function updateFavoriteButton(button, player) {
    const isFavorite = favorites.has(player.id);

    button.textContent = isFavorite ? "Favorited" : "Favorite";
    button.classList.toggle("is-favorite", isFavorite);
    button.setAttribute("aria-pressed", String(isFavorite));
    button.setAttribute(
        "aria-label",
        (isFavorite ? "Remove " : "Add ") + player.name +
        (isFavorite ? " from favorites" : " to favorites")
    );
}

function createFavoriteButton(player) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "favorite-btn";
    updateFavoriteButton(button, player);

    button.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleFavorite(player.id);
        updateFavoriteButton(button, player);

        if (favoritesFilter.checked) {
            renderVisiblePlayers();
        }
    });

    return button;
}

function setImageWithFallback(image, source, alt) {
    image.onerror = function () {
        image.onerror = null;
        image.src = FALLBACK_IMAGE;
    };
    image.alt = alt;
    image.src = source || FALLBACK_IMAGE;
}

function createPlayerCard(player) {
    const card = document.createElement("article");
    card.classList.add("player-card");
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "View details for " + player.name);

    const name = document.createElement("h3");
    name.textContent = player.name;

    const category = document.createElement("p");
    category.className = "card-category";
    category.textContent = player.category;

    const club = document.createElement("p");
    club.textContent = player.fullDetails.club;

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "card-image-wrapper";

    const image = document.createElement("img");
    image.classList.add("img");
    image.loading = "lazy";
    setImageWithFallback(image, player.image, player.name);

    imageWrapper.appendChild(image);

    const rating = document.createElement("p");
    rating.className = "card-rating";
    rating.textContent = "Rating: " + formatRating(player.rating);

    const description = document.createElement("p");
    description.className = "card-description";
    description.textContent = player.shortDescription;

    const actions = document.createElement("div");
    actions.className = "card-actions";
    actions.appendChild(createFavoriteButton(player));

    card.appendChild(imageWrapper);
    card.appendChild(name);
    card.appendChild(category);
    card.appendChild(club);
    card.appendChild(rating);
    card.appendChild(description);
    card.appendChild(actions);

    card.addEventListener("click", function () {
        openPlayerModal(player);
    });

    card.addEventListener("keydown", function (event) {
        if (event.target !== card) {
            return;
        }

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openPlayerModal(player);
        }
    });

    return card;
}

function formatRating(rating) {
    return Number(rating).toFixed(1);
}

function renderPlayers(data) {
    cardsGrid.textContent = "";

    data.forEach(function (player) {
        cardsGrid.appendChild(createPlayerCard(player));
    });

    if (data.length === 0 && favoritesFilter.checked) {
        emptyState.textContent = "No favorite players yet. Click Favorite on a card to add one.";
    } else {
        emptyState.textContent = "No players found. Try another search.";
    }

    emptyState.hidden = data.length !== 0;
}

function sortPlayers(list, sortValue) {
    const sortedPlayers = list.slice();

    if (sortValue === "name-asc") {
        sortedPlayers.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    } else if (sortValue === "name-desc") {
        sortedPlayers.sort(function (a, b) {
            return b.name.localeCompare(a.name);
        });
    } else if (sortValue === "rating-desc") {
        sortedPlayers.sort(function (a, b) {
            return b.rating - a.rating;
        });
    }

    return sortedPlayers;
}

function getVisiblePlayers() {
    const searchValue = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;
    const favoritesOnly = favoritesFilter.checked;

    const filteredPlayers = players.filter(function (player) {
        const matchesSearch =
            player.name.toLowerCase().includes(searchValue) ||
            player.shortDescription.toLowerCase().includes(searchValue);

        const matchesCategory =
            selectedCategory === "All" ||
            player.category === selectedCategory;

        const matchesFavorite = !favoritesOnly || favorites.has(player.id);

        return matchesSearch && matchesCategory && matchesFavorite;
    });

    return sortPlayers(filteredPlayers, sortSelect.value);
}

function renderVisiblePlayers() {
    renderPlayers(getVisiblePlayers());
}

function openPlayerModal(player) {
    setImageWithFallback(modalImage, player.image, player.name);

    modalName.textContent = player.name;
    modalCategory.textContent = player.category;
    modalRating.textContent = formatRating(player.rating) + " / 10";
    modalNationality.textContent = player.fullDetails.nationality;
    modalClub.textContent = player.fullDetails.club;
    modalPosition.textContent = player.fullDetails.position;
    modalDescription.textContent = player.shortDescription;
    modalAchievements.textContent = player.fullDetails.achievements;

    if (typeof modal.showModal === "function") {
        modal.showModal();
    } else {
        modal.setAttribute("open", "");
    }

    modalClose.focus();
}

function closePlayerModal() {
    if (typeof modal.close === "function") {
        modal.close();
    } else {
        modal.removeAttribute("open");
    }
}

function applyTheme(theme) {
    const nextTheme = theme === "dark" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", nextTheme);
    themeToggle.textContent = nextTheme === "dark" ? "Light Mode" : "Dark Mode";
    themeToggle.setAttribute("aria-pressed", String(nextTheme === "dark"));

    try {
        localStorage.setItem(THEME_KEY, nextTheme);
    } catch (error) {
        console.warn("Theme preference could not be saved.");
    }
}

function loadTheme() {
    try {
        return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
    } catch (error) {
        return "light";
    }
}

function getNextPlayerId() {
    const highestId = players.reduce(function (highest, player) {
        return player.id > highest ? player.id : highest;
    }, 0);

    return highestId + 1;
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = type ? "form-message " + type : "form-message";
}

function collapseForm() {
    addPlayerSection.hidden = true;
    toggleFormBtn.textContent = "Add Player";
    addPlayerForm.reset();
    showFormMessage("", "");
}

function validatePlayerForm(formData) {
    const values = {
        name: String(formData.get("name") || "").trim(),
        category: String(formData.get("category") || "").trim(),
        club: String(formData.get("club") || "").trim(),
        image: String(formData.get("image") || "").trim(),
        ratingText: String(formData.get("rating") || "").trim(),
        nationality: String(formData.get("nationality") || "").trim(),
        position: String(formData.get("position") || "").trim(),
        description: String(formData.get("description") || "").trim(),
        achievements: String(formData.get("achievements") || "").trim()
    };

    const errors = [];

    if (!values.name) {
        errors.push("Player name is required.");
    }
    if (!values.category) {
        errors.push("Category is required.");
    }
    if (!values.club) {
        errors.push("Club is required.");
    }
    if (!values.ratingText) {
        errors.push("Rating is required.");
    }
    if (!values.nationality) {
        errors.push("Nationality is required.");
    }
    if (!values.position) {
        errors.push("Position is required.");
    }
    if (!values.description) {
        errors.push("Short description is required.");
    }
    if (!values.achievements) {
        errors.push("Achievements are required.");
    }

    const rating = Number(values.ratingText);
    if (values.ratingText && (!Number.isFinite(rating) || rating < 0 || rating > 10)) {
        errors.push("Rating must be a number between 0 and 10.");
    }

    if (values.image && !/^https?:\/\/.+/i.test(values.image)) {
        errors.push("Image URL must start with http:// or https://.");
    }

    return { values, rating, errors };
}

themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    applyTheme(currentTheme === "dark" ? "light" : "dark");
});

searchInput.addEventListener("input", renderVisiblePlayers);
categoryFilter.addEventListener("change", renderVisiblePlayers);
sortSelect.addEventListener("change", renderVisiblePlayers);
favoritesFilter.addEventListener("change", renderVisiblePlayers);

modalClose.addEventListener("click", closePlayerModal);

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closePlayerModal();
    }
});

toggleFormBtn.addEventListener("click", function () {
    const willOpen = addPlayerSection.hidden;

    addPlayerSection.hidden = !willOpen;
    toggleFormBtn.textContent = willOpen ? "Close Form" : "Add Player";

    if (willOpen) {
        addPlayerSection.scrollIntoView({ behavior: "smooth", block: "start" });
        document.querySelector("#player-name").focus();
    } else {
        showFormMessage("", "");
    }
});

cancelFormBtn.addEventListener("click", function () {
    collapseForm();
});

addPlayerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(addPlayerForm);
    const result = validatePlayerForm(formData);

    if (result.errors.length > 0) {
        showFormMessage(result.errors.join(" "), "error");
        return;
    }

    const newPlayer = {
        id: getNextPlayerId(),
        name: result.values.name,
        category: result.values.category,
        image: result.values.image || FALLBACK_IMAGE,
        rating: Math.round(result.rating * 10) / 10,
        shortDescription: result.values.description,
        fullDetails: {
            nationality: result.values.nationality,
            club: result.values.club,
            position: result.values.position,
            achievements: result.values.achievements
        }
    };

    players.push(newPlayer);

    searchInput.value = "";
    categoryFilter.value = "All";
    sortSelect.value = "default";
    favoritesFilter.checked = false;

    renderVisiblePlayers();

    addPlayerForm.reset();
    showFormMessage(newPlayer.name + " was added successfully.", "success");
    document.querySelector("#player-name").focus();
});

applyTheme(loadTheme());
renderVisiblePlayers();
