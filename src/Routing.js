import React from "react";
import Navbar from "./Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from "./Homepage.js";
import Temp1 from "./Loading.js";
import ContactUs from "./ContactUs.js";
import SignIn from "./SignIn.js";
import Dashboard from "./Dashboard.js";
import SelectMode from "./SelectMode.js";

export default function Routing() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/temp1" element={<Temp1 />} />
    <Route path="/ContactUs" element={<ContactUs />} />
    <Route path="/SignIn" element={<SignIn />} />
    <Route path="/Dashboard" element={<Dashboard/>}/>
    <Route path="/SelectMode" element={<SelectMode/>}/>
    {/* Add more Route components for other pages as needed */}
  </Routes>
</BrowserRouter>

  );
}
