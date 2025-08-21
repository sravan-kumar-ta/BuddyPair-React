import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

export default function TopNavbar() {
   return (
      <div className="sticky top-0 z-50 px-4 py-3 md:shadow-md bg-pink-50">
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
               <IoNotificationsOutline className="text-gray-600 text-xl cursor-pointer hover:text-purple-500" />

               {/* Profile Icon */}
               <FaUserCircle className="text-gray-600 text-2xl cursor-pointer hover:text-purple-500" />
            </div>
         </div>
      </div>
   );
}
