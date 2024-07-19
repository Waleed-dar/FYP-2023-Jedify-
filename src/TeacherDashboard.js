import React, { useContext, useEffect } from "react";
import { AuthContext } from "./App";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import Navbar2 from "./NavBar2";
import Calen from "./Calendar";

export default function TeacherDashboard() {
  const { authentication } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authentication) {
      navigate("/SignIn");
    }
  }, [authentication, navigate]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-52 h-screen bg-gray-100 text-white shadow-md">
        <SideBar />
      </div>

      <div className="flex flex-col flex-grow">

        <div className="bg-white border-b-2 border-gray-300 shadow-md">
          <Navbar2 />
        </div>

        {/* Content Area */}
        <div className="flex-grow p-6 ">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Recently Taught Courses
            </h2>
            <div className="mb-4">
              <button
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                onClick={() => navigate("/teacherDashboard/UploadCourse")}
              >
                Upload a Course
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
