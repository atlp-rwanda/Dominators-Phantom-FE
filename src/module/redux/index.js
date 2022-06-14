import counterReducer from "./counterreducer";
import { combineReducers } from "redux";
import allUsersReducer from "./allUsersReducer";

const allReducers = combineReducers({
    counter: counterReducer,
    allUsers: allUsersReducer
});

export default allReducers;