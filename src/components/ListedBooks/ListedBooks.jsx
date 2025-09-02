import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishlist } from "../utility/addToDb";
import ReadList from "../ReadList/ReadList";
import WishList from "../WishList/WishList";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();
  const [wishlistList, setWishlistList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId),
    );
    setReadList(readBookList);

    const storedWishlist = getStoredWishlist();
    const storedWishlistInt = storedWishlist.map((id) => parseInt(id));
    const wishlistBookList = allBooks.filter((book) =>
      storedWishlistInt.includes(book.bookId),
    );
    setWishlistList(wishlistBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "Ratings") {
      const sortedReadList = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedReadList);
    } else {
      const sortedReadList = [...readList].sort(
        (a, b) => b.totalPages - a.totalPages,
      );
      setReadList(sortedReadList);
    }
    // const sorteReadList = [...readList].sort((a, b) => {
    //   if (sortType === "Ratings") {
    //     return b.rating - a.rating;
    //   } else {
    //     return b.totalPages - a.totalPages;
    //   }
    // });
    // setReadList(sorteReadList);
  };

  return (
    <div className="flex flex-col items-center justify-center">
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
      <Tabs className="py-10 lg:w-full">
        <TabList>
          <Tab>Read List ({readList.length})</Tab>
          <Tab>Wishlist ({wishlistList.length})</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 space-y-4">
            {readList.map((book) => (
              <ReadList key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 space-y-4">
            {wishlistList.map((book) => (
              <WishList key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
