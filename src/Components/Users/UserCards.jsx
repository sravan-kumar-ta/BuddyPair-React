import users from "../../assets/users";
import portraint from "../../assets/portraint.jpg";

const UserCards = () => {
   return (
      <div className="p-4">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-lg font-semibold mb-4 ml-5 tracking-wide">
               Your Matches <span className="text-pink-500/60">47</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
               {users.map((user) => (
                  <div
                     key={user.id}
                     className="relative overflow-hidden rounded-3xl custom-card border-4 border-pink-500/60 shadow-md"
                  >
                     {/* background image */}
                     <img
                        // src={user.img}
                        src={portraint}
                        alt={user.name}
                        className="w-full h-64 object-cover"
                     />

                     {/* gradient overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                     {/* Match percentage */}
                     <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-pink-500/60 text-white text-xs px-3 py-1 rounded-bl-xl rounded-br-xl whitespace-nowrap">
                        {user.match}
                     </span>

                     {/* Distance pill */}
                     <span className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-white/20 border border-white/30 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                        {user.distance}
                     </span>

                     {/* Name + location */}
                     <div className="absolute bottom-2 w-full text-white text-center">
                        <p className="tracking-widest font-thin">
                           {user.name}, {user.age}
                        </p>
                        <p className="tracking-widest font-thin text-xs opacity-80">
                           {user.location}
                        </p>
                     </div>
                  </div>
               ))}
            </div>

            {/* Upgrade card */}
            <div className="mt-6 flex justify-center mb-20">
               <div className="bg-white rounded-3xl shadow-lg p-6 text-center w-72">
                  <p className="text-lg font-bold mb-4">Upgrade to view more</p>
                  <button className="bg-fuchsia-950 text-white px-6 py-2 rounded-full font-medium cursor-pointer">
                     Upgrade
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UserCards;
