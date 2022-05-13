import counterReducer from "./counterreducer";
import busReducer from "./busReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  bus: busReducer,
});

export default allReducers;
