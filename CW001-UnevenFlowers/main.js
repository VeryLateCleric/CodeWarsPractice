function lovefunc(flower1, flower2) {
    let flowerT = flower1;
    let flowerS = flower2;
    return ((flowerT + flowerS) % 2) === 0 ? false : true
}
console.log(lovefunc(6, 6))

console.log(lovefunc(12, 15))