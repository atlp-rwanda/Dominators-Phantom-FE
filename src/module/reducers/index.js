import counterReducer from "./counterreducer";
import routeReducer from "./routeReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import busesReducer from "./busesReducer";
import assignBuseReducer from "./assignBuseReducer";
const allReducers = combineReducers({
  counter: counterReducer,
  route: routeReducer,
  users: usersReducer,
  buses: busesReducer,
  assigned: assignBuseReducer,
});

export default allReducers;
