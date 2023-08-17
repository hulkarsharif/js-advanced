//1
const age = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];
const ages = age.map(function (newAge) {
    return { name: newAge.name, age: newAge.age * 2 };
});
console.log(ages); // [{ name: 'Alice', age: 60 }, { name: 'Bob', age: 50 }]
//2
const fruits = ["apple", "banana"];
const garden = fruits.map(function (fruitGarden) {
    return fruitGarden.charAt(0).toUpperCase() + fruitGarden.slice(1);
});
console.log(garden); //Output: ['Apple', 'Banana']
//3

const num = [
    [2, 3],
    [4, 5],
    [6, 7]
];

const number = num.map(function (firstNum) {
    return firstNum[0] * firstNum[0];
});
console.log(number); //Output: [4, 16, 36]

const letter = [{ word: "cat" }, { word: "dog" }];
const newArr = letter.map(function (addS) {
    return { word: addS.word + "s" };
});
console.log(newArr); //Output: [{ word: 'cats' }, { word: 'dogs' }]

const grades = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 1 }
];

const newPrice = grades.map(function (num1) {
    return { name: num1.name, price: num1.price * 1.1 };
});

console.log(newPrice); //[{ name: 'Book', price: 22 }, { name: 'Pen', price: 1.1 }]
