import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Subscribe () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subscriptionPlan: 'basic',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      // Handle form submission logic here (e.g., API call, validation)
      console.log(formData);
      // Navigate to the Thank You page
      navigate("/Subscribe/ThankYou");
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-400 py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-28">
        <h2 className="text-2xl font-semibold text-center mb-6">Subscribe Now!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subscriptionPlan" className="block text-sm font-medium text-gray-700">
              Subscription Plan
            </label>
            <select
              id="subscriptionPlan"
              name="subscriptionPlan"
              value={formData.subscriptionPlan}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:scale-105 hover:shadow-lg transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
