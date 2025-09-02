import React from "react";
import starIco from "../../assets/star.png";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 rounded-2xl border-1 p-6 shadow-sm lg:w-96">
        <figure className="rounded-2xl bg-gray-400 py-8">
          <img className="h-[166px]" src={image} alt={bookName} />
        </figure>
        <div className="card-actions my-6 justify-start">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="badge badge-outline rounded-2xl border-none bg-[#F4FBF2] py-3 text-green-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="mb-4 text-2xl font-bold">{bookName}</h2>
        <h4 className="mb-4 text-sm text-gray-500">By: {author}</h4>
        <div className="flex items-center justify-between gap-2 border-t border-dashed border-gray-200 border-t-gray-300 pt-4">
          <p className="text-md text-gray-300">{category}</p>
          <p className="text-md flex items-center gap-1 text-gray-300">
            {rating}
            <img className="h-4 w-4" src={starIco} alt="star" />
          </p>
        </div>
      </div>
    </Link>

    // <div>
    //   <img src={image} alt={bookName} />
    //   <div>
    //     {tags.map((tag) => (
    //       <span key={tag}>{tag}</span>
    //     ))}
    //   </div>
    //   <h3>{bookName}</h3>
    //   <p> By: {author}</p>
    //   <div>
    //     <p>{category}</p>
    //     <p>
    //       {rating} <img className="h-4 w-4" src={starIco} alt="star" />
    //     </p>
    //   </div>
    // </div>
  );
};

export default Book;
