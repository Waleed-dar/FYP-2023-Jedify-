import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "./DataFile"; // Ensure this file correctly exports the courses object

export default function UploadCourse() {
  const [formData, setFormData] = useState({
    CourseName: "",
    description: "",
    imageLink: "",
    price: "",
    country: "",
    location: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData({
      CourseName: "",
      description: "",
      imageLink: "",
      price: "",
      country: "",
      location: ""
    });
    navigate("/teacherDashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Add a New Listing</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label htmlFor="courses" className="block mb-2 text-sm font-medium">
              Select a Course
            </label>
            <select
              id="courses"
              name="CourseName"
              value={formData.CourseName}
              onChange={handleChange}
              className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="" disabled>Choose a Course</option>
              {Object.keys(courses).map((key) => (
                <option key={key} value={courses[key]}>
                  {courses[key]}
                </option>
              ))}
              <option value="others">Others</option>
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="description" className="block font-medium">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="imageLink" className="block font-medium">Image Link</label>
            <input
              type="text"
              id="imageLink"
              name="imageLink"
              value={formData.imageLink}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block font-medium">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="country" className="block font-medium">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="location" className="block font-medium">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="col-span-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
