// function createCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }
// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2

// function interestCalculator(rate) {
//     return function (num) {
//         let interest = (rate / 100) * num;
//         return interest;
//     };
// }
// const simpleInterest = interestCalculator(1000);
// console.log(simpleInterest(5)); // 50

// function multiplier(factor) {
//     return function (num) {
//         return factor * num;
//     };
// }
// const double = multiplier(2);
// console.log(double(5)); // 10

// function personalLibrary() {
//     const library = [];
//     return {
//         add: function (book) {
//             library.push(book);
//         },
//         remove: function (book) {
//             library.shift(book);
//         },
//         list: function (book) {
//             return library.slice("");
//         }
//     };
// }
// const myLibrary = personalLibrary();
// console.log(myLibrary.add("The Nation"));
// console.log(myLibrary.list()); // ['The Nation']

// write a function that takes array of number. Numbers are unique, but mixed up. And it takes a Number.Remove anumber and return a new array.New array should not have a number.
//[1,5,7,3,9] == [1,5,7,9]

function takeNum(arr, num) {
    let uniqueNum = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== num) {
            uniqueNum.push(arr[i]);
        }
    }
    return uniqueNum;
}
console.log(takeNum([1, 5, 7, 3, 9], 3));
