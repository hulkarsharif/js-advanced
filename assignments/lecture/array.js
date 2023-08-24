// function createCounter() {
//     let count = 10;
//     return function () {
//         count--;
//         return count;
//     };
// }
// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 2

// function temperatureConverter(unit) {
//     if (unit === "C") {
//         return function toCelsius(fahrenheit) {
//             return ((fahrenheit - 32) * 5) / 9;
//         };
//     } else {
//         unit === "F";
//         return function toFahrenheit(celsius) {
//             return (celsius * 9) / 5 + 32;
//         };
//     }
// }
// const toCelsius = temperatureConverter("C");
// const toFahrenheit = temperatureConverter("F");
// console.log(toCelsius(32));
// console.log(toFahrenheit(40));

// function greet(name) {
//     return function (greeting) {
//         return `Good ${greeting}, ${name}!`;
//     };
// }
// const greetJohn = greet("John");
// console.log(greetJohn("Evening"));

// function multiplier(factor) {
//     return function (anyNum) {
//         return factor * anyNum;
//     };
// }
// const double = multiplier(2);
// console.log(double(5)); // 10

// function interestCalculator(rate) {
//     return function (amount) {
//         return (rate / 100) * amount;
//     };
// }
// const simpleInterest = interestCalculator(5);
// console.log(simpleInterest(1000)); // 50

// function doubleMultiplier(fac1, fac2) {
//     return function (num) {
//         return fac1 * fac2 * num;
//     };
// }
// const doubleAndTriple = doubleMultiplier(2, 3);
// console.log(doubleAndTriple(5)); // 30

// function sequentialGreet(name1) {
//     return {
//         morning: function () {
//             return `Good morning,  ${name1}`;
//         },
//         afternoon: function () {
//             return `Good afternoon,  ${name1}`;
//         },
//         evening: function () {
//             return `Good evening,  ${name1}`;
//         }
//     };
// }
// const johnGreeting = sequentialGreet("Boboqul");
// console.log(johnGreeting.morning()); // 'Good Morning, John!'
// johnGreeting.evening(); // 'Good Evening, John!
// console.log(johnGreeting.evening()); // 'Good Morning, John!'

// function personalLibrary() {
//     const library = [];
//     return {
//         add: function (book) {
//             library.push(book);
//         },
//         remove: function (book) {
//             const index = library.indexOf(book);
//             if (index !== -1) {
//                 library.splice(index, 2);
//             }
//         },
//         list: function () {
//             return library;
//         }
//     };
// }
// const myLibrary = personalLibrary();
// console.log(myLibrary.add("The Nation", "The Book"));
// console.log(myLibrary.remove("The Book"));
// console.log(myLibrary.list()); // ['The Nation']s

// function multiplicationTable(num) {
//     return function () {
//         const table = [];
//         for (let i = 1; i <= 10; i++) {
//             table.push(num * i);
//         }
//         return table;
//     };
// }
// const table3 = multiplicationTable(8);
// console.log(table3());

// function favoriteColorReminder(name, color) {
//     return function () {
//         return `${name}'s facorite color is  ${color}`;
//     };
// }
// const johnsColor = favoriteColorReminder("Malika", "white");
// console.log(johnsColor()); // 'John's favorite color is Blue.'

// const numbers = [10, 20, 30, 40, 50];
// for (const number of numbers) {
//     console.log(number);
// }
// // Output: 10, 20, 30, 40, 50
// const string = "Hello";
// for (const character of string) {
//     console.log(character);
// }
// // Output: H, e, l, l, o
// const fruits = ["apple", "banana", "cherry"];
// fruits.forEach(function (fruit, index, array) {
//     console.log(`Fruit ${index + 10} of ${array.length} is ${fruit}`);
// });
// // Output:
// // Fruit 1 of 3 is apple
// // Fruit 2 of 3 is banana
// // Fruit 3 of 3 is cherry

// let nums = [42, 54, 58, 96, 87, 23];
// nums.forEach((n) => {
//     console.log(n);
// });
// const numbers = [60, 70, 80];
// const doubled = numbers.map(function (number) {
//     return number * 2;
// });
// console.log(doubled); // Output: [2, 4, 6]

// const fruits = ["apple", "banana", "cherry"];
// const mappedFruits = fruits.map(function (fruit) {
//     return `${fruit} `;
// });
// console.log(mappedFruits);
// // Output: ['apple (1 of 3)', 'banana (2 of 3)', 'cherry (3 of 3)']

// const grades = [60, 70, 80];
// const increasedGrades = grades.map(function (grade) {
//     return grade * 1.1;
// });

// console.log(increasedGrades); // Output: [66, 77, 88]

// const input = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 }
// ];
// const nameBy = input.map(function (ageNew) {
//     return { name: ageNew.name, age: ageNew.age * 2 };
// });

// console.log(nameBy);

// const isCapitilize = ["apple", "banana"];

// const isLetter = isCapitilize.map(function (fruit) {
//     return fruit.toUpperCase();
// });
// console.log(isLetter);

// const isSquare = [
//     [2, 3],
//     [4, 5],
//     [6, 7]
// ];
// const squareBy = isSquare.map(function (nums) {
//     return nums[0] * nums[0];
// });
// console.log(squareBy);

// const isAnimal = [{ word: "cat" }, { word: "dog" }]; //  string = "s";

// const animalBy = isAnimal.map(function (wild) {
//     return { word: wild.word + "s" };
// });
// console.log(animalBy);

// const priceWith = [
//     { name: "Book", price: 20 },
//     { name: "Pen", price: 1 }
// ]; // tax = 0.1

// const priceIn = priceWith.map(function (book) {
//     return { name: book.name, name: book.price * 1.1 };
// });

// console.log(priceIn);

// const numbers = [1, 2, 3, 4, 5, 6, 8];
// const evenNumbers = numbers.filter(function (number) {
//     return number % 3 === 0;
// });
// console.log(evenNumbers); // Output: [2, 4, 6]

// const array = [10, 15, 20, 25, 30];
// const evenIndexedNumbers = array.filter(function (element, index, array) {
//     return index % 2 === 0;
// });
// console.log(evenIndexedNumbers); // Output: [10, 20, 30]

// const arr = [
//     { type: "fruit", name: "apple" },
//     { type: "vegetable", name: "carrot" }
// // ];
// // //type = "fruit";

// // const isType = arr.filter(function (info) {
// //     return info.type === "fruit";
// // });
// // console.log(isType);

// // const numb = [
// //     [1, 2],
// //     [3, 4, 5]
// // ]; //    length = 2;

// // const arr1 = numb.filter(function (inter) {
// //     return inter.length === 2;
// // });
// // console.log(arr1);

// // const isRange = [
// //     { name: "Book", price: 20 },
// //     { name: "Pen", price: 15 }
// // ]; //   min = 15,    max = 20;

// // const isPrice = isRange.filter(function (amount) {
// //     return amount.price >= 15 && amount.price <= 20;
// // });
// // console.log(isPrice);

// // const text = [{ word: "cat" }, { word: "dog" }]; // letter = 'c'
// // const isWord = text.filter(function (animal) {
// //     return animal.word.startsWith("c");
// // });
// // console.log(isWord);

// // const co1 = [{ date: "2023-01-01" }, { date: "2023-01-02" }]; // date = '2023-01-02'

// // const count = co1.filter(function (dot) {
// //     return dot.date <= "2023-01-02";
// // });
// // console.log(count);

// // const nums = [1, 2, 4, 8];
// // nums.reduce((num1, num2) => {
// //     console.log(num1, num2);
// // });

// // const cats = [
// //     { name: "King", age: 12 },
// //     { name: "Duncan", age: 7 },
// //     { name: "Joy", age: 10 },
// //     { name: "Junior", age: 3 }
// // ];
// // // const catsNames = [];
// // // cats.forEach((cat) => {
// // //     catsNames.push(cat.name);
// // // });
// // // console.log("cat names:", catsNames);

// // const array = [2, 4, 6, 8];
// // const isArrayEven = array.every(function (element) {
// //     return element % 2 === 0;
// // });
// // console.log(isArrayEven); // Output: true
// console.log("_____________");

// function hasAllProperty(objects, property) {
//     return objects.every((obj) => obj[property] !== undefined);
// }

// const objects = [{ name: "Alice" }, { name: "Bob" }];
// console.log(hasAllProperty(objects, "name"));

// // function allPositive(matrix) {
// //     return matrix.every((nums) => nums.every((num) => num > 0));
// // }

// // const matrix = [
// //     [1, 2],
// //     [3, 4]
// // ];
// // console.log(allPositive(matrix));
// function array(matrix) {
//     return matrix.every((digit) => digit.every((num) => num > 0));
// }
// const arg = [
//     [1, 2],
//     [3, 4]
// ];
// console.log(array(arg));

// function subArr(arr, length) {
//     return arr.every((number22) => number22.length === length);
// }
// const all = [
//     [1, 2],
//     [3, 4]
// ];
// console.log(subArr(all, 2));
console.log("-----------");

// const array = [2, 4, 7];
// const hasOddNumber = array.some(function (element, index, array) {
//     return element % 2 !== 0;
// });
// console.log(hasOddNumber); // Output: true

// function isArr(arr, num) {
//     return arr.some((amount) => amount.some((number) => number === num));
// }
// const isNum = [
//     [1, 2],
//     [3, 4, 5]
// ];
// console.log(isArr(isNum, 5));

function createInventorySystem() {
    const items = [];

    return {
        addItem(item) {
            items.push(item);
        },
        removeItem(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },
        getItems() {
            return items.slice();
        }
    };
}

const inventorySystem = createInventorySystem();

inventorySystem.addItem("Apple");
inventorySystem.addItem("Banana");
const items = inventorySystem.getItems();
console.log(items);

inventorySystem.removeItem("Apple");
const updatedItems = inventorySystem.getItems();
console.log(updatedItems);
