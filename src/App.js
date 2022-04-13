import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";
import Logout from "./pages/Logout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}
export default App;
