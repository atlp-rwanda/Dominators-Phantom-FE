import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/home" element={<Landing />} />
    </Routes>
  );
}
export default App;
