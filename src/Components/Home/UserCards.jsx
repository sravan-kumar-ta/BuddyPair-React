import users from "../../assets/users";
import { AiFillLike } from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";
import portraint from "../../assets/portraint.jpg";

const UserCards = () => {
   return (
      <div className="p-4 max-w-7xl mx-auto">
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-6">
            {users.map((user) => (
               <div
                  key={user.id}
                  className="relative rounded-3xl overflow-hidden shadow-md"
               >
                  <img
                     // src={user.img}
                     src={portraint}
                     alt={user.name}
                     className="w-full h-48 object-cover"
                  />
                  {/* gradient  */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Right side panel (like & cmt) */}
                  <div className="absolute top-1/2 right-0 -translate-y-1/2">
                     <div className="flex flex-col items-center gap-1 rounded-tl-lg rounded-bl-lg bg-stone-300/50 backdrop-blur-md p-1">
                        <div className="p-1 bg-white/50 rounded-full">
                           <AiFillLike className="text-white rounded-full cursor-pointer" />
                        </div>
                        <div className="p-1 bg-white/50 rounded-full">
                           <BsFillChatFill className="text-white h-3 rounded-full cursor-pointer" />
                        </div>
                     </div>
                  </div>

                  {/* User info */}
                  <div className="absolute bottom-2 left-4 right-4 text-white">
                     <div className="flex justify-between items-center">
                        <p className="font-semibold text-xs md:text-lg">
                           {user.name}
                        </p>
                        <span className="text-xs md:text-sm opacity-60 tracking-widest font-thin">
                           F26YRS
                        </span>
                     </div>
                     <p className="text-[10px] md:text-sm opacity-60 tracking-widest font-thin">
                        {user.role}
                     </p>
                  </div>

                  {/* Status Badge */}
                  <span
                     className={`absolute top-2 left-4 px-2 rounded-full text-xs font-medium ${
                        user.status === "Online"
                           ? "bg-green-500/50 text-white"
                           : "bg-gray-400/50 text-white"
                     }`}
                  >
                     {user.status}
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default UserCards;
