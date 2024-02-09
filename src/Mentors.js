import React from "react";
import { Mentorsdata } from "./DataFile";
import MentorCard from "./MentorCard";

export default function Mentors() {
  
    return (
    <div className="flex flex-col items-center">
      <div className="text-center">
        <h1 className="mr-3 text-blue-600">Mentors</h1>{/* This need to be converted into a link later on */}
        <h1 className="text-3xl font-semibold">Meet Our Heroes</h1>
        <p className="text-gray-600 sm:ml-10">
          On JEdify, instructors from all over the world educate millions of
          students. We offer knowledge and abilities.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 sm:gap-y-7 sm:gap-x-7 mt-5">
        {Mentorsdata.map((mentordata, index) => {
          return (
            <div key={index}>
             <MentorCard mentordata={mentordata} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
