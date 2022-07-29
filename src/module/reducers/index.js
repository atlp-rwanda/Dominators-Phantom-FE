import routeReducer from "./routeReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import busesReducer from "./busesReducer";
import assignBuseReducer from "./assignBuseReducer";
import notificationReducer from "./notificationReducer";
const allReducers = combineReducers({
  route: routeReducer,
  user: userReducer,
  buses: busesReducer,
  assigned: assignBuseReducer,
  notification: notificationReducer,
});

export default allReducers;
