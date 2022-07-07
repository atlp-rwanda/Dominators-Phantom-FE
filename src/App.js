import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import UpdateProfile from "./components/update-profile/UpdateProfile";
// import Login from "./pages/Login";
// import Home from "./pages/Home/Home";
// import PageNotFound from "./pages/PageNotFound";
// import Landing from "./pages/Landing";
// import CrudRoute from "./pages/crud-routes/CrudRoute";
// import UserRoute from "./pages/user-route/UserRoutes";
// import DriverOperator from "./pages/crud-driver-operator/DriverOperator";
// import Roles from "./pages/roles & permissions/Roles";
// import ResetLink from "./pages/ResetLink";
import ResetPwd from "./pages/ResetPwd";
// import Dashboard from "./pages/dashboard";
// import Assigned from "./pages/AssignDriver/Assigned";
// import UnAssigned from "./pages/AssignDriver/UnAssigned";

const Home = lazy(() => import("./pages/Home/Home"));
const UpdateProfile = lazy(() =>
  import("./components/update-profile/UpdateProfile")
);
const Login = lazy(() => import("./pages/Login"));
const Landing = lazy(() => import("./pages/Landing"));
const CrudRoute = lazy(() => import("./pages/crud-routes/CrudRoute"));
const UserRoute = lazy(() => import("./pages/user-route/UserRoutes"));
const DriverOperator = lazy(() =>
  import("./pages/crud-driver-operator/DriverOperator")
);
const Roles = lazy(() => import("./pages/roles & permissions/Roles"));
const ResetLink = lazy(() => import("./pages/ResetLink"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Assigned = lazy(() => import("./pages/AssignDriver/Assigned"));
const UnAssigned = lazy(() => import("./pages/AssignDriver/UnAssigned"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/crud-route" element={<CrudRoute itemsPerPage={2} />} />
        <Route path="/routes" element={<UserRoute />} />
        <Route path="/users" element={<DriverOperator />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/Login" element={<Login />} />
        <Route path={"/Reset"} element={<ResetLink />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/assigned" element={<Assigned />} exact />
        <Route path="/unassigned" element={<UnAssigned />} exact />
      </Routes>
    </Suspense>
  );
}
export default App;
