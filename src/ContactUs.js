import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"
import map from "./Images/map.png"
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="">
      <Navbar />

      <div className=" rounded-lg bg-gradient-to-br from-white via-blue-100 to-blue-200 ">
        <div className="mt-16 pt-5 font-bold text-lg text-blue-800 underline underline-offset-4 flex justify-center">
          CONTACT US
        </div>
        <div className="flex">
          <form className="max-w-sm mx-auto mt-8">
            <div className="font-semibold"> Leave Us a Message</div>
            <div className="mb-4 mt-3">
              <label className="block mb-2 text-sm font-bold" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="XYZ"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="XYZ@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-bold" htmlFor="feedback">
                Feedback
              </label>
              <textarea
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="feedback"
                placeholder="Your feedback..."
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="w-1/3 ml-8 mt-16">
            <a href="https://www.google.com/maps/place/University+of+Management+%26+Technology/@31.4511418,74.2924791,15z/data=!4m6!3m5!1s0x39190143e0e99feb:0xf39379efff4dd86!8m2!3d31.4511418!4d74.2924791!16zL20vMGRteHlj?entry=ttu" target="_blank"> <img src={map}/></a>
            <h2 className="text-lg font-bold mb-2"></h2>
            <p className="text-gray-400">JEdify</p>
            <p> C-II Block C 2 Phase 1 Johar Town, Lahore</p>
            <p>Punjab 54770</p>
            <p className="mt-4">Phone: (042) 111 300 200</p>
            <p>Email: JEdify@example.com</p>
          </div>
        </div>
      </div>
     <div className="mt-14">
     <Footer/>
        </div> 
    </div>
  );
}
