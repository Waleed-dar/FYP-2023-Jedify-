import React from "react";
import { SideItems } from "./DataFile";
import student from "./Images/student.png";
import teacher from "./Images/teacher.png";
import hr from "./Images/hr.png";
import universities from "./Images/universities.png";
import { useState } from "react";
import { SideItemsData } from "./DataFile";
export default function Table() {
  const [CurrentSelectedItem, setCurrentSelectedItem] = useState(
    SideItems.Students,
  );

  return (
    <div className="flex">
      <ul className="">
        <li
          className=" rounded-lg border-gray-100 border-2 hover:bg-blue-400 "
          onClick={() => {
            setCurrentSelectedItem(SideItems.Students);
          }}
        >
          <button className="font-semibold flex items-center text-lg  ">
            <img className="h-9 w-10 " src={student} alt="std image" />
            {SideItems.Students}
          </button>
        </li>

        <li
          className="  mt-1 rounded-lg border-gray-100 border-2 hover:bg-blue-400 "
          onClick={() => {
            setCurrentSelectedItem(SideItems.Teacher);
          }}
        >
          <button className="  font-semibold flex items-center text-lg">
            <img className="h-9 w-10 " src={teacher} alt="teacher image" />
            {SideItems.Teacher}
          </button>
        </li>
        <li
          className="mt-1 rounded-lg  border-gray-100 border-2 hover:bg-blue-400"
          onClick={() => {
            setCurrentSelectedItem(SideItems.Tech);
          }}
        >
          <button className="font-semibold flex items-center text-lg">
            <img className="h-9 w-10 " src={hr} alt="hr image" />
            {SideItems.Tech}
          </button>
        </li>
        <li
          className="mt-1 rounded-lg border-gray-100 border-2 hover:bg-blue-400"
          onClick={() => {
            setCurrentSelectedItem(SideItems.University);
          }}
        >
          <button className="font-semibold flex items-center text-lg">
            <img
              className="h-9 w-10 "
              src={universities}
              alt="university image"
            />
            {SideItems.University}
          </button>
        </li>
      </ul>
      <div className="border-gray-300 rounded-md border-2 sm:ml-1 lg:ml-7 h-52 ">
        <h1 className="text-blue-700 font-thin sm:text-3xl lg:text-4xl pl-4">BENIFITS</h1>
        <div className="border-t border-blue-800 my-2"></div>
        <div className="ml-3">
          {SideItemsData.map((value) => {
            if (value.key === CurrentSelectedItem) {
              return (
                <div key={value.key} className="">
                  <ul className="list-disc ml-10 text-gray-800">
                    <li className="blue-bullet mt-2">{value.p1}</li>
                    <li className="blue-bullet mt-4">{value.p2}</li>
                    <li className="blue-bullet mt-4">{value.p3}</li>
                  </ul>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
