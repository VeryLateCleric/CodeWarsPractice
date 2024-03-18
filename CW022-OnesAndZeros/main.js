const binaryArrayToNumber = arr => {
    arr.reverse();
    
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        result += Math.pow(2, i);
      }
    }
    return result;
    // your code
  };