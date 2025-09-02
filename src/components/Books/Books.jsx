import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div id="books-section" className="my-20 lg:px-8">
      <h2 className="my-10 text-center text-3xl font-bold sm:text-4xl lg:text-4xl">
        All Books
      </h2>

      <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6 lg:p-0">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;

// 1. State to store books
// 2. Fetch books from the JSON file Using useEffect
// 3. Display books in the UI
