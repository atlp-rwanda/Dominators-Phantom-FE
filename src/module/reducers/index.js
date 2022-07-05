import counterReducer from "./counterreducer";
import routeReducer from "./routeReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import busesReducer from "./busesReducer";
import assignBuseReducer from "./assignBuseReducer";

const allReducers = combineReducers({
  counter: counterReducer,
  route: routeReducer,
  user: userReducer,
  buses: busesReducer,
  assigned: assignBuseReducer,
});

export default allReducers;
