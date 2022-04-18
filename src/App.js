import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PageNotFound from "./pages/PageNotFound";
import Logout from "./pages/Logout";
import Login from "./pages/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
