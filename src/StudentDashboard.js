import React, { useContext, useEffect } from "react";
import SideBar from "./SideBar";
import Navbar2 from "./NavBar2";
import { AuthContext } from "./App";
import { useNavigate } from "react-router-dom";
import Calen from "./Calendar";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const { authentication } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!authentication) {
      navigate("/SignIn");
    } 
  }, [authentication]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="  w-52 h-screen bg-gray-800 text-white shadow-lg">
        <SideBar />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="bg-white border-b-2 border-gray-300 p-4 shadow-md">
          <Navbar2 />
        </div>

        <div className="flex-grow p-6 md:p-8 bg-gray-100">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Recently Accessed Courses
            </h2>
            <div className="">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
