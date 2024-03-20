function invert(array) {
    let inversion = [];
    for (let i = 0; i < array.length; i++) {
        inversion.push(-1 * array[i])
    }
    return inversion
}