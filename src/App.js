import { Routes, Route } from "react-router-dom";
import UpdateProfile from "./components/update-profile/UpdateProfile";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ResetLink from "./pages/ResetLink";
import ResetPwd from "./pages/ResetPwd";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/update-profile" element={<UpdateProfile />} exact={true} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Reset-link" element={<ResetLink/>} />
      <Route path="/Reset-pwd" element={<ResetPwd/>} />
      
    </Routes>
  );
}
export default App;
