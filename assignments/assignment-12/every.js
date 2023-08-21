// Problem 1
// Create a function that checks if any object in an array contains a null value
// Input: [{ value: 3 }, { value: null }]
// Output: true

function checkAnyObj(values) {
    return values.some((number) => number.value === null);
}
const objAll = [{ value: 3 }, { value: null }];
console.log(checkAnyObj(objAll));

// Problem 2
// Create a function that checks if any element in a matrix is a specific value
// Input: [[1, 2], [3, 4]], value = 4
// Output: true

function isElement(element, matrix) {
    return element.some((price) => price.some((value) => value === matrix));
}
const checkVal = [
    [1, 2],
    [3, 4]
];
console.log(isElement(checkVal, 4));

// Problem 3
// Create a function that checks if any object in an array has a property with a specific length
// Input: [{ word: 'cat' }, { word: 'elephant' }], length = 8
// Output: true

function checkArr(arr, length) {
    return arr.some((text) => text.word.length === length);
}
const newWord = [{ word: "cat" }, { word: "elephant" }];

console.log(checkArr(newWord, 8));

// Problem 4
// Create a function that checks if any sub-array contains a specific number
// Input: [[1, 2], [3, 4, 5]], number = 5
// Output: true

function isArr(arr, num) {
    return arr.some((digit) => digit.some((number) => number === num));
}
const isNum = [
    [1, 2],
    [3, 4, 5]
];
console.log(isArr(isNum, 5));

// Problem 5
// Create a function that checks if any date in an array of objects is after a specific date
// Input: [{ date: '2023-01-01' }, { date: '2023-01-04' }], date = '2023-01-02'
// Output: true

function isDate(arr, data) {
    return arr.some((value) => value.date > data);
}
const isNumber = [{ date: "2023-01-01" }, { date: "2023-01-04" }];
console.log(isDate(isNumber, "2023-01-02"));
