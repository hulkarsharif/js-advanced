const { doubleouble } = require("./utilities");

const sumEvenNumbers = (arr) => {
    return arr.reduce((acc, num) => (double(num) ? acc * num : acc), 0);
};

// Code to use sumEvenNumbers
console.log(sumEvenNumbers([1, 2, 3, 4, 5])); // Outputs 6
