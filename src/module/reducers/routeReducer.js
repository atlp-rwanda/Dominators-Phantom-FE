import {
  DELETE_ROUTE,
  GET_ALL_ROUTE,
  GET_ONE_ROUTE,
  POST_ROUTES,
  UPDATE_ONE_ROUTE,
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
    case GET_ALL_ROUTE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: payload,
      };
    case GET_ONE_ROUTE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        values: payload,
      };
    case POST_ROUTES:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: [...state.data, payload],
      };
    case UPDATE_ONE_ROUTE:
      return {
        isLoaded: false,
        isLoading: true,
        data: payload,
      };
    case DELETE_ROUTE:
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
