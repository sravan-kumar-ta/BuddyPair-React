import Likes from "../Components/Users/Likes";
import UserCards from "../Components/Users/UserCards";

const Users = () => {
   return (
      <div className="max-w-7xl mx-auto md:mx-6 lg:mx-auto">
         <Likes />
         <UserCards />
      </div>
   );
};

export default Users;
