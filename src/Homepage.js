import React from "react";
import Navbar from "./Navbar";
import Cover from "./Cover";
import Routing from "./Routing";
import Score from "./Score";
import Recomendation from "./Recomendation";
import Table from "./Table";
import Mentors from "./Mentors";
import Footer from "./Footer";
import Quote from "./Quote";
import Dashboard from "./Dashboard";


export default function Homepage() {
       
  return (
   
      <div>
        <div className="">
          <Navbar />
        </div>
        <div className="bg-gray-100 bg-gradient-to-tr from-white via-blue-50 to-blue-200 ">
          <Cover />
        </div>
        <div className="  mt-8">
          <Score />
        </div>
        <div className=" justify-start  ">
          <Recomendation />
        </div>
        <div className="mt-16 sm:ml-8 lg:ml-12 xl:ml-44  ">
          <Table />
        </div>
        <div className="  mt-16 ">
          <Mentors />
        </div>
        <div className="mt-16  h-60 bg-gradient-to-tr from-white via-blue-50 to-blue-200">
          <Quote />
        </div>
        <div className="mt-28">
          <Footer />
        </div>
        </div>
  );
}

