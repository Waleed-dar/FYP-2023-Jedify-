import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const ThankYouPage = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-4">
          Your subscription has been successfully processed.
        </p>
        <button onClick={()=>{
            navigate(-2)
        }}>
        <Link to="" className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
          Return to Home
        </Link>
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
