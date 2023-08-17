// const fruits = ["apple", "banana", "cherry", "kiwi"];
// fruits.forEach(function (fruit, index, array) {
//     console.log(`Fruit ${index + 1} of ${array.length} is ${fruit}`);
// });
// Output:
// Fruit 1 of 3 is apple
// Fruit 2 of 3 is banana
// Fruit 3 of 3 is cherry

const numbers = [1, 2, 3];
const doubled = numbers.map(function (number) {
    return number * 2;
});
console.log(doubled); // Output: [2, 4, 6]

const fruits = ["apple", "banana", "cherry"];
const mappedFruits = fruits.map(function (fruit, index, array) {
    return `${fruit} (${index + 1} of ${array.length})`;
});
// console.log(mappedFruits);
// // Output: ['apple (1 of 3)', 'banana (2 of 3)', 'cherry (3 of 3)']
// const grades = [60, 70, 80];
// const increasedGrades = [];
// for (let i = 0; i < grades.length; i++) {
//     increasedGrades[i] = grades[i] * 1.1;

const grades = [60, 70, 80];
const increasedGrades = grades.map(function (grade) {
    return grade * 1.1;
});
console.log(increasedGrades); // Output: [66, 77, 88]
