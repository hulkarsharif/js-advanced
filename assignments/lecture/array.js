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

function isPalindrome(str) {
    let polindrom = str.toLowerCase();
    return polindrom === polindrom.split("").reverse().join("");
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("eye"));
console.log(isPalindrome("google"));

const book = [
    {
        title: "Shum bola",
        author: "Said Ahmad",
        yearPublished: 1990,
        genres: ["Novel", "Drama", "Tragedy"],
        ratings: [
            { id: 1, score: 9.9 },
            { id: 2, score: 8.9 },
            { id: 3, score: 5.9 },
            { id: 4, score: 4.5 }
        ]
    },
    {
        title: "Shum bola",
        author: "Said Ahmad",
        yearPublished: 1990,
        genres: ["Novel", "Drama", "Tragedy"],
        ratings: [
            { id: 1, score: 9.9 },
            { id: 2, score: 8.9 },
            { id: 3, score: 5.9 },
            { id: 4, score: 4.5 }
        ]
    }
];

function findMaxNum(arr) {
    let numMax = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (numMax < arr[i][j]) {
                numMax = arr[i][j];
            }
        }
    }
    return numMax;
}
console.log(
    findMaxNum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
);

function countCharacters(arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let char = arr[i][j];
            if (count[char]) {
                count[char]++;
            } else {
                count[char] = 1;
            }
        }
    }
    return count;
}
console.log(
    countCharacters([
        ["a", "b", "a"],
        ["c", "a", "d"]
    ])
);

function filterDivisibleByThree(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 3 === 0) {
                newArr.push(arr[i][j]);
            }
        }
    }
    return newArr;
}
console.log(
    filterDivisibleByThree([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 12]
    ])
);

function findLongestString(arr) {
    let longWord = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        let text = arr[i];
        for (let j = 0; j < arr[i].length; j++) {
            if (longWord.length < text[j].length) {
                longWord = text[j];
            }
        }
    }

    return longWord;
}
console.log(
    findLongestString([
        ["apple", "banana"],
        ["carrot", "date", "eggplant"],
        ["fig"]
    ])
); // Output: 'eggplant'

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                sum += arr[i][j];
            }
        } else {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumArray([1, 2, [3, 4, 5, 6], 7, [8, 9]]));
//Output: 45;
function capitalizeStrings(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let capLetter = [];
        for (let j = 0; j < arr[i].length; j++) {
            if (capLetter.push(arr[i][j].toUpperCase())) {
                newArr.push(capLetter);
            }
        }
    }
    return newArr;
}
console.log(
    capitalizeStrings([["apple", "banana"], ["carrot", "date"], ["eggplant"]])
); // Output: [['APPLE', 'BANANA'], ['CARROT', 'DATE'], ['EGGPLANT']]

function findMinMaxArrays(arr) {}
