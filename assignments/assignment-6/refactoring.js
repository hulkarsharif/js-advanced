function filterNums(nums, cb) {
    const odd = [];
    let i = 0;
    while (i < nums.length) {
        if (cb(nums[i])) {
            odd.push(nums[i]);
        }
        i++;
    }
    return odd;
}

function isOddNumbers(nums) {
    return nums % 2 !== 0;
}
function isDevisibleByThree(nums) {
    return nums % 3 === 0;
}

function isPrimeNumber(num) {
    if (num <= 1) {
        return false;
    }
    let i = 2;

    while (i < num) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}

function isPerfectSquare(num) {
    return Math.sqrt(num) === Math.floor(Math.sqrt(num));
}
// console.log(filterNums([1, 2, 3, 4, 5, 6, 7], isOddNumbers));
// console.log(filterNums([1, 2, 3, 4, 5, 6, 0], isDevisibleByThree));
// console.log(filterNums([2, 3, 4, 5, 6], isPrimeNumber));
// console.log(filterNums([1, 4, 5, 9, 16], isPerfectSquare));

//Part2=========== Callback//
function filterWords(arr, cb) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function isPalindrome(arr) {
    return arr.toLowerCase() === arr.toLowerCase().split("").reverse().join("");
}
function isLowerCase(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i].toUpperCase())) {
            return false;
        }
    }
    return true;
}
function isConsonantWord(word) {
    const vowels = "aeiou";
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            return false;
        }
    }
    return true;
}
function isOneVowelWord(word) {
    const vowels = "aeiou";
    let vowelCount = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            vowelCount++;
        }
    }
    return vowelCount === 1;
}

console.log(filterWords(["racecar", "madam", "apple"], isPalindrome));
console.log(filterWords(["apple", "Banana", "cherry"], isLowerCase));
console.log(
    filterWords(["rhythm", "sky", "fly", "apple", "HELLO"], isConsonantWord)
);
console.log(filterWords(["cat", "dog", "Apple", "All"], isOneVowelWord));
