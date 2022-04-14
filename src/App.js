import { Routes, Route } from "react-router-dom";
import UpdateProfile from "./components/update-profile/UpdateProfile";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";
import Logout from "./pages/Logout";
import Login from "./pages/Login";

import Logout from "./components/Logout/Logout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/update-profile" element={<UpdateProfile />} exact={true} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
