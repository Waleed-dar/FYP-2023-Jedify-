import React, { useState } from "react";
import Sanimation from "./Images/SignupAnimation.json"
import Lottie from "lottie-react";
import Navbar from "./Navbar";

export default function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        purpose: '',
        userName: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-white via-blue-100 to-blue-400">
            <div className="w:1/2 md:w-10/12 p-6 ">
                <div className="pl-10 mt-2 pt-5 text-5xl">
                    Sign Up For Free
                    <div className="h-96 md:w-96"><Lottie animationData={Sanimation}/></div>
                </div>
            </div>

            <div className="w-2/3 p-6">
                <form onSubmit={handleSubmit} className="max-w-md">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-1/2 px-3 mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                First Name:
                            </label>
                            <input
                                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="firstName"
                                placeholder="abc"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="w-1/2 px-3 mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Last Name:
                            </label>
                            <input
                                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="lastName"
                                placeholder="yuo"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-1/2 px-3 mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Phone Number:
                            </label>
                            <input
                                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="tel"
                                name="phoneNumber"
                                placeholder="9284518581"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2 px-3 mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email:
                            </label>
                            <input
                                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                name="email"
                                placeholder="XYZ@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-1/2 px-3 mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Username:
                            </label>
                            <input
                                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="userName"
                                value={formData.userName}
                                onChange={handleChange}
                                placeholder="XYZ"
                                required
                            />
                        </div>
                        <div className="w-1/2 px-3 mb-6">
                            <label className=" block text-gray-700 text-sm font-bold mb-2">
                                Password:
                            </label>
                            <input
                                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                name="password"
                                placeholder="****"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <button
                                type="submit"
                                className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                    <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Continue with Google
            </button>
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 ml-8 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Continue with Facebook
            </button>
                </form>
            </div>
       </div>
       </div>
    );
}
