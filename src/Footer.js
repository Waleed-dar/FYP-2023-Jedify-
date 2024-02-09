import React from "react";
import logo from "./Images/logo.png"
import { Link } from "react-router-dom";
export default function footer()
{
    return(
<div className="">
<footer class="bg-blue-950 text-white py-6  bottom-0 left-0 w-full">
  < div class="container mx-auto flex justify-between items-center">
    <div class="flex items-center space-x-4">
      <img className="" src={logo} alt="Logo" class="h-8"/>
      <div className="pl-10">
        <h4 class="font-semibold text-gray-400">Company</h4>
        <ul class="list-none mt-2">
          <li><a href="#" class="hover:text-gray-300 mt-1">About Us</a></li>
          <li><a href="#" class="hover:text-gray-300 mt-1">Careers</a></li>
          <li><a href="#" class="hover:text-gray-300 mt-1">Press</a></li>
          <li><a href="#" class="hover:text-gray-300 mt-1">News</a></li>
        </ul>
      </div>
    </div>
    <div className="">
        <h4 class="font-semibold text-gray-400">Socials</h4>
        <ul class="list-none mt-2">
          <li><a href="#" class="hover:text-gray-300 mt-1">Twitter</a></li>
          <li><a href="#" class="hover:text-gray-300 mt-1">Linkedln</a></li>
          <li><a href="#" class="hover:text-gray-300 mt-1">Github</a></li>
          <li><a href="#" class="hover:text-gray-300 mt-1">Instagram</a></li>
        </ul>
      </div>
    <div className="">
        <h4 class="font-semibold text-gray-400">Legal</h4>
        <ul class="list-none mt-2">
          <li><Link to="/temp1"class="hover:text-gray-300 mt-1">Terms</Link></li>
          <li><Link to="/temp1"class="hover:text-gray-300 mt-1">Privacy</Link></li>
          <li><Link to="/temp1"class="hover:text-gray-300 mt-1">Cookies</Link></li>
          <li><Link to="/temp1"class="hover:text-gray-300 mt-1">Contact</Link></li>
          </ul>
      </div>
      <div class="flex items-center space-x-4 mt-2">
      <Link to="/temp1" class="text-gray-300 hover:text-white">
                     <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 0H1.54C.69 0 0 .69 0 1.54v21.92C0 23.31.69 24 1.54 24h20.92c.85 0 1.54-.69 1.54-1.54V1.54C24 .69 23.31 0 22.46 0zM7.84 19.54H4.46V9.32h3.38v10.22zM6.14 8.05c-1.14 0-2.06-.9-2.06-2.02s.92-2.02 2.06-2.02c1.14 0 2.06.9 2.06 2.02s-.92 2.02-2.06 2.02zM19.54 19.54h-3.38v-5.68c0-1.34-.47-2.25-1.67-2.25-1.08 0-1.72.73-2 1.43-.1.26-.12.63-.12.99v5.51h-3.38s.05-10.78 0-11.88h3.38v1.68c.45-.69 1.25-1.67 3.05-1.67 2.22 0 3.9 1.45 3.9 4.57v6.3z"/></svg>
        </Link>
        <Link to="/temp1" class="text-gray-300 hover:text-white">
          <svg svg class="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.54 4.75c-.86.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.94.56-1.98.97-3.1 1.19-.89-.95-2.16-1.54-3.57-1.54-2.71 0-4.91 2.2-4.91 4.91 0 .39.04.76.13 1.12-4.09-.21-7.72-2.16-10.15-5.15-.42.72-.66 1.56-.66 2.46 0 1.7.86 3.19 2.16 4.07-.8 0-1.55-.22-2.2-.54v.06c0 2.38 1.69 4.36 3.93 4.81-.41.12-.85.18-1.3.18-.32 0-.65-.03-.97-.09.65 2.02 2.54 3.49 4.78 3.54-1.75 1.38-3.96 2.21-6.36 2.21-.41 0-.82-.02-1.23-.07 2.27 1.46 4.96 2.31 7.86 2.31 9.43 0 14.61-7.8 14.61-14.61 0-.22 0-.44-.02-.66.01-.4.03-.8.01-1.19 1-.72 1.87-1.63 2.56-2.66z"/></svg>
          </Link>

          <Link to="/temp1" class="text-gray-300 hover:text-white">
          <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 24V14h-3v10h3zM8.25 11.67C8.25 10.21 7.04 9 5.5 9S2.75 10.21 2.75 11.67v1.67H0v-1.67C0 9.62 2.04 7 5.5 7S11 9.62 11 11.67v1.67h-2.75v-1.67zM19.67 24V14h-3v10h3zM17.42 0H6.58C3 0 0 3 0 6.58v10.83C0 21 3 24 6.58 24h10.83C21 24 24 21 24 17.42V6.58C24 3 21 0 17.42 0zM18 18H6v-2.2c0-1.52 1.2-2.8 2.72-2.8h.56c.4-.4.9-.6 1.42-.6s1.02.2 1.42.6h.56c1.52 0 2.72 1.28 2.72 2.8V18zm0-5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v1h12v-1z"/></svg>
        </Link>
</div>
  </div>
</footer>
</div>
    )
}