import React from "react";
import { Score1 } from "./DataFile";

export default function Score() {
  return (
        <div className="flex space-x-20 justify-center ">
      {Score1.map((Score1) => (
              <div key={Score1.key}>
                <div className="">
                <span className="sm:text-xl lg:text-2xl font-bold xl:text-3xl 2xl:text-4xl">{Score1.value}<br/></span>
                <span className="text-xs font-semibold">{Score1.label} </span> 
              </div>
              {/*<div className="w-0.5 h-9 bg- bg-gray-400 mt-6"></div> */} 
            </div>
            ))
            }
    </div>
    );
}
