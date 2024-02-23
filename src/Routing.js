import React from "react";
import Navbar from "./Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from "./Homepage.js";
import Temp1 from "./Loading.js";
import ContactUs from "./ContactUs.js";

export default function Routing() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/temp1" element={<Temp1 />} />
    <Route path="/ContactUs" element={<ContactUs />} />
    {/* Add more Route components for other pages as needed */}
  </Routes>
</BrowserRouter>

  );
}
