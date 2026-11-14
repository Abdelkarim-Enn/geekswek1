function hotelCost(nights) {
    while (nights === undefined || Number.isNaN(nights) || nights <= 0) {
        const answer = prompt("How many nights would you like to stay?");
        nights = Number(answer);
    }

    return nights * 140;
}

function planeRideCost(destination) {
    while (
        destination === undefined ||
        typeof destination !== "string" ||
        destination.trim() === ""
    ) {
        const answer = prompt("What is your destination?");
        destination = answer === null ? "" : answer;
    }

    const city = destination.trim().toLowerCase();

    if (city === "london") {
        return 183;
    }

    if (city === "paris") {
        return 220;
    }

    return 300;
}

function rentalCarCost(days) {
    while (days === undefined || Number.isNaN(days) || days <= 0) {
        const answer = prompt("How many days would you like to rent the car?");
        days = Number(answer);
    }

    const cost = days * 40;

    return days > 10 ? cost * 0.95 : cost;
}

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();

    console.log(
        `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`
    );

    return hotel + plane + car;
}

function totalVacationCostBonus() {
    const nights = Number(prompt("How many nights would you like to stay?"));
    const destination = prompt("What is your destination?");
    const days = Number(prompt("How many days would you like to rent the car?"));

    const hotel = hotelCost(nights);
    const plane = planeRideCost(destination);
    const car = rentalCarCost(days);

    console.log(
        `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`
    );

    return hotel + plane + car;
}

if (typeof prompt === "function") {
    console.log("Total vacation cost:", totalVacationCost());
    console.log("Total vacation cost (bonus):", totalVacationCostBonus());
} else {
    console.log("Exercise 4 needs a browser because it uses prompt().");
}
