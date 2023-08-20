// function filterOddNumbers(nums) {
//     const odds = [];
//     let i = 0;
//     while (i < nums.length) {
//         if (nums[i] % 2 !== 0) {
//             odds.push(nums[i]);
//         }
//         i++;
//     }
//     return odds;
// }
//with for loop//
function filterOddNumbers(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}

// function filterDivisibleByThree(nums) {
//     const sum = [];
//     let i = 0;
//     while (i < nums.length) {
//         if (nums[i] % 3 === 0) {
//             sum.push(nums[i]);
//         }
//         i++;
//     }
//     return sum;
// }
function filterDivisibleByThree(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}

// function filterPrimeNumbers(nums) {
//     const primes = [];
//     let i = 0;
//     while (i < nums.length) {
//         if (isPrimeNumber(nums[i])) {
//             primes.push(nums[i]);
//         }
//         i++;
//     }
//     return primes;
// }
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
}

function filterPrimeNumbers(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            result.push(numbers[i]);
        }
    }
    return result;
}
function filterPerfectSquares(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (Math.sqrt(numbers[i]) % 1 === 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}

// function isPerfectSquare(number) {
//     return Math.sqrt(number) === Math.floor(Math.sqrt(number));
// }

// function filterPerfectSquares(nums) {
//     const perfectSquares = [];
//     let i = 0;

//     while (i < nums.length) {
//         const num = nums[i];

//         if (isPerfectSquare(num)) {
//             perfectSquares.push(num);
//         }

//         i++;
//     }
//     return perfectSquares;
// }

// Part 2

function filterPalindromes(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] === strings[i].split("").reverse().join("")) {
            result.push(strings[i]);
        }
    }
    return result;
}

//2.1
function filterLowercase(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] === strings[i].toLowerCase()) {
            result.push(strings[i]);
        }
    }
    return result;
}
//2.2
function isOnlyConsonant(word) {
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
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (isOnlyConsonantWord(strings[i])) {
            result.push(strings[i]);
        }
    }
    return result;
}

//2.3
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
    return true;
}

function filterOneVowelWords(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (isOneVowelWord(strings[i])) {
            result.push(strings[i]);
        }
    }
    return result;
}
