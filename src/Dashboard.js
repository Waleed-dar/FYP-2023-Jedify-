import React, { useContext } from "react";
import { UserDataContext } from "./SignIn";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Navbar2 from "./NavBar2";
import DashboardBody from "./DashboardBody";

export default function Dashboard() {
  const userName = useContext(UserDataContext);

  console.log(userName, "Dashboard");
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
          <div className="p-4 text-lg font-semibold" >
            <DashboardBody/>
          </div>
        </div>
      </div>
      </div>
  );
}
