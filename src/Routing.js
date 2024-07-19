import React from "react";
import Navbar from "./Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage.js";
import Temp1 from "./Loading.js";
import ContactUs from "./ContactUs.js";
import SignIn from "./SignIn.js";
import StudentDashboard from "./StudentDashboard.js";
import TeacherDashboard from "./TeacherDashboard.js";
import SelectMode from "./SelectMode.js";
import SignUp from "./SignUp.js";
import UploadCourse from "./UploadCourse.js";
import AboutUs from "./AboutUs.js";
import Roadmap from "./Roadmap.js";
import ManageProfile from "./ManageProfile.js";
import TechHr from "./TechHr.js";
import Uadmin from "./Uadmin.js";
import Subscribe from "./Subscribe.js";
import ThankYouPage from "./ThankYou.js";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/temp1" element={<Temp1 />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/studentdashboard" element={<StudentDashboard/>} />
        <Route path="/teacherDashboard" element={<TeacherDashboard/>}/>
        <Route path="/teacherDashboard/UploadCourse" element={<UploadCourse/>}/>
        <Route path="/SelectMode" element={<SelectMode />} />
        <Route path="/SelectMode/SignUp" element={<SignUp/>}/>
        <Route path="/Roadmap" element={<Roadmap/>} />
        <Route path="/ManageProfile" element={<ManageProfile/>}/>
        <Route path="/TechHr" element={<TechHr/>}/>
        <Route path="/Uadmin" element={<Uadmin/>}/>
        <Route path="/Subscribe" element={<Subscribe/>}/>
        <Route path="/Subscribe/ThankYou" element={<ThankYouPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
