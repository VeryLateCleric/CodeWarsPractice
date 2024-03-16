function feast(beast, dish) {
    const firstLetter = beast[0];
    const lastLetter = beast[beast.length - 1];
    return dish.startsWith(firstLetter) && dish.endsWith(lastLetter);
}