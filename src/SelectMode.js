import React, { useState } from "react";
import { PiSelectionBackground, PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { MdOutlinePersonAddAlt } from "react-icons/md"
import { FaUniversity } from "react-icons/fa";
import { SideItems } from "./DataFile";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function SelectMode() {
    
    const[Role,setRole]=useState(null);
    const navigate=useNavigate();
    return (
    <div className="flex justify-center items-center h-screen bg-auto bg-blue-200">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-xl w-full">
        <h1 className="font-bold text-4xl mb-8 text-center text-blue-900">
          Start As
        </h1>
        <ul className="space-y-6">
          <li>
            <button className="bg-blue-500 hover:bg-blue-600 text-white  font-bold py-1 px-3 rounded-lg w-full focus:outline-none focus:shadow-outline" 
            onClick={()=>{
                setRole(SideItems.Students)
                navigate("/SignIn")
            }}>
                     < PiStudentBold className="h-10 w-10 inline " /> Student
            </button>
          </li>
          <li>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            onClick={()=>{
                setRole(SideItems.Teacher)
                navigate("/SignIn")
            }}>
            <GiTeacher className="h-10 w-10 inline " /> Teacher
            </button>
          </li>
          <li>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-0 rounded-lg w-full focus:outline-none focus:shadow-outline"
            onClick={()=>{
                setRole(SideItems.Tech)
                navigate("/SignIn")
            }}
            >
            <MdOutlinePersonAddAlt className="h-10 w-10 inline " />Tech HR
            </button>
          </li>
          <li>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-0 rounded-lg w-full focus:outline-none focus:shadow-outline"
            onClick={()=>{
                setRole(SideItems.University)
                navigate("/SignIn")
            }}>
            <FaUniversity className="h-8 w-8 inline " /> University HR
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
