import counterReducer from "./counterreducer";
import routeReducer from "./routeReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  route: routeReducer,
});

export default allReducers;
