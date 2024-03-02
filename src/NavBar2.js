import React from "react";
import Lottie from "lottie-react";
import Hand from "./Images/Hand.json";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar2() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="">
      <div className="flex lg:justify-between">

        <h2 className="text-blue-700 mt-12 text-lg ">Welcome,XYZ</h2>
        <Lottie className="h-10 w-10 mt-9  " animationData={Hand}></Lottie>


        <form
          onSubmit={handleSubmit}
          className=" mt-9 flex justify-center items-center bg-white rounded-md shadow-sm"
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            className="px-4 py-2 focus:outline-none w-24 sm:w-full rounded-l-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-r-md focus:outline-none"
          >
            <AiOutlineSearch className="h-5 w-5" />
          </button>
        </form>

        <ul className="flex font-semibold text-xs lg:text-sm space-x-1 sm:ml-2 md:space-x-4 md:ml-2 mt-12 lg:ml-12 lg:space-x-10 xl:ml-12 xl:space-x-14">
          <Link to="">
            <li>Home </li>
          </Link>

          <Link to="">
            <li className="text-blue-600">My Courses </li>
          </Link>

          <Link to="">
            <li>Sign Out</li>
          </Link>
          <a href="https://roadmap.sh/">
            <li>Road Map</li>
          </a>
          <div className="rounded-full border-black border-2">Image</div>
        </ul>
      </div>
    </div>
  );
}
