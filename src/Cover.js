import React from "react";
import Covera from "./Images/Covera.json"
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
export default function Cover()
{
    return(
        <div className=" container flex">
        <div className="pl-4 lg:ml-11  sm:pt-14  md:pt-24 ">
            <div className="sm:text-3xl md:text-4xl font-bold ">
            <h1>Up Your <span className="text-blue-700">Skills</span> </h1>
            <h1 className="mt-1 xl:mt-2 mr-5">To <span className="text-blue-700">Advance</span> Your</h1>
            <h1 className="mt-1 xl:mt-2"><span className="text-blue-700">Career </span>Path </h1>
            <p className="text-gray-600  lg:pt-3 font-thin sm:text-xs xl:text-sm">The latest online learning and material that will help your knowledge area growing </p>
            <div className="pt-2">
            <Link to="/temp1"> <button className="bg-blue-700 pb-1 font-semibold hover:bg-blue-500 mr-2 rounded-lg sm:h-9 sm: w-28 sm:px-1 text-white sm:text-sm">Get Started</button> </Link> 
            <Link to="/temp1"><button className="bg-gray-300 pb-1  hover:bg-blue-400 mr-2 rounded-md sm:h-8 sm:w-28 sm:px-1 text-blue-700 sm:text-sm">Get Free Trail</button> </Link>
        </div>
        </div>
        </div>
        <div className=" sm:ml-16 lg:ml-52 xl:ml-96 sm:w-80 lg:w-96  "><div className=""><Lottie animationData={Covera}/></div></div>
        <div>
       

        </div>
        </div>
    )
}