import React, { useState, useContext } from "react";
import Lottie from "lottie-react";
import Hand from "./Images/Hand.json";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext, AuthContext } from "./App";
import { ProfileImage } from './ManageProfile';

export default function Navbar2() {
  const [searchQuery, setSearchQuery] = useState("");
  const { authentication, setAuthentication } = useContext(AuthContext);
  const { userInfo } = useContext(UserDataContext);
  const [profileImage, setProfileImage] = useState(ProfileImage[0]);
  const navigate = useNavigate();

  const handleImageUpload = (newImage) => {
    setProfileImage(newImage); // Update the local state with the new image
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="bg-white border-b-2 border-gray-300 p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Lottie className="h-10 w-10" animationData={Hand} />
          <h2 className="text-blue-700 text-lg">Welcome, {userInfo}..</h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-gray-200 rounded-md shadow-sm"
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 focus:outline-none rounded-l-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-r-md focus:outline-none"
          >
            <AiOutlineSearch className="h-5 w-5" />
          </button>
        </form>

        <ul className="flex items-center space-x-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <Link to="/my-courses" className="text-blue-600 hover:text-blue-800">
            My Courses
          </Link>
          <Link to="/roadmap" className="text-blue-600 hover:text-blue-800">
            Road Map
          </Link>
          <div
            onClick={() => {
              setAuthentication(false);
              localStorage.clear();
              console.log("Signed out", authentication);
              navigate("/SignIn");
            }}
            className="text-blue-600 cursor-pointer hover:text-blue-800"
          >
            Sign Out
          </div>
          <Link to="/ManageProfile">
            <div className="rounded-full border-2 border-black h-12 w-12 overflow-hidden">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
