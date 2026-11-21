const form = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const radius = parseFloat(radiusInput.value);

    if (Number.isNaN(radius) || radius <= 0) {
        volumeInput.value = "";
        return;
    }

    const volume = (4 / 3) * Math.PI * radius ** 3;
    volumeInput.value = volume.toFixed(2);
});
