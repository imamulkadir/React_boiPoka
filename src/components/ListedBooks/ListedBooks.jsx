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

  return (
    <Tabs className="py-10">
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
  );
};

export default ListedBooks;
