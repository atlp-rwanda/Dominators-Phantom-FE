import { GET_ALL_BUSES, GET_ALL_ERROR } from "..";
const initialState = {
  isLoaded: false,
  isLoading: false,
  data: [],
  error: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ERROR:
      return { ...state, isLoaded: false };
    case GET_ALL_BUSES:
      return {
        ...state,
        isLoaded: true,
        data: payload,
      };
    default:
      return state;
  }
};
