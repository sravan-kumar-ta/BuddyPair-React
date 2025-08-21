import { NavLink } from "react-router-dom";
import { GoHome, GoHomeFill } from "react-icons/go";
import { LuCompass } from "react-icons/lu";
import { RiCompass3Fill } from "react-icons/ri";
import { HiUsers, HiOutlineUsers } from "react-icons/hi";
import { BsChat, BsChatFill } from "react-icons/bs";

const BottomNavbar = () => {
   return (
      <nav className="fixed z-50 bottom-4 left-1/2 transform -translate-x-1/2 w-5/6 md:w-2/3 bg-white py-2 rounded-full shadow-lg flex justify-around">
         <NavLink
            to="/"
            end
            className={({ isActive }) =>
               `rounded-full p-2 ${
                  isActive ? "bg-pink-500 text-white" : "bg-white text-gray-500"
               }`
            }
         >
            {({ isActive }) =>
               isActive ? (
                  <GoHomeFill className="text-white" size={26} />
               ) : (
                  <GoHome className="text-pink-950/60" size={26} />
               )
            }
         </NavLink>

         <NavLink
            to="/location"
            className={({ isActive }) =>
               `rounded-full p-2 ${
                  isActive ? "bg-pink-500 text-white" : "bg-white text-gray-500"
               }`
            }
         >
            {({ isActive }) =>
               isActive ? (
                  <RiCompass3Fill className="text-white" size={26} />
               ) : (
                  <LuCompass className="text-pink-950/60" size={26} />
               )
            }
         </NavLink>

         <NavLink
            to="/users"
            className={({ isActive }) =>
               `rounded-full p-2 ${
                  isActive ? "bg-pink-500 text-white" : "bg-white text-gray-500"
               }`
            }
         >
            {({ isActive }) =>
               isActive ? (
                  <HiUsers className="text-white" size={26} />
               ) : (
                  <HiOutlineUsers className="text-pink-950/60" size={26} />
               )
            }
         </NavLink>

         <NavLink
            to="/chat"
            className={({ isActive }) =>
               `rounded-full p-2 ${
                  isActive ? "bg-pink-500 text-white" : "bg-white text-gray-500"
               }`
            }
         >
            {({ isActive }) =>
               isActive ? (
                  <BsChatFill className="text-white" size={26} />
               ) : (
                  <BsChat className="text-pink-950/60" size={26} />
               )
            }
         </NavLink>
      </nav>
   );
};

export default BottomNavbar;
