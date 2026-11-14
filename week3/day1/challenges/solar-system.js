const planets = [
    { name: "Mercury", color: "#9e9e9e", moons: 0 },
    { name: "Venus", color: "#d9a066", moons: 0 },
    { name: "Earth", color: "#4a7fd4", moons: 1 },
    { name: "Mars", color: "#b3441f", moons: 2 },
    { name: "Jupiter", color: "#c99a62", moons: 4 },
    { name: "Saturn", color: "#d8c07a", moons: 3 },
    { name: "Uranus", color: "#8fcbd1", moons: 2 },
    { name: "Neptune", color: "#3f5fb0", moons: 1 },
];

const solarSystem = document.querySelector(".listPlanets");

solarSystem.style.display = "flex";
solarSystem.style.flexWrap = "wrap";
solarSystem.style.gap = "40px";
solarSystem.style.padding = "20px";

for (const planet of planets) {
    const planetDiv = document.createElement("div");
    planetDiv.className = "planet";
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.style.color = "#ffffff";
    planetDiv.textContent = planet.name;

    for (let i = 0; i < planet.moons; i++) {
        const moon = document.createElement("div");
        moon.className = "moon";

        const angle = (2 * Math.PI * i) / planet.moons;

        moon.style.left = `${60 + 62 * Math.cos(angle) - 20}px`;
        moon.style.top = `${60 + 62 * Math.sin(angle) - 20}px`;

        planetDiv.appendChild(moon);
    }

    solarSystem.appendChild(planetDiv);
}
