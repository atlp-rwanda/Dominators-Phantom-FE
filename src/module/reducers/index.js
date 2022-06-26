import counterReducer from "./counterreducer";
import routeReducer from "./routeReducer";
import userReducer from "./userReducer";
import busReducer from "./busReducer";
import { combineReducers } from "redux";
import busesReducer from "./busesReducer";
import assignBuseReducer from "./assignBuseReducer";
import notificationReducer from "./notificationReducer";
const allReducers = combineReducers({
  counter: counterReducer,
  route: routeReducer,
  user: userReducer,
  buses: busesReducer,
  bus: busReducer,
  assigned: assignBuseReducer,
  notification: notificationReducer,
});

export default allReducers;
