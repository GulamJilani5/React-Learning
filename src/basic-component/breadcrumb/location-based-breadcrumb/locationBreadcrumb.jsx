import React from "react";
import { TbSlash } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
export default function LocationBreadcrumb() {
   const location = useLocation();
   console.log(location.pathname);

   return (
     <div className="bg-white ">
       <ul className=" flex border p-2 gap-6 text-xl text-[#2E4053] items-center">
         <Link
           to={"home"}
           className={`text-[#2E4053] no-underline cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
             location.pathname === "/home" && "bg-[#b572d6] text-white"
           }`}
         >
           Home
         </Link>
         <TbSlash />
         <Link
           to={"contact"}
           className={`text-[#2E4053] no-underline cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
             location.pathname === "/contact" && "bg-[#b572d6] text-white"
           }`}
         >
           Contact
         </Link>
         <TbSlash />
         <Link
           to={"about"}
           className={`text-[#2E4053] no-underline cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
             location.pathname === "/about" && "bg-[#b572d6] text-white"
           }`}
         >
           About
         </Link>
         <TbSlash />
         <Link
           to={"faq"}
           className={`text-[#2E4053] no-underline cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
             location.pathname === "/faq" && "bg-[#b572d6] text-white"
           }`}
         >
           FAQ
         </Link>
       </ul>
     </div>
   );
}
