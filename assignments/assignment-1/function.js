String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};
console.log("Hello".reverse()); //"olleH"

String.prototype.removeVowels = function () {
    let vowels = "aoiue";
    let sum = "";
    for (let i = 0; i < this.length; i++) {
        if (!vowels.includes(this[i])) {
            sum += this[i];
        }
    }
    return sum;
};
console.log("Hello".removeVowels());

String.prototype.countWords = function () {
    return this.split(" ").length;
};
// console.log("Hello World".countWords());

// String.prototype.wrapIntags = function (tag) {
//     return `<${tag}>${this}</${tag}>`;
// };
// console.log("Hello".wrapInTags("b"));

String.prototype.isPalindrome = function () {
    return (
        this.toLowerCase() === this.split("").reverse("").join("").toLowerCase()
    );
};
console.log("racecar".isPalindrome());
console.log("bubble".isPalindrome());

Number.prototype.isPrime = function () {
    for (let i = 2; i < this; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return this > 1;
};

console.log((7).isPrime());

Number.prototype.toFactorial = function () {
    let factorial = 1;
    for (let i = 2; i <= this; i++) factorial *= i;
    return factorial;
};

console.log((3).toFactorial());

Number.prototype.findFactors = function () {
    const factors = [];
    for (let i = 1; i <= this; i++) {
        if (this % i === 0) factors.push(i);
    }
    return factors;
};
console.log((10).findFactors());

Number.prototype.isPerfectSquare = function () {
    for (let i = 0; i < this; i++) {
        if (i * i === this) {
            return true;
        }
    }
    return false;
};
console.log((8).isPerfectSquare());

Number.prototype.isOdd = function () {
    return this % 2 !== 0;
};
console.log((7).isOdd());
console.log((4).isOdd());

Array.prototype.findMax = function () {
    let maxNum = this[0];
    for (let i = 1; i < this.length; i++) {
        if (this[i] > maxNum) maxNum = this[i];
    }
    return maxNum;
};

console.log([1, 2, 6].findMax());

Array.prototype.average = function () {
    let sum = 0;
    for (let i = 1; i < this.length; i++) sum += this[i];

    return sum / this.length;
};
console.log([1, 2, 3, 4].average());

Array.prototype.removeDuplicates = function () {
    let unique = [];
    let word = {};
    for (let i = 0; i < this.length; i++) {
        if (!word[this[i]]) {
            unique.push(this[i]);
            word[this[i]] = true;
        }
    }
    return unique;
};

console.log(["a", "b", "b", "c"].removeDuplicates());
Array.prototype.shuffle = function () {
    for (let i = 0; i < this.length; i++) {
        const j = Math.floor(Math.random() * this.length);
        const temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};
console.log([1, 2, 3].shuffle());
console.log(["a", "b", "c"].shuffle());
