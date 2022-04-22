import { Routes, Route } from "react-router-dom";
import UpdateProfile from "./components/update-profile/UpdateProfile";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import ResetPasswordLink from "../src/components/ResetPassword/ResetPasswordLink";
import ResetPassword from "../src/components/ResetPassword/ResetPassword";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/update-profile" element={<UpdateProfile />} exact={true} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Reset-link" element={<ResetPasswordLink/>} />
      <Route path="/Reset-pwd" element={<ResetPassword/>} />
      
    </Routes>
  );
}
export default App;
