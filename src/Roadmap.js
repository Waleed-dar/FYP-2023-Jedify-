import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Navbar2 from "./NavBar2";
import { courses } from "./DataFile";

export default function RoadmapViewer() {
  const [roadmapHtml, setRoadmapHtml] = useState("");
  const [roadmapType, setRoadmapType] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (roadmapType) {
      fetchRoadmap(roadmapType);
    }
  }, [roadmapType]);

  const fetchRoadmap = async (type) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:4000/roadmap?type=${type}`,
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.text();
      setRoadmapHtml(data);
      console.log(roadmapType, roadmapHtml);
    } catch (error) {
      console.error("Failed to fetch roadmap:", error);
      setRoadmapHtml("Failed to load content.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <div className="w-40 h-screen bg-gray-50">
        <SideBar />
      </div>
      <div className="flex flex-col w-full">
        <div className="bg-white border-b-2 border-gray-300 p-4">
          <Navbar2 />
        </div>
        <h1 className="flex font-semibold text-lg justify-center mt-6 ">Role Based Road Maps </h1>
        <div className=" mt-8 flex justify-center items-center">
          <div className=" grid sm:grid-cols-2 sm:gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 sm:ml-3  justify-center">
            {Object.entries(courses).map(([key, value]) => (
              <button
                key={key}
                className="  bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                onClick={() => setRoadmapType(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: roadmapHtml }} />
        )}
      </div>
    </div>
  );
}
