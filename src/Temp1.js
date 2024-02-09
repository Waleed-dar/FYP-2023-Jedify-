import React from "react";
import Navbar from "./Navbar";
import Lottie from "lottie-react";
import Work from "./Images/WorkInPorgress.json"
import Footer from "./Footer";
export default function Temp1()
{
    return(
        <div className="">
            <Navbar/>
            <div className="  mt-20 flex justify-center"><Lottie className="h-44 w-44 to-blue-800" animationData={Work}></Lottie></div> 
            <h1 className="text-center mt-8 font-semibold text-2xl ">Work In Progress</h1>
            
        </div>
        
    )
}