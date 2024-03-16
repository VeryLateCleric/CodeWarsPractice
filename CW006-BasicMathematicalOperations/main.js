function basicOp(operation, value1, value2){
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            if (value2 !== 0) {
                return value1 / value2;
            } else {
                return "Division by zero is not allowed";
            }
        default:
            return "Invalid operator";
    }
}

// This test does not have any values equal to zero.
// However if we want to provide a case for this we can using an if else

// Following is a more clearly written version of the same as above:

function basicOperation(operator, value1, value2) {
    switch (operator) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }
}