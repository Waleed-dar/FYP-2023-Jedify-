import React from "react";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  const { name, price, description, image } = data;

  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white ">
      <Link to="/SignIn" className="block">
        <img className="w-full h-40 object-cover" src={image} alt="Course Image" />
      </Link>
      <div className="p-4">
        <Link to="/SignIn" className="block">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
        </Link>
        <div className="flex justify-between items-center">
          <p className="text-blue-700 font-bold">{price}</p>
          <Link to="/SignIn">
            <button className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-300">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
