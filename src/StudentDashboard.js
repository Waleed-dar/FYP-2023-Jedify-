import React, { useContext, useEffect } from "react";
import SideBar from "./SideBar";
import Navbar2 from "./NavBar2";
import { AuthContext } from "./App";
import { useNavigate } from "react-router-dom";
import Calen from "./Calendar";

export default function Dashboard() {
  const { authentication } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authentication) {
      navigate("/SignIn");
    } 
  }, [authentication]);
  return (
    <div className="flex">
      <div className="w-40 h-screen bg-gray-50">
        <SideBar />
      </div>
      <div className="flex flex-col w-full">
        <div className="bg-white border-b-2 border-gray-300 p-4">
          <Navbar2 />
        </div>

        <div className="flex-grow p-4">
          <div className="p-4 text-lg font-semibold">
            <div className="">
              Recently Accessed Courses
              <Calen />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
