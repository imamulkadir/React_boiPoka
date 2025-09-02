import React from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addToStoredList, addToStoredWishlist } from "../utility/addToDb";
import starIco from "../../assets/star.png";

const BookDetail = () => {
  //useParams is used to get the bookId from the url parameter
  const { bookId } = useParams();

  const id = parseInt(bookId);

  //useLoaderData is used to get the data from the loader
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  //   console.log(book);

  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    category,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
    tags,
  } = book;

  const navigate = useNavigate();

  const handleMarkAsRead = (currentBookId) => {
    /**
     * 1. What to store or save
     * 2. Where to store or save: database or local storage
     * 3. Array, Object, String, Number
     * 4. Check if already exists else add
     */
    addToStoredList(currentBookId);

    // console.log("Mark as Read");
    // toast.success("Marked as Read", { autoClose: 1000 });
  };

  const handleAddToWishlist = (currentBookId) => {
    addToStoredWishlist(currentBookId);
    // console.log("Add to Wishlist");
    // toast.success("Added to Wishlist");
  };

  return (
    <div>
      <Link className="flex flex-1 justify-end p-2" to="/">
        <button
          className="btn btn-outline btn-accent"
          onClick={() => navigate(-1)}
        >
          👈 Back
        </button>
      </Link>

      <div className="my-4 flex flex-col items-start gap-8 lg:flex-row">
        {/* Left Side / Image */}
        <div className="w-full rounded-2xl bg-[#F3F3F3] p-4 lg:w-1/2 lg:p-24">
          <img
            className="object-fit h-[400px] w-full rounded-2xl sm:h-[500px] md:object-cover lg:h-[600px]"
            src={image}
            alt={bookName}
          />
        </div>

        {/* Right Side / Content */}
        <div className="w-full lg:w-1/2">
          <h3 className="my-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {bookName}
          </h3>
          <h3 className="text-lg">By: {author}</h3>
          <div className="divider"></div>
          <h3 className="text-lg">Category: {category}</h3>
          <div className="divider"></div>
          <h3 className="text-lg">
            <span className="font-bold">Review: </span>
            {review}
          </h3>
          <h3 className="my-4">
            <span className="font-bold">Tags</span>{" "}
            {tags.map((tag) => (
              <span
                className="badge badge-outline mx-1 rounded-2xl border-none bg-[#F4FBF2] py-2 text-green-800 sm:mx-2 sm:py-3"
                key={tag}
              >
                #{tag}
              </span>
            ))}
          </h3>
          <div className="divider"></div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table border-0">
              <tbody className="border-0">
                <tr className="border-0">
                  <td className="font-semibold">Number of Pages:</td>
                  <td>{totalPages}</td>
                </tr>
                <tr className="border-0">
                  <td className="font-semibold">Publisher:</td>
                  <td>{publisher}</td>
                </tr>
                <tr className="border-0">
                  <td className="font-semibold">Year of Publishing:</td>
                  <td>{yearOfPublishing}</td>
                </tr>
                <tr className="border-0">
                  <td className="font-semibold">Rating:</td>
                  <td className="flex items-center gap-2">
                    {rating}
                    <img className="h-4 w-4" src={starIco} alt="star" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => handleMarkAsRead(currentBookId)}
              className="btn btn-outline btn-accent"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleAddToWishlist(currentBookId)}
              className="btn btn-accent font-bold"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
