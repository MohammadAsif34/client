import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 select-none sticky top-0 z-10">
        <section className="container h-20 m-auto text-white flex items-center">
          {/* logo  */}
          <div className="w-48 ">
            <h1 className="text-3xl">logo</h1>
          </div>
          {/* navItem  */}
          <div className="flex-1">
            <ul className="flex text-xl">
              <Link to={"/"}>
                <li className="px-4 py-2 rounded-md hover:bg-white hover:text-gray-800">
                  Home
                </li>
              </Link>
              <li className="px-4 py-2 rounded-md hover:bg-white hover:text-gray-800">
                Project
              </li>
              <li className="px-4 py-2 rounded-md hover:bg-white hover:text-gray-800">
                Blogs
              </li>
              <Link to={"/about"}>
                <li className="px-4 py-2 rounded-md hover:bg-white hover:text-gray-800">
                  About
                </li>
              </Link>
            </ul>
          </div>
          {/* register-login || user avatar  */}
          <div className="text-xl ">
            {false ? (
              // user avatar
              <div className="flex items-center">
                <span className="mx-1 ">Hi, User</span>
                <img
                  src="/vite.svg"
                  alt=""
                  className="w-12 h-12 mx-1 border-2 rounded-full cursor-pointer"
                />
              </div>
            ) : (
              // register-login
              <div className="text-gray-800">
                <Link to={"/register"}>
                  <span className="mx-2 px-4 py-2 bg-white rounded-full hover:bg-gray-300 ">
                    Register
                  </span>
                </Link>
                <Link to={"/login"}>
                  <span className="mx-2 px-4 py-2 bg-white rounded-full hover:bg-gray-300 ">
                    Login
                  </span>
                </Link>
              </div>
            )}
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
