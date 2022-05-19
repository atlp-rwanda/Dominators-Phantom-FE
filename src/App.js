import { Routes, Route } from "react-router-dom";
import UpdateProfile from "./components/update-profile/UpdateProfile";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import BusSimulation from "./components/bus-simulate/BusSimulation";
import BusMovements from "./components/bus-simulate/BusMovements";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/update-profile" element={<UpdateProfile />} />
      <Route path="/bus-simulate" element={<BusSimulation />} />
      <Route path="/tracking" element={<BusMovements />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}
export default App;

//cd deploy
