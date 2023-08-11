function filterOddNumbers(nums) {
    const odds = [];
    let i = 0;
    while (i < nums.length) {
        if (nums[i] % 2 !== 0) {
            odds.push(nums[i]);
        }
        i++;
    }
    return odds;
}

function filterDivisibleByThree(nums) {
    const sum = [];
    let i = 0;
    while (i < nums.length) {
        if (nums[i] % 3 === 0) {
            sum.push(nums[i]);
        }
        i++;
    }
    return sum;
}

function filterPrimeNumbers(nums) {
    const primes = [];
    let i = 0;
    while (i < nums.length) {
        if (isPrimeNumber(nums[i])) {
            primes.push(nums[i]);
        }
        i++;
    }
    return primes;
}

function isPerfectSquare(number) {
    return Math.sqrt(number) === Math.floor(Math.sqrt(number));
}

function filterPerfectSquares(nums) {
    const perfectSquares = [];
    let i = 0;

    while (i < nums.length) {
        const num = nums[i];

        if (isPerfectSquare(num)) {
            perfectSquares.push(num);
        }

        i++;
    }
    return perfectSquares;
}

// Part 2

function filterPalindromes(arr) {
    let sum = [];
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i]) {
            sum.push(arr[i]);
        }
    }
    return sum;
}

//2.1
function filterLowercase(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let startLowerCase = arr[i].toLowerCase();
        if (startLowerCase.includes(arr[i])) {
            result.push(arr[i].toLowerCase());
        }
    }
    return result;
}

//2.2
function filterConsonantWords(arr) {
    let result = [];
    let vowel = "aiuoe";
    for (let i = 0; i < arr.length; i++) {
        if (!vowel.includes(arr[i][0])) {
            result.push(arr[i]);
        }
    }
    return result;
}

//2.3
function filterOneVowelWords(arr) {
    let result = [];
    let vowels = "aeiou";
    for (let i = 0; i < arr.length; i++) {
        let vowelCount = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (vowels.includes(arr[i][j])) {
                vowelCount++;
            }
        }
        if (vowelCount === 1) {
            result.push(arr[i]);
        }
    }
    return result;
}
