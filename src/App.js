import { Routes, Route } from "react-router-dom";
import UpdateProfile from "./components/update-profile/UpdateProfile";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";
import "react-toastify/dist/ReactToastify.css";
import CrudRoute from "./pages/crud-routes/CrudRoute";
import UserRoute from "./pages/user-route/UserRoutes";
import DriverOperator from "./pages/crud-driver-operator/DriverOperator";
import Roles from "./pages/roles & permissions/Roles";
import ResetLink from "./pages/ResetLink";
import ResetPwd from "./pages/ResetPwd";
import Assigned from "./pages/AssignDriver/Assigned";
import UnAssigned from "./pages/AssignDriver/UnAssigned";
import Dashboard from "./pages/dashboard";
import Notification from "./pages/notification/";
import LogoutFunction from "./components/Logout/LogoutFunction";
<<<<<<< HEAD
import Simulation from "./pages/simulation";
=======

// import TrackingPage from "./components/simulate-bus-motion/TrackingPage";
>>>>>>> 67512d0 (Locating buses on the map)
import UserSimulation from "./components/simulate-bus-motion/UserSimulation";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/update-profile" element={<UpdateProfile />} />
      <Route path="/route" element={<CrudRoute itemsPerPage={2} />} />
      <Route path="/routes" element={<UserRoute />} />
      <Route path="/users" element={<DriverOperator />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/assigned" element={<Assigned />} exact />
      <Route path="/unassigned" element={<UnAssigned />} exact />
      <Route path="/Reset-link" element={<ResetLink />} />
      <Route path="/Reset-pwd" element={<ResetPwd />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/logout" element={<LogoutFunction />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/tracking" element={<UserSimulation />} />
<<<<<<< HEAD
      <Route path="/simulation" element={<Simulation />} />
=======
>>>>>>> 67512d0 (Locating buses on the map)
    </Routes>
  );
}
export default App;
