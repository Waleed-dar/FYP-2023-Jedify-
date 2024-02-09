import React from "react";
import { Link } from "react-router-dom";
export default function MentorCard({ mentordata }) {


  const { name, Domain, description, image } = mentordata;
  return (
    
    <button>
      <Link to="/temp1">
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg mx-auto max-w-md text-center">
        <img className='h-20 w-20 sm:ml-28 md:ml-36 lg:ml-44 mt-2 rounded-full' src={image} alt="Person Image"  />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="italic text-blue-700 text-base">{Domain}</p>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
      </Link>
    </button>
  );
}
