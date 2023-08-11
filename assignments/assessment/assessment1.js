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

function removeLastVowel(word) {
    let vowel = "aeiou";
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowel.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
}

function hipsterfy(sentence) {
    let words = sentence.split(" ");
    for (let j = 0; j < words.length; j++) {
        let word = words[j];
        words[j] = removeLastVowel(word);
    }
    return words.join(" ");
}

// // Example

console.log(hipsterfy("proper"));
console.log(hipsterfy("proper tonic panther"));
console.log(hipsterfy("towel flicker banana"));

console.log(hipsterfy("proper")); // Output: "propr"
console.log(hipsterfy("proper tonic panther")); // Output: "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // Output: "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // Output: "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries"));
console.log("_______________________________________");

function countAdjacentSums(arr, n) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 1] === n) {
            count++;
        }
    }
    return count;
}
console.log(countAdjacentSums([1, 5, 1], 6)); // Output: 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)); // Output: 0//i=0=7; i=1=2
console.log(countAdjacentSums([6, 5, 11, 2, 5, 10, 3], 13));
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
    let vowel = "aeouiAEOUI";
    let newWord = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let firstLetter = word[0];
        if (vowel.includes(firstLetter)) {
            return newWord.push(word + "ay");
        } else {
            let firstVowelIndex = -1;
            for (leti = 0; i < word.length; i++) {
                if (vowel.includes(words[i])) {
                    firstVowelIndex = i;
                    break;
                }
            }
        }
    }
    return words;
}
console.log(inPigLatin("pig")); // Output: "igpay"
console.log(inPigLatin("banana")); // Output: "ananabay"
console.log(inPigLatin("trash")); // Output: "ashtray"
