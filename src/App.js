import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}
export default App;
