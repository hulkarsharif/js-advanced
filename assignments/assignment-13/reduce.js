//1 Create a function called organizeBooks that takes an array of book objects as an argument. Each book object contains title, author, and genre. The function should return an object where each key is a genre and each value is an array of titles belonging to that genre.
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { title: "1984", author: "George Orwell", genre: "Science Fiction" },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic"
    }
];

function organizeBooks(books) {
    return books.reduce((acc, keyValue) => {
        const { title, genre } = keyValue;

        if (acc[genre]) {
            acc[genre].push(title);
        } else {
            acc[genre] = [title];
        }

        return acc;
    }, {});
}
console.log(organizeBooks(books));
//Output {
//     'Classic': ['To Kill a Mockingbird', 'The Great Gatsby'],
//     'Science Fiction': ['1984']
//   }

//2Create a function called vowelFrequency that takes an array of strings and returns an object that represents the frequency of each vowel (a, e, i, o, u) in all the words combined
function vowelFrequency(words) {
    let vowels = "aeiou";
    return words.reduce((acc, letter) => {
        for (let keys of letter) {
            if (vowels.includes(keys));
            if (acc[keys]) {
                acc[keys]++;
            } else {
                acc[keys] = 1;
            }
        }
        return acc;
    }, {});
}

const words = ["apple", "orange", "grape"];
console.log(vowelFrequency(words)); //{ 'a': 2, 'e': 2, 'i': 0, 'o': 1, 'u': 0 }

//3Create a function called numericalAnalysis that takes an array of numbers as an argument. This function should return an object containing the sum of all numbers, the product of all numbers, and the count of negative numbers in the array.

function numericalAnalysis(numbers) {
    return numbers.reduce((acc, num) => {
        acc.sum = num++;
        acc.product = numbers.length;
        acc.negativeNum = (acc.negativeNum || 0) + (num < 0);

        return acc;
    }, {});
}

const numbers = [1, -1, 2, -2, 3, -3];
console.log(numericalAnalysis(numbers));
