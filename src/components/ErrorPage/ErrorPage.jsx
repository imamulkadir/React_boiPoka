import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6 text-center">
      <h1 className="mb-4 text-7xl font-extrabold text-red-500">404</h1>
      <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
        Oops! Page not found
      </h2>
      <p className="mb-6 max-w-md text-base text-gray-600 md:text-lg">
        The page you're looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={handleGoBack}
        className="cursor-pointer rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
