import Stories from "../Components/Home/Stories";
import FilterButtons from "../Components/Home/FilterButtons";
import UserCards from "../Components/Home/UserCards";

const Home = () => {
   return (
      <div className="max-w-7xl mx-auto md:mx-5 lg:mx-auto">
         <Stories />
         <FilterButtons />
         <UserCards />
      </div>
   );
};

export default Home;
