import React from "react";
import { Link } from "react-router-dom";
import logo from "./Images/logo.png";
import Temp1 from "./Temp1";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex items-center justify-between ">
          <div>
        <img
          className="sm:w-20 sm:h-11 md:w-24 md:h-16 lg:w-32 xl:w-36 ml-1 "
          src={logo}
          alt="Logo" 
          />
          </div>
          <ul className="sm:text-sm flex sm:space-x-3  md:space-x-6 lg:space-x-8 sm:mt-5 sm:justify-end font-semibold">
          <div className=""></div>
            <li className="text-blue-700">
            <Link to="/">Home</Link> 
            </li>
            <li className="hover:text-blue-700">
              <Link to="/temp1">About</Link> 
            </li>
            <li  className="hover:text-blue-700">
              <Link to="/temp1">Courses</Link>
            </li>
            <li  className="hover:text-blue-700">
                <Link to="/temp1">Contact Us</Link>
            </li>
            <li  className="hover:text-blue-700">
               <Link to="/temp1"> FAQS</Link>
            </li>
            <li  className="hover:text-blue-700">
                <Link to="/temp1"> Sign in </Link>
            </li>
            <li className="mb-5 ">
            <Link to="/temp1"><button className="bg-blue-700 pb-1  hover:bg-blue-500 mr-2 rounded-md sm:h-8 sm:px-1 text-white sm:text-sm">Create free account</button>
            </Link>
            </li>
          </ul>
        </nav>
        </div>
  );
};

export default Navbar;
