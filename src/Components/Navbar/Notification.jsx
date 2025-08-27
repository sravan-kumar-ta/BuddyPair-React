import { IoClose } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";

const Notification = ({ setOpen }) => {
   return (
      <>
         {/* Screen overlay with blur */}
         <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 w-full"
         ></div>

         {/* Notification box */}
         <div className="absolute top-15 left-5 right-1 md:left-1/2 md:right-auto md:w-xl md:transform md:-translate-x-1/2 lg:left-auto lg:right-30 lg:translate-x-0 z-40 space-y-3 rounded-2xl backdrop-blur-md font-sans">
            <div className="bg-fuchsia-950 text-white rounded-2xl p-4 shadow-lg">
               <div className="flex justify-between items-start">
                  <div>
                     <span className="uppercase text-xs text-blue-300 font-semibold">
                        News
                     </span>
                     <h4 className="font-semibold mt-1">News Title</h4>
                     <p className="text-sm text-gray-200">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Turpis vitae ultrices in sed. Feugiat metus amet.
                     </p>
                     <p className="text-xs text-gray-400 mt-1">Today 10:30PM</p>
                  </div>
                  <IoClose className="text-gray-300 cursor-pointer hover:text-white" />
               </div>
            </div>

            {/* Success Notification */}
            <div className="bg-fuchsia-950 text-white rounded-2xl p-4 shadow-lg flex items-center justify-between">
               <div className="flex space-x-2">
                  <div className="pt-1">
                     <FiCheckCircle className="text-green-400 text-lg" />
                  </div>
                  <div>
                     <p className="font-medium">Successfully Message</p>
                     <p className="text-xs text-gray-300">Today 10:39PM</p>
                  </div>
               </div>
               <IoClose className="text-gray-300 cursor-pointer hover:text-white" />
            </div>

            {/* Alert Notification */}
            <div className="bg-fuchsia-950 text-white rounded-2xl p-4 shadow-lg flex items-center justify-between">
               <div className="flex space-x-2">
                  <div className="pt-1">
                     <HiOutlineExclamationCircle className="text-yellow-400 text-xl" />
                  </div>
                  <div>
                     <p className="font-medium">Alert Message</p>
                     <p className="text-xs text-gray-300">Today 10:39PM</p>
                  </div>
               </div>
               <IoClose className="text-gray-300 cursor-pointer hover:text-white" />
            </div>

            {/* Error Notification */}
            <div className="bg-fuchsia-950 text-white rounded-2xl p-4 shadow-lg flex items-center justify-between">
               <div className="flex space-x-2">
                  <div className="pt-1">
                     <IoCloseCircleOutline className="text-red-400 text-lg" />
                  </div>
                  <div>
                     <p className="font-medium">Error Message</p>
                     <p className="text-xs text-gray-300">Today 10:39PM</p>
                  </div>
               </div>
               <IoClose className="text-gray-300 cursor-pointer hover:text-white" />
            </div>
         </div>
      </>
   );
};

export default Notification;
