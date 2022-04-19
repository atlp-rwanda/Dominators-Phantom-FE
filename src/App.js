import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PageNotFound from "./pages/PageNotFound";
import UpdateProfile from "./Components/update-profile/UpdateProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
    </Routes>
  );
}
export default App;
