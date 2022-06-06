import { Routes, Route } from "react-router-dom";
import UpdateProfile from "./components/update-profile/UpdateProfile";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import "react-toastify/dist/ReactToastify.css";
import CrudRoute from "./pages/crud-routes/CrudRoute";
import UserRoute from "./pages/user-route/UserRoutes";
import Logout from "./components/Logout/Logout";
import "react-toastify/dist/ReactToastify.css";
import DriverOperator from "./pages/crud-driver-operator/DriverOperator";
import Roles from "./pages/roles & permissions/Roles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/update-profile" element={<UpdateProfile />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/crud-route" element={<CrudRoute itemsPerPage={2} />} />
      <Route path="/routes" element={<UserRoute />} />
      <Route path="/driver-operator" element={<DriverOperator />} />
      <Route path="/roles" element={<Roles />} />
    </Routes>
  );
}
export default App;
