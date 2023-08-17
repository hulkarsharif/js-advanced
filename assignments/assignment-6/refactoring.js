function filterNumbers(numbers, callback) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (callback(numbers[i])) {
            result.push(numbers[i]);
        }
    }
    return result;
}
//.2.

function isOdd(number) {
    return number % 2 !== 0;
}

const oddNumbers = filterNumbers([1, 2, 3, 4, 5], isOdd);
//.3
function isDivisibleByThree(number) {
    return number % 3 === 0;
}

const divisibleByThreeNumbers = filterNumbers(
    [3, 6, 7, 9, 12],
    isDivisibleByThree
);
//4.
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return number !== 1;
}
const primeNumbers = filterNumbers([2, 3, 4, 5, 6], isPrime);
//5.
function isPerfectSquare(number) {
    return Math.sqrt(number) % 1 === 0;
}

const perfectSquares = filterNumbers([1, 4, 5, 9, 16], isPerfectSquare);

// console.log(filterNums([1, 2, 3, 4, 5, 6, 7], isOddNumbers));
// console.log(filterNums([1, 2, 3, 4, 5, 6, 0], isDevisibleByThree));
// console.log(filterNums([2, 3, 4, 5, 6], isPrimeNumber));
// console.log(filterNums([1, 4, 5, 9, 16], isPerfectSquare));

//Part2=========== Callback//
function filterStrings(strings, callback) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (callback(strings[i])) {
            result.push(strings[i]);
        }
    }
    return result;
}
function isPalindrome(word) {
    return word === word.split("").reverse().join("");
}

function filterPalindromes(strings) {
    return filterStrings(strings, isPalindrome);
}

function isLowerCase(word) {
    return word === word.toLowerCase();
}

function filterLowerCase(strings) {
    return filterStrings(strings, isLowerCase);
}
function isOnlyConsonantWord(word) {
    const vowels = "aeiou";
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (vowels.includes(char)) {
            return false;
        }
    }
    return true;
}

function filterConsonantWords(strings) {
    return filterStrings(strings, isOnlyConsonantWord);
}
function isOneVowelWord(word) {
    const vowels = "aeiou";
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            counter++;
            if (counter > 1) {
                return false;
            }
        }
    }
    return counter === 1;
}

function filterOneVowelWords(strings) {
    return filterStrings(strings, isOneVowelWord);
}

console.log(filterStrings(["racecar", "madam", "apple"], isPalindrome));
console.log(filterStrings(["apple", "Banana", "cherry"], isLowerCase));
console.log(
    filterStrings(
        ["rhythm", "sky", "fly", "apple", "HELLO"],
        isOnlyConsonantWord
    )
);
console.log(filterStrings(["cat", "dog", "Apple", "All"], isOneVowelWord));
