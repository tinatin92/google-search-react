import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkTheme, setDarkTeme }) => {
  return (
    <div className="p-5 pb-0 flex flew-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gary-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
            Google 🔍
          </p>
        </Link>
        <button
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white rounded-full px-2 py-1 hover:shadow-lg"
          type="button"
          onClick={() => setDarkTeme(!darkTheme)}
        >
          {darkTheme ? "Light ☀️" : "Dark 🌙"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
