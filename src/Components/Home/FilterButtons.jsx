import { useState } from "react";

const filters = ["Near by", "Education", "Qualification"];

const FilterButtons = () => {
   const [activeFilter, setActiveFilter] = useState("Near by");
   
   return (
      <div className="flex justify-center mt-2">
         <div className="bg-white space-x-3 p-1 rounded-full">
            <div className="bg-pink-200 rounded-full">
               {filters.map((filter) => (
                  <button
                     key={filter}
                     onClick={() => setActiveFilter(filter)}
                     className={`px-8 py-2 rounded-full border text-xs md:text-sm font-medium cursor-pointer transition
      ${
         activeFilter === filter
            ? "bg-white text-blue-700/70 border-none"
            : "bg-pink-200 text-gray-600 border-none hover:border-pink-400"
      }`}
                  >
                     {filter}
                  </button>
               ))}
            </div>
         </div>
      </div>
   );
};

export default FilterButtons;
