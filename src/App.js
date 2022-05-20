import { Routes, Route } from "react-router-dom";
import UpdateProfile from "./components/update-profile/UpdateProfile";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";

import Logout from "./components/Logout/Logout";

import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/update-profile" element={<UpdateProfile />} exact={true} />
      <Route path="/*" element={<PageNotFound />} />

      <Route path="/logout" element={<Logout />} />

      <Route path="/home" element={<Landing />} />

    </Routes>
  );
}
export default App;
