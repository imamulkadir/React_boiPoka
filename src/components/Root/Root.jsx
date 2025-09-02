import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Root = () => {
  return (
    <div className="font-work-sans mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Keeps layout centered and adds padding for small/medium screens */}
      <ScrollToTop />
      <NavBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Root;
