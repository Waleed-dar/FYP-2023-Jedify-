import React from "react";
import logo from "./Images/logo.png"
export default function Quote()
{
    return(
        <div className="text-center">
<div className="flex justify-center items-center">
  <img className="sm:h-36 w-48" src={logo} alt="Companies logo" />
</div>
             <h1 className="font-semibold sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                Empower Your Tomorrow: Navigating Careers.<br/> Discover, Decide, Excel - Your Journey Starts Here!</h1>
        </div>
    )
}