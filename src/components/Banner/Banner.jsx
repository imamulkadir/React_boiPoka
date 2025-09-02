import React from "react";
import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 my-10 min-h-[60vh] rounded-2xl lg:min-h-[500px]">
      <div className="hero-content flex-col-reverse gap-6 sm:gap-8 lg:flex-row-reverse lg:gap-10">
        {/* Banner Image */}
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full max-w-xs rounded-lg shadow-2xl sm:max-w-sm lg:max-w-md"
        />

        {/* Banner Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Discover Your Next <br />
            <span className="text-[#00BFAA]">Favorite Book!</span>
          </h1>
          <button
            onClick={() => {
              const element = document.getElementById("books-section");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn btn-primary mt-4 sm:mt-6"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
