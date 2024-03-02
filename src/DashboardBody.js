import React from "react";
import { Courses } from "./DataFile";
import Card from "./Card";
import Calen from "./Calendar"

export default function DashboardBody()
{
    return(
        <div className="">
            Recently Accessed Courses
           <Calen/>
        </div>
    )
}