import {
  DELETE_DRIVER_ASSIGN_TO_BUSES,
  GET_ALL_DRIVER_ASSIGN_TO_BUSES,
  GET_ALL_ERROR,
  POST_DRIVER_ASSIGN_TO_BUSES,
  UPDATE_DRIVER_ASSIGN_TO_BUSES,
} from "..";
const initialState = {
  isLoaded: false,
  isLoading: false,
  data: [],
  error: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ERROR:
      return {
        ...state,
        isLoaded: true,
        data: state.data,
      };
    case GET_ALL_DRIVER_ASSIGN_TO_BUSES:
      return {
        ...state,
        isLoaded: true,
        data: payload,
      };
    case POST_DRIVER_ASSIGN_TO_BUSES:
      return {
        ...state,
        isLoaded: true,
        data: payload,
      };
    case UPDATE_DRIVER_ASSIGN_TO_BUSES:
      return {
        ...state,
        isLoaded: true,
        data: payload,
      };
    case DELETE_DRIVER_ASSIGN_TO_BUSES:
      console.log(state.data.data.result.filter(({ id }) => id !== payload));
      const data = state.data.data.result.filter(({ id }) => id !== payload);
      return {
        isLoaded: true,
        data: data,
      };
    default:
      return state;
  }
};
