function basicOp(operation, value1, value2){
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
    }
  }

// This test does not have any values equal to zero.
// However if we want to provide a case for this we can using an if else