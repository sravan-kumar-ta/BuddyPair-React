import { FaPlus } from "react-icons/fa";
import users from "../../assets/users";
import portraint from "../../assets/portraint.jpg";

const Stories = () => {
   return (
      <div className="flex overflow-x-auto space-x-4 px-4 py-3 no-scrollbar">
         {users.map((user) => (
            <div
               key={user.id}
               className="flex flex-col items-center relative no-scrollbar"
            >
               <div
                  className={`relative w-16 h-16 rounded-full border-2 flex items-center justify-center
                                 ${
                                    user.isMyStory
                                       ? "border-gray-300"
                                       : "border-pink-500"
                                 }`}
               >
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                     <img
                        // src={user.img}
                        src={portraint}
                        alt={user.name}
                        className="w-full h-full object-cover"
                     />
                  </div>

                  {user.isMyStory && (
                     <button className="absolute bottom-0 right-0 bg-pink-500 rounded-full p-1 text-white text-xs shadow-md">
                        <FaPlus />
                     </button>
                  )}
               </div>

               <span className="text-xs mt-2 text-zinc-600">{user.name}</span>
            </div>
         ))}
      </div>
   );
};

export default Stories;
