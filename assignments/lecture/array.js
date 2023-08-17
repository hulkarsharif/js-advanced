// String.prototype.countWords = function () {
//     let words = this.split(" ");
//     return words.length;
// };
// // console.log("Hello".countWords());

// String.prototype.wrapInTags = function (tag) {
//     return `<${tag}>${this}</${tag}>`;
// };
// // console.log("Hello".wrapInTags("b"));

// Number.prototype.findFactors = function () {
//     let factors = [];
//     for (let i = 0; i <= this; i++) {
//         if (this % i === 0) {
//             factors.push(i);
//         }
//     }
//     return factors;
// };
// // console.log((20).findFactors());

// Number.prototype.isPerfectSquare = function () {
//     for (let i = 0; i <= this; i++) {
//         if (i * i === this) return true;
//     }
//     return false;
// };
// // Number.prototype.isPerfectSquare = function () {
// //     const num = this.valueOf();
// //     for (let i = 0; i <= this; i++) {
// //         if (i * i === num) {
// //             return true;
// //         }
// //     }
// //     return false;
// // };
// console.log((9).isPerfectSquare());
// console.log((9).isPerfectSquare());

// function numtwo(start, end) {
//     for (let num = start; num <= end; num++) {
//         console.log(num);
//     }
// }

// function isleapYear(year) {
//     if (year % 100 === 0 && year % 400 !== 0) {
//         return false;
//     } else if (year % 4 === 0) {
//         return true;
//     }
//     return false;
// }
// console.log(isleapYear(2011));
// console.log(isleapYear(2000));
// console.log(isleapYear(1900));
// console.log(isleapYear(2004));

// function getSquareInRangeCount(start, end) {
//     var count = 0;
//     for (var num = start; num <= end; num++) {
//         if (num * num >= start && num * num <= end) {
//             count++;
//         }
//     }
//     return count;
// }
// function getSquareInRange(start, end) {
//     var result = [];
//     for (var num = start; num <= end; num++) {
//         var square = num * num;
//         if (square >= start && square <= end) {
//             result.push(num);
//         }
//     }
//     return result;
// }

// function compare(num) {
//     let random = Math.random() * 10;
//     return function () {
//         return random > num;
//     };
// }

// compare(5)();

// function compare(randonNum1) {
//     return function (randonNum2) {
//         return randonNum2 > randonNum1;
//     };
// }

// const isGreater = compare(Math.random());
// console.log(isGreater(Math.random()));
console.log(myFunctionDeclaration()); // what does this output?

function myFunctionDeclaration() {
    return "This is a function declaration!";
}

console.log(myFunctionExpression()); // what does this output?

var myFunctionExpression = function () {
    return "This is a function expression!";
};
