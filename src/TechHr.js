import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar3 from "./Navbar3";
import { AuthContext } from "./App";

export default function TechHr() {
  const { authentication } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authentication) {
      navigate("/SignIn");
    }
  }, [authentication, navigate]);

  return (
    <div>
      <Navbar3 />
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mt-10 text-blue-700">
          Top Performing Students at JEdify
        </h1>
        <div className="flex flex-col items-center mt-10 space-y-8">
          <div className="w-52 h-52 border-2 border-gray-300 flex items-center justify-center rounded-lg bg-white shadow-md">
            <p className="text-gray-500 font-semibold">Table</p>
          </div>
          <button
            onClick={() => {
              navigate("/Subscribe");
            }}
            className="mt-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View All List
          </button>
        </div>
      </div>
    </div>
  );
}
