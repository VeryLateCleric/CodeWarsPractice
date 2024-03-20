const socks = [1, 2, 1, 2, 1, 3, 2, 3, 2, 4, 4, 5, 5, 1, 2, 1, 6, 3]; //n=18
const socks2 = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];//n=20

function sockMerchant(n, ar) {
    const colorCounts = {}
    console.log(colorCounts);
    ar.forEach(color => colorCounts[color] = (colorCounts[color] || 0) + 1);
    console.log(colorCounts);

    let sockPairs = 0;
    for (const color in colorCounts) {
        const pairs = (2+2)// some Math Placeholder
        sockPairs += pairs
        console.log(sockPairs);
    }

    return sockPairs;
}

console.log(sockMerchant(18, socks));
console.log(sockMerchant(20, socks2));