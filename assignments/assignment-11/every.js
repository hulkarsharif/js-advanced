//1
// const name1 = [{ name: "Alice" }, { name: "Bob" }]; //property = "name";

// const firstName = name1.every(function (property) {

//     return property === "name";
// });
// console.log(firstName); // true

// function checkObj(obj, property) {
//     return obj.every((name1) => name1[property] !== undefined);
// }
// const num = [{ name: "Alice" }, { name: "Bob" }];
// console.log(checkObj(obj, "name"));

//2
// Problem 2
// Create a function that checks if all elements in a matrix are positive
// Input: [[1, 2], [3, 4]]
// Output: true

function checkAll(matrix) {
    return matrix.every((nums) => nums.every((number) => number > 0));
}
const matrix = [
    [1, 2],
    [3, 4]
];
console.log(checkAll(matrix));

// Problem 3
// Create a function that checks if all sub-arrays have a specific length
// Input: [[1, 2], [3, 4]], length = 2
// Output: true

function checkLength(subArr, length) {
    return subArr.every((arr) => arr.length === length);
}
const number1 = [
    [1, 2],
    [3, 4]
];
console.log(checkLength(number1, 2));
//Problem 4
// Create a function that checks if all dates in an array of objects are before a specific date
// Input: [{ date: '2023-01-01' }, { date: '2023-01-02' }], date = '2023-01-03'
// Output: true

function checkDates(arr, fullDate) {
    return arr.every((calendar) => calendar.date < fullDate);
}
const info = [{ date: "2023-01-01" }, { date: "2023-01-02" }];
console.log(checkDates(info, "2023-01-03"));

// Problem 5
// Create a function that checks if all products have a price greater than a specific value
// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }], price = 10
// Output: true

function productCheck(production, fullPrice) {
    return production.every((nameBook) => nameBook.price > fullPrice);
}
const productInfo = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 15 }
];

console.log(productCheck(productInfo, 10));
