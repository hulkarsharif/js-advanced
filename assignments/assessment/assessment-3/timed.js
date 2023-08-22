// Input: Takes an array of arrays where each sub-array represents a collection of books in a library's section, all belonging to the same genre. Each book is represented as an object with the following properties:
// title: String, the title of the book.
// author: String, the author's name.
// genre: String, the genre of the book.
// rating: Number, the rating of the book on a scale of 1 to 5.
// Transformation: The function must transform the input into a new array where each element is an object that represents a summary of the books. The transformation should follow these rules:
// Calculate the average rating for each genre.
// Include the title of the highest-rated book in each genre.
// Output: Returns a new array of objects with the following properties:
// genre: String, the genre of the books.
// averageRating: Number, the average rating for the genre (rounded to two decimal places).
// topBook: String, the title of the highest-rated book in the genre.
const library = [
    [
        {
            title: "Harry Potter",
            author: "J.K. Rowling",
            genre: "Fantasy",
            rating: 4.5
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            rating: 4.2
        },
        {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            rating: 4.3
        }
    ],

    [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Fiction",
            rating: 4.8
        },
        {
            title: "1984",
            author: "George Orwell",
            genre: "Fiction",
            rating: 4.0
        },
        {
            title: "Brave New World",
            author: "Aldous Huxley",
            genre: "Fiction",
            rating: 4.1
        }
    ],
    [
        {
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            genre: "Science",
            rating: 4.7
        },
        {
            title: "The Selfish Gene",
            author: "Richard Dawkins",
            genre: "Science",
            rating: 4.4
        }
    ]
];

const info = library.map(function (item) {
    let totalSum = 0;
    let averageSum = 0;
    const sum = {
        genre: item.genre,
        averageRating: item.rating,
        topBook: item.topBook
    };
    if (averageRating > totalSum) {
        averageRating = totalSum;
        return averageSum / totalSum;
    }
});

const books = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        genre: "Fantasy",
        rating: 4.5,
        publishedYear: 1997
    },
    {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        genre: "Science",
        rating: 4.7,
        publishedYear: 1988
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        rating: 3.8,
        publishedYear: 1951
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Fiction",
        rating: 4.1,
        publishedYear: 1932
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Classics",
        rating: 4.5,
        publishedYear: 1813
    }
    // ... Additional books ...
];

console.log(books);

// //2Input: The function will accept the following four arguments:
// books: An array of book objects, each having:
// title: String, the title of the book.
// author: String, the author's name.
// genre: String, the genre of the book.
// rating: Number, the rating of the book on a scale of 1 to 5.
// publishedYear: Number, the year the book was published.
// genreFilter: String, the genre to filter by.
// ratingThreshold: Number, the minimum rating to filter by (inclusive).
// yearRange: An array of two numbers, the range of publication years to filter by (inclusive).
// Filtering Criteria: The function must filter books based on the following conditions provided as arguments:
// Genre: Must match the specified genreFilter.
// Rating: Must have a rating greater than or equal to ratingThreshold.
// Publication Year: Must have a publication year within yearRange.
// Output: Returns a new array of objects, including the title and author of the filtered books.

function filterBooks(books, genreFilter, ratingTresHold, yearRange) {
    return books.filter((book) => {
        book.genre === genreFilter &&
            book.rate >= ratingTresHold &&
            book.year <= yearRange;
    });
    return { title: books.title, author: books.author };
}

const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classics",
        rating: 4.2,
        publishedYear: 1925
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        genre: "Classics",
        rating: 4.6,
        publishedYear: 1869
    },
    {
        title: "The Odyssey",
        author: "Homer",
        genre: "Classics",
        rating: 4.3,
        publishedYear: -800
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classics",
        rating: 4.3,
        publishedYear: 1960
    },
    {
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        genre: "Classics",
        rating: 4.4,
        publishedYear: 1605
    }
];

// filterBooks(books, "Classics", 4.0, [1500, 2000]);
// console.log(filterBooks);
console.log(filterBooks(books, "Fiction", 4.0, [1900, 2000]));

// //3Create a function named createInventorySystem that encapsulates a private collection of items and provides public methods to manage this collection.
// Private Data: In the outer function, define a private array to hold the items. Each item is a string representing an individual product.
// Public Methods: Provide public methods to interact with this private collection:
// addItem(item): Adds an item to the collection.
// removeItem(item): Removes an item from the collection.
// getItems(): Retrieves all items from the collection.
// Return Value: The function should return an object containing the public methods that allow interaction with the private data.
function createInventorySystem() {
    let result = [];
    function addItem(item) {
        result.push(item);
    }
    function removeItem(item1) {
        const str = result.indexOf(item1);
        if (str !== 1) {
            result.splice(str, 1);
        }
        function getItems() {
            return result.slice();
        }
    }
    return { addItem, removeItem, getItems };
}
const inventorySystem = createInventorySystem();

inventorySystem.addItem("Apple");
inventorySystem.addItem("Banana");
const items = inventorySystem.getItems();
console.log(items); // Returns: ["Apple", "Banana"]

inventorySystem.removeItem("Apple");
const updatedItems = inventorySystem.getItems();
console.log(updatedItems);
