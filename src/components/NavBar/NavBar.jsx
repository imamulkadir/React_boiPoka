import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeClassName =
    "bg-[#323334] border-1 border-[#00BFAA] text-white rounded px-2 ";

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClassName : "")}
        >
          Home
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li> */}
      <li>
        <NavLink
          to="/listed-books"
          className={({ isActive }) => (isActive ? activeClassName : "")}
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/author"
          className={({ isActive }) => (isActive ? activeClassName : "")}
        >
          Author
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 rounded-b-2xl px-4 sm:px-6 lg:px-8">
      {/* Left side: Logo + Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile dropdown menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <h1 className="btn btn-ghost hidden text-xl hover:bg-none lg:flex">
          <span>
            <img className="h-6 w-6" src="./book.svg" alt="" />
          </span>
          BoiPoka
        </h1>
      </div>

      {/* Center: Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right side: Auth Buttons */}
      <div className="navbar-end flex gap-2 sm:gap-4">
        <a className="btn btn-primary btn-sm sm:btn-md">Sign In</a>
        <a className="btn btn-accent btn-sm sm:btn-md">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
