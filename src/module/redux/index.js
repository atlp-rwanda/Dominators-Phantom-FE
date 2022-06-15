import counterReducer from "./counterreducer";
import routeReducer from "./routeReducer";
import { combineReducers } from "redux";
import allUsersReducer from "./allUsersReducer";

const allReducers = combineReducers({
  route: routeReducer,
  counter: counterReducer,
  allUsers: allUsersReducer,
});

export default allReducers;
