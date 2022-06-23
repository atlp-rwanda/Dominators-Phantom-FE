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
import "react-toastify/dist/ReactToastify.css";
import DriverOperator from "./pages/crud-driver-operator/DriverOperator";
import Roles from "./pages/roles & permissions/Roles";
import ResetLink from "./pages/ResetLink";
import ResetPwd from "./pages/ResetPwd";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/update-profile" element={<UpdateProfile />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/crud-route" element={<CrudRoute itemsPerPage={2} />} />
      <Route path="/routes" element={<UserRoute />} />
      <Route path="/users" element={<DriverOperator />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Reset-link" element={<ResetLink />} />
      <Route path="/Reset-pwd" element={<ResetPwd />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;
