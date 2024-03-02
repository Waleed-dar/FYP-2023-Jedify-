import React from "react";
import logo3 from "./Images/logo3.png"
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegRectangleList } from "react-icons/fa6";
import { RiInboxArchiveFill } from "react-icons/ri";
import { FaSitemap } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";

export default function SideBar()
{
    return(
        <div className=" ">
            <div className="">
                <img  className="h-24 w-28 ml-1 pt-7 lg:ml-4" src={logo3}  alt="logo"/>
            </div>

            <div className="mt-5 lg:text-lg text-xs md:text-sm">
      <ul>
        <li className="bg-gray-100 rounded-lg  hover:bg-blue-400 w-full h-10"> 
          <button className="btn py-1 px-1 md:py-2 md:px-2  ">
            <LuLayoutDashboard className="inline mr-2" />
            <span>Dashboard</span>
          </button>
        </li>
        <li className=" mt-3 bg-gray-100 rounded-lg  hover:bg-blue-400 w-full h-10">
          <button className="btn py-1 px-2  ">
            <FaRegRectangleList className="inline mr-2" />
            <span>My Courses</span>
          </button>
        </li>
        <li  className=" mt-3 bg-gray-100 rounded-lg  hover:bg-blue-400 w-full h-10">
          <button className="btn py-2 px-2 lg:py-2 lg:px-4 ">
            <RiInboxArchiveFill className="inline mr-2" />
            <span>Inbox</span>
          </button>
        </li>
        <li  className=" mt-3 bg-gray-100 rounded-lg  hover:bg-blue-400 w-full h-10">
          <button className="btn py-2 px-2 lg:py-2 lg:px-4 ">
            <FaSitemap className="inline mr-2" />
            <span>RoadMap</span>
          </button>
        </li>
        <li  className=" mt-3 bg-gray-100 rounded-lg  hover:bg-blue-400 w-full h-10" >
          <button className="btn py-2 px-2 lg:py-2 lg:px-4 ">
            <IoIosTime className="inline mr-2" />
            <span>Schedule</span>
          </button>
        </li>
      </ul>
    </div>
        </div>
    )
} 