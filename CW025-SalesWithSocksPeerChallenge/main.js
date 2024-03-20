const socks = [1, 2, 1, 2, 1, 3, 2, 3, 2, 4, 4, 5, 5, 1, 2, 1, 6, 3]; //n=18 pairs: 7
const socks2 = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];//n=20 pairs: 9

function sockMerchant(n, ar) {
    const colorCounts = {};
    ar.forEach(color => colorCounts[color] = (colorCounts[color] || 0) + 1);
    console.log("ColorCounts:", colorCounts);
    console.log("SockCount:", ar.length);

    let sockPairs = 0;
    for (const color in colorCounts) {
        const pairs = Math.floor(colorCounts[color] / 2)
        sockPairs += pairs
        console.log("We got another pair of socks! Socks:", sockPairs);
    }

    return sockPairs;
}

console.log(sockMerchant(18, socks));
console.log(sockMerchant(20, socks2));