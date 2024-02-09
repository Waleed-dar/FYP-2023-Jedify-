import React from "react";
import {Courses} from "./DataFile";
import Card from "./Card";
import { Link } from "react-router-dom";
import Temp1 from "./Temp1";
export default function Recomendation()
{
    return (
        <div className="">
            <div className="ml-2">
             <Link to="/temp1"className="flex sm:text-xs md:text-sm pl-3 mt-4  text-blue-600 hover:text-blue-400">Explore more programs</Link>
            <h1 className="flex mt-5 sm:text-lg  md:text-2xl font-semibold">Our Most Popular Courses </h1>
            <p className=" flex text-xs text-gray-500">The most recommended Courses</p>
                <div className="grid mt-3 sm:grid-cols-2 sm:gap-y-52 sm:gap-x-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 sm:ml-3 xl:gap-x-20 2xl:gap-x-80 xl:ml-7">
                {Courses.map((Courses,index)=>{
                    return(
                            <div  key={index}>
                            <Card data={Courses}/>
                            </div>
                             )
                })
                }
                </div>
                <div class="flex justify-center sm:mt-10 ">
                <Link to="/temp1"> <button className="text-white py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 mt-36">Explore ALL Courses</button></Link>
</div>

            </div>
           

         
        </div>
    )
}