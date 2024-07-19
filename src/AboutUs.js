import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import A1 from "./Images/About US (animation).json";
import Lottie from "lottie-react";

export default function AboutUs() {
    return (
        <div className="w-full">
            <Navbar />
            <div className="container px-4 py-8 mx-auto bg-gray-100 bg-gradient-to-tr from-white via-blue-50 to-blue-200">
                <h1 className="sm:text-4xl md:text-4xl font-bold text-blue-700">About Us</h1>
                <div className="flex justify-between items-start mt-4">
                    <div className="w-full lg:w-2/4 text-left">
                        <h2 className="sm:text-2xl md:text-3xl font-bold mt-4">
                            <span className="text-blue-700">JEdify</span> Providing The Best Opportunities To Students And All Other Connected Parties
                        </h2>
                        <p className="mt-4 text-sm">
                            The primary objective of this project is to develop an eLearning platform that delivers a high-quality and engaging learning experience for both
                            students and teachers. The platform will help students enhance their skills and receive career guidance while enabling teachers to improve their teaching skills, gain experience, and earn money by providing quality course content. Additionally, it aims to bridge the gap between academia and industry by supplying tech companies with professional candidates and assisting HR departments in acquiring highly qualified and skilled personnel.
                        </p>
                    </div>
                    <div className="flex-shrink-0 ml-8">
                        <Lottie animationData={A1} className="w-full max-w-xs lg:max-w-lg" />
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 w-full py-4 bg-blue-950">
            </div>
        </div>
    );
}
