import React from "react";
import logo3 from "./Images/logo3.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegRectangleList, FaSitemap } from "react-icons/fa6";
import { RiInboxArchiveFill } from "react-icons/ri";
import { IoIosTime } from "react-icons/io";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="bg-gray-200 w-52 min-h-screen p-4 shadow-lg">
      <div className="flex items-center mb-8">
        <img className="h-28 w-full" src={logo3} alt="logo" />
      </div>

      <div className="text-sm lg:text-base">
        <ul className="space-y-3 ">
          <li>
            <Link to="/Dashboard">
              <button className="w-full flex items-center py-2 px-4 rounded-md bg-white hover:bg-blue-500 text-gray-700 hover:text-white transition-colors duration-200">
                <LuLayoutDashboard className="text-xl mr-3" />
                <span>Dashboard</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/MyCourses">
              <button className="w-full flex items-center py-2 px-4 rounded-md bg-white hover:bg-blue-500 text-gray-700 hover:text-white transition-colors duration-200">
                <FaRegRectangleList className="text-xl mr-3" />
                <span>My Courses</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/Inbox">
              <button className="w-full flex items-center py-2 px-4 rounded-md bg-white hover:bg-blue-500 text-gray-700 hover:text-white transition-colors duration-200">
                <RiInboxArchiveFill className="text-xl mr-3" />
                <span>Inbox</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/Roadmap">
              <button className="w-full flex items-center py-2 px-4 rounded-md bg-white hover:bg-blue-500 text-gray-700 hover:text-white transition-colors duration-200">
                <FaSitemap className="text-xl mr-3" />
                <span>Road Map</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/Schedule">
              <button className="w-full flex items-center py-2 px-4 rounded-md bg-white hover:bg-blue-500 text-gray-700 hover:text-white transition-colors duration-200">
                <IoIosTime className="text-xl mr-3" />
                <span>Schedule</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
