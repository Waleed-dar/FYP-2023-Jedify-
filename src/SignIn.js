import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Lottie from "lottie-react";
import Login1 from "./Images/login2.json";
import login2 from "./Images/Login1.json";
import { AuthContext } from "./App";
import { UserDataContext } from "./App";

export default function SignIn() {
  const [userInput, setUserInput] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const { authentication, setAuthentication } = useContext(AuthContext);
  const { userInfo, setUserInfo } = useContext(UserDataContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (authentication) {
      navigate("/Dashboard");
    }
  }, [authentication]);

  const login = () => {
    if (userPassword === "1234") {
      setUserInfo(userInput);
      setAuthentication(true);
      console.log(userInfo);
    } else {
      window.alert("Wrong password. Try again.");
    }
  };

  return (
    <div className=" bg-gradient-to-br from-white via-blue-100 to-blue-900 items-center justify-center">
      <div className="mt-2 pt-5 font-bold text-lg flex justify-center">
        <div>
          <Lottie className="h-72 w-72" animationData={Login1}></Lottie>
        </div>
      </div>
      <h1 className=" mt-4 font-semibold text-xl text-center">Welcome Back!</h1>
      <div className="flex flex-col items-center pt-5 h-screen bg-gray-100">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              User name
            </label>
            <input
              id="Username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="Name"
              placeholder="Username"
              onChange={(e) => setUserInput(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                login();
              }}
            >
              Login
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password
            </a>
          </div>
          <div className="mb-4">
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Continue with Google
            </button>
          </div>
          <div>
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Continue with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
