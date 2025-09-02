// WishList.jsx
import React from "react";
import { Link } from "react-router-dom";
import yearIco from "../../assets/published.png";
import publisherImg from "../../assets/publisherImg.png";
import totalPagesImg from "../../assets/pagesImg.png";

const WishList = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;
  return (
    <div className="flex flex-col items-start gap-6 rounded-2xl border p-4 lg:flex-row lg:items-center lg:gap-12">
      {/* image */}
      <div className="w-full justify-center rounded-2xl py-2 pl-2 lg:ml-4 lg:flex lg:w-1/6 lg:bg-[#F3F3F3] lg:p-8">
        <img
          src={image}
          alt={bookName}
          className="h-36 w-36 rounded-2xl object-cover"
        />
      </div>

      {/* content */}
      <div className="flex w-full flex-col justify-between pt-0 pl-2 lg:w-3/4 lg:pt-2">
        <h2 className="text-xl font-bold sm:text-2xl">{bookName}</h2>
        <p className="text-lg">{author}</p>

        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
          <p className="flex flex-wrap items-center gap-2 text-lg">
            Tags
            {tags.map((tag) => (
              <span
                className="badge badge-outline mx-1 rounded-2xl border-none bg-[#F4FBF2] py-2 font-medium text-green-800 sm:mx-2 sm:py-3"
                key={tag}
              >
                #{tag}
              </span>
            ))}
          </p>

          <p className="flex items-center gap-2 text-lg">
            <img
              className="h-5 w-5 sm:h-6 sm:w-6"
              src={yearIco}
              alt={yearOfPublishing}
            />
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>

        <div className="mt-2 mb-2 flex flex-col gap-4 sm:flex-row sm:gap-8">
          <p className="flex items-center gap-2 text-lg">
            <img src={publisherImg} alt={publisher} />
            Publisher: {publisher}
          </p>
          <p className="flex items-center gap-2 text-lg">
            <img src={totalPagesImg} alt={totalPages} />
            Total Page: {totalPages}
          </p>
        </div>

        <div className="divider"></div>

        <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <p className="rounded-2xl border-none bg-[#abc5e6] px-4 py-2 font-medium text-blue-700">
            Category: {category}
          </p>
          <p className="rounded-2xl bg-orange-50 px-4 py-2 font-medium text-yellow-500">
            Rating: {rating}
          </p>
          <Link to={`/books/${bookId}`}>
            <button className="btn btn-primary rounded-2xl">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishList;
