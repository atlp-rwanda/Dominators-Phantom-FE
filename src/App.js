import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PageNotFound from "./pages/PageNotFound";
import Logout from "./components/Logout/Logout";

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
