import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import Notification from "./Notification";

export default function TopNavbar() {
   const [open, setOpen] = useState(false);

   return (
      <div className="sticky top-0 z-20 px-4 py-3 md:shadow-md bg-pink-50">
         <div className="md:w-5/6 flex items-center justify-between mx-auto">
            {/* Left - App Logo */}
            <div className="flex items-center space-x-2">
               <span className="text-pink-950/60 text-2xl font-medium">
                  BuddyPair
               </span>
            </div>

            {/* Right - Icons */}
            <div className="flex items-center space-x-4">
               {/* Notification Icon */}
               <div
                  className="border rounded-full p-1 z-40 cursor-pointer border-zinc-700"
                  onClick={() => setOpen(!open)}
               >
                  <IoNotificationsOutline
                     className={`${
                        open ? "text-black" : "text-gray-600"
                     }text-xl hover:text-purple-500 `}
                  />
               </div>

               {open && <Notification setOpen={setOpen} />}

               {/* Profile Icon */}
               <FaUserCircle className="text-gray-600 text-2xl cursor-pointer hover:text-purple-500" />
            </div>
         </div>
      </div>
   );
}
