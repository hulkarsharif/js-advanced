function magicCipher(sentence, cipher) {
    let letters = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        if (cipher[char]) {
            letters += cipher[char];
        } else {
            letters += char;
        }
    }
    return letters;
}
console.log(magicCipher("add me on facebook", { a: "c", d: "q" })); // "cqq me on fccebook"
magicCipher("where are you?", { v: "l", "?": "!" }); // "where are you!"
magicCipher("twmce", { m: "n", t: "d", w: "a" }); //  "dance"
console.log("_______________________________________");

function hipsterfy(sentence) {
    let word = sentence.split(" ");
    let vowel = "aoiue";
    for (let i = 0; i < sentence.length; i++) {
        if (!vowel.includes(word[i])) {
            word++;
        }
    }
    return word;
}

console.log(hipsterfy("proper")); // Output: "propr"
console.log(hipsterfy("proper tonic panther")); // Output: "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // Output: "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // Output: "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries"));
console.log("_______________________________________");

function countAdjacentSums(arr, n) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === n) {
            count++;
        }
    }
    return count;
}
console.log(countAdjacentSums([1, 5, 1], 6)); // Output: 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)); // Output: 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13));
console.log("_______________________________________");

function longestLetterStreak(str, searchLetters) {
    let longestWord = 0;
    let currentWord = 0;

    for (let i = 0; i < str.length; i++) {
        if (searchLetters.includes(str[i])) {
            currentWord++;
            if (currentWord > longestWord) {
                longestWord = currentWord;
            }
        } else {
            currentWord = 0;
        }
    }

    return longestWord;
}
console.log(longestLetterStreak("ACCA", ["C"])); // Output: 2
console.log(longestLetterStreak("YACCADCA", ["C", "A"])); // Output: 4
console.log(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"])); // Output: 3
console.log(longestLetterStreak("YYYYY", ["Z", "K", "Y"])); // Output: 5
console.log("_______________________________________");

function inPigLatin(sentence) {
    let words = sentence.split(" ");
    let consonants = "qwrtyplkjhgfdszxcvbnm";
    for (let i = 0; i < sentence.length; i++) {
        if (consonants.includes(words[i])) {
            return words + "ay";
        }
    }
    return words;
}
console.log(inPigLatin("pig")); // Output: "igpay"
console.log(inPigLatin("banana")); // Output: "ananabay"
console.log(inPigLatin("trash")); // Output: "ashtray"
