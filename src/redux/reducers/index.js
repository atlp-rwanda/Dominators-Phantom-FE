import counterReducer from "./counterreducer";
import PassengerSlice from "./PassengerSlice";
import SpeedSlice from "./SpeedSlice";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    PassengerReducer: PassengerSlice,
    SpeedReducer: SpeedSlice
});

export default allReducers;