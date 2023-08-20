// const fruitBox = [
//     { type: "fruit", name: "apple" },
//     { type: "vegetable", name: "carrot" }
// ];
// const bunchOf = fruitBox.filter(function (info) {
//     return info.type === "fruit";
// });
// console.log(bunchOf);

// //Output: [{ type: 'fruit', name: 'apple' }])

// const numbers = [
//     [1, 2],
//     [3, 4, 5]
// ]; // length = 2
// const subArr = numbers.filter(function (num) {
//     return num.length === 2;
// });
// console.log(subArr);

// const product = [
//     { name: "Book", price: 20 },
//     { name: "Pen", price: 15 }
// ]; // min = 15, max = 20

// const rangeOf = product.filter(function (item) {
//     return item.price >= 15 && item.price <= 20;
// });
// console.log(rangeOf); // [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }]

const animal = [{ word: "cat" }, { word: "dog" }];
const animalist = animal.filter(function (item) {
    return item.word.startsWith("c");
});
console.log(animalist); // Output: [{ word: 'cat' }]

const nums = [{ date: "2023-01-01" }, { date: "2023-01-02" }]; // date = '2023-01-02'

const dateNum = nums.filter(function (item) {
    return item.date >= "2023-01-02";
});
console.log(dateNum); // [{ date: '2023-01-01' }]
