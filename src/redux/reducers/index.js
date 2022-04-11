import counterReducer from "./counterreducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
});

export default allReducers;