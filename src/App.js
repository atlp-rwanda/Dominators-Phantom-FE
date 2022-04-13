import { Routes, Route } from "react-router-dom";
import UpdateProfile from "./components/update-profile/UpdateProfile";
import RegisterDriver from "./components/register-driver/RegisterDriver";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import "react-toastify/dist/ReactToastify.css";
import CrudRoute from "./pages/crud-routes/CrudRoute";
import UserRoute from "./pages/user-route/UserRoutes";
import Logout from "./components/Logout/Logout";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/update-profile" element={<UpdateProfile />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/crud-route" element={<CrudRoute itemsPerPage={2} />} />
      <Route path="/routes" element={<UserRoute />} />
    </Routes>
  );
}
export default App;
