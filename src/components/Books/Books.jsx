import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState("");
  const [sortedBooks, setSortedBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setSortedBooks(data);
      });
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "Ratings") {
      const sortedReadList = [...sortedBooks].sort(
        (a, b) => b.rating - a.rating,
      );
      setSortedBooks(sortedReadList);
    } else {
      const sortedReadList = [...sortedBooks].sort(
        (a, b) => b.totalPages - a.totalPages,
      );
      setSortedBooks(sortedReadList);
    }
  };

  return (
    <div id="books-section" className="my-20 lg:px-8">
      <h2 className="my-10 text-center text-3xl font-bold sm:text-4xl lg:text-4xl">
        All Books
      </h2>
      <div className="flex justify-end">
        <div className="dropdown dropdown-center my-10">
          <div tabIndex={0} role="button" className="btn m-1">
            {sort ? `Sort by: ${sort} ⬇️` : "Sort by ⬇️"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            onClick={() => document.activeElement.blur()}
          >
            <li onClick={() => handleSort("Ratings")}>
              <a>Ratings</a>
            </li>
            <li onClick={() => handleSort("Number of Pages")}>
              <a>Number of Pages</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6 lg:p-0">
        {sortedBooks.map((book) => (
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
