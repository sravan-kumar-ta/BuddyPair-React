import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";

const Likes = () => {
   return (
      <div className="flex overflow-x-auto space-x-4 px-4 py-3 no-scrollbar">
         <div className="flex flex-col items-center relative no-scrollbar">
            <div className="relative w-16 h-16 rounded-full border-2 flex items-center justify-center border-pink-500">
               <div className="w-14 h-14 rounded-full overflow-hidden blur-xs">
                  <img
                     src={"https://placehold.co/150"}
                     alt={"user image"}
                     className="w-full h-full object-cover"
                  />
               </div>
               <FaHeart className="absolute text-white" size={25} />
            </div>

            <span className="text-xs mt-2 text-zinc-600">
               Like<span className="text-pink-500"> 35</span>
            </span>
         </div>
         <div className="flex flex-col items-center relative no-scrollbar">
            <div className="relative w-16 h-16 rounded-full border-2 flex items-center justify-center border-pink-500">
               <div className="w-14 h-14 rounded-full overflow-hidden blur-xs">
                  <img
                     src={"https://placehold.co/150"}
                     alt={"user image"}
                     className="w-full h-full object-cover"
                  />
               </div>
               <FaComment className="absolute text-white" size={25} />
            </div>

            <span className="text-xs mt-2 text-zinc-600">
               Connect<span className="text-pink-500"> 15</span>
            </span>
         </div>
      </div>
   );
};

export default Likes;
