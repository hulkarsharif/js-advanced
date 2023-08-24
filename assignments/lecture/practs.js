// const library = [
//     [
//         {
//             title: "Harry Potter",
//             author: "J.K. Rowling",
//             genre: "Fantasy",
//             rating: 4.5
//         },
//         {
//             title: "The Hobbit",
//             author: "J.R.R. Tolkien",
//             genre: "Fantasy",
//             rating: 4.2
//         },
//         {
//             title: "The Lord of the Rings",
//             author: "J.R.R. Tolkien",
//             genre: "Fantasy",
//             rating: 4.3
//         }
//     ],
//     [
//         {
//             title: "To Kill a Mockingbird",
//             author: "Harper Lee",
//             genre: "Fiction",
//             rating: 4.8
//         },
//         {
//             title: "1984",
//             author: "George Orwell",
//             genre: "Fiction",
//             rating: 4.0
//         },
//         {
//             title: "Brave New World",
//             author: "Aldous Huxley",
//             genre: "Fiction",
//             rating: 4.1
//         }
//     ],
//     [
//         {
//             title: "A Brief History of Time",
//             author: "Stephen Hawking",
//             genre: "Science",
//             rating: 4.7
//         },
//         {
//             title: "The Selfish Gene",
//             author: "Richard Dawkins",
//             genre: "Science",
//             rating: 4.4
//         }
//     ]
// ];

// const topBook = (books) => {
//     let totalRate = 0;
//     let maxRate = 0;
//     let lastBook = "";

//     books.forEach((book) => {
//         totalRate += book.rating;

//         if (book.rating > maxRate) {
//             maxRate = book.rating;
//             lastBook = book.title;
//         }
//     });
//     const average = totalRate / books.length;

//     return {
//         genre: books[0].genre,
//         average: Number(average.toFixed(2)),
//         topBook: lastBook
//     };
// };
// const isLibrary = (library) => {
//     return library.map((genreBooks) => {
//         const summary = topBook(genreBooks);
//         return summary;
//     });
// };
// console.log(isLibrary(library));
console.log("............................................");

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
