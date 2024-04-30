import React, { useContext, useEffect } from "react";
import { AuthContext } from "./App";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import Navbar2 from "./NavBar2";
import Calen from "./Calendar";
import UploadCourse from "./UploadCourse";

export default function TeacherDashboard() {
  const { authentication } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authentication) {
      navigate("/SignIn");
    }
  }, [authentication, navigate]);

  return (
    <div className="flex">
      <div className="w-40 h-screen bg-gray-50">
        <SideBar />
      </div>
      <div className="flex flex-col w-full">
        <div className="bg-white border-b-2 border-gray-300 p-4">
          <Navbar2 />
        </div>

        <div className="flex-grow p-4 border-black border-2">
          <div className="p-4 text-lg font-semibold">
            Recently Taught Courses
            <div>
              <button
                className="bg-blue-700 pb-1 hover:bg-blue-500 mr-2 rounded-md sm:h-8 sm:px-1 text-white sm:text-sm"
                onClick={() => navigate("/teacherDashboard/UploadCourse")} 
              >
                Upload a Course
              </button>
            </div>
          </div>
          <div className="">
            <Calen />
          </div>
        </div>
      </div>
    </div>
  );
}
