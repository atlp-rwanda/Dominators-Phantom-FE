import {
  DELETE_BUS,
  GET_ALL_BUSES,
  GET_ONE_BUS,
  POST_BUSES,
  UPDATE_ONE_BUS,
} from "../index";
const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  data: [],
  values: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_BUSES:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: payload,
      };
    case GET_ONE_BUS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        values: payload,
      };
    case POST_BUSES:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: [...state.data, payload],
      };
    case UPDATE_ONE_BUS:
      return {
        isLoaded: false,
        isLoading: true,
        data: payload,
      };
    case DELETE_BUS:
      const remain = state.data.filter(({ id }) => id !== payload);
      return {
        isLoaded: false,
        isLoading: true,
        data: remain,
      };
    default:
      return state;
  }
};

