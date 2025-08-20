import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Location from "./Pages/Location";
import Users from "./Pages/Users";
import Chat from "./Pages/Chat";
import TopNavbar from "./Components/TopNavbar";
import BottomNavbar from "./Components/BottomNavbar";

function App() {
   return (
      <>
         <TopNavbar />
         <BottomNavbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location" element={<Location />} />
            <Route path="/users" element={<Users />} />
            <Route path="/chat" element={<Chat />} />
         </Routes>
      </>
   );
}

export default App;
