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

const topBook = (books) => {
    let totalRate = 0;
    let maxRate = 0;
    let lastBook = "";

    books.forEach((book) => {
        totalRate += book.rating;

        if (book.rating > maxRate) {
            maxRate = book.rating;
            lastBook = book.title;
        }
    });
    const average = totalRate / books.length;

    return {
        genre: books[0].genre,
        average: Number(average.toFixed(2)),
        topBook: lastBook
    };
};
const isLibrary = (library) => {
    return library.map((genreBooks) => {
        const summary = topBook(genreBooks);
        return summary;
    });
};
console.log(isLibrary(library));

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

const filterBooks = (books, genreFilter, ratingThreshold, yearRange) => {
    return books
        .filter((book) => {
            return (
                book.genre === genreFilter &&
                book.rating <= ratingThreshold &&
                book.publishedYear >= yearRange[0] &&
                book.publishedYear <= yearRange[1]
            );
        })
        .map((book) => {
            return { title: book.title, author: book.author };
        });
};
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
