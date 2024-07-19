import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import Hand from "./Images/Hand.json";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserDataContext, AuthContext } from "./App";
import { ProfileImage } from './ManageProfile';
import logo3 from "./Images/logo3.png";

const Navbar3 = () => {
  const { authentication, setAuthentication } = useContext(AuthContext);
  const { userInfo } = useContext(UserDataContext);
  const [profileImage, setProfileImage] = useState(ProfileImage[0]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (location.pathname !== "/studentdashboard" && location.pathname !== "/teacherDashboard") {
      console.log(location.pathname);
      navigate(-1);
    }
  };

  return (
    <nav className="bg-blue-700 p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img className="h-16 w-20" src={logo3} alt="logo" />
          <h2 className="text-white text-lg font-semibold">Welcome, {userInfo}!</h2>
          <Lottie className="h-10 w-10" animationData={Hand} />
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="#" onClick={handleHomeClick} className="text-white hover:text-blue-300 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <div
              onClick={() => {
                setAuthentication(false);
                localStorage.clear();
                console.log("Signed out", authentication);
              }}
              className="text-white cursor-pointer hover:text-blue-300 transition duration-200"
            >
              Sign Out
            </div>
          </li>
          <li>
            <Link to="/ManageProfile">
              <div className="rounded-full border-white border-2 h-12 w-12 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-200">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="rounded-full h-full w-full object-cover" 
                  />
                ) : (
                  <span className="text-gray-500">No Image</span>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar3;
