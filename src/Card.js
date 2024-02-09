import React from "react";
import { Link } from "react-router-dom";
export default function Card({data})
{
  const { name,price, description, image } = data;
    return(
  <div className=" sm:h-28 sm:w-40 lg:w-44 rounded-lg">  
  <Link to="/temp1">
  <button>
      <div className="border-gray-300 border-2 rounded-lg">
          <img  className="h-24  w-56 " src={image} alt="Course Image" />
          <div className=" pt-2">
              <h2 className=" pt-1 font-semibold text-base text-left  pl-12 ">{name}</h2>
              <p className=" pt-1 font-thin text-gray-600 text-xs">{description}</p>
              <p className=" pt-2 text-blue-700 font-bold justify-end"> {price}</p>
              <button className="mt-3  text-white py-1 px-4 rounded-md bg-blue-500 hover:bg-blue-600 w-56">Buy Now</button>
          
          </div>
      </div>
    </button>
    </Link>
  </div>

  
    )
}