import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 text-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <h3 className="font-bold text-2xl ">githubProject</h3>
          <span>
            <Link to="/" className="mr-2 text-xl">
              Home
            </Link>
            <Link to="/favourites" className="text-xl">
              Favourites
            </Link>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
