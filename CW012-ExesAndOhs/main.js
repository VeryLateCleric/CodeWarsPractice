function XO(str) {
    // Need to set toLowerCase() to avoid any comparative issues
    str = str.toLowerCase();

    let xCount = 0;
    let oCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            xCount++;
        }
        else if (str[i] === 'o') {
            oCount++;
        }
    }
    return xCount === oCount;
    //code here
}