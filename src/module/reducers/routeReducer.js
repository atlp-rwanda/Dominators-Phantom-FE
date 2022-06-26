import {
  DELETE_ROUTE,
  GET_ALL_ROUTE,
  GET_ONE_ROUTE,
  POST_ROUTES,
  UPDATE_ONE_ROUTE,
  UPDATE_ONE_ROUTE_ERROR,
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
      };
    case UPDATE_ONE_ROUTE:
      return {
        isLoaded: true,
        isLoading: false,
        data: payload,
      };
    case DELETE_ROUTE:
      const remain = state.data.result.filter(
        ({ routeId }) => routeId !== payload
      );
      return {
        isLoaded: false,
        isLoading: true,
        data: data,
      };
    case UPDATE_ONE_ROUTE_ERROR:
      return {
        isLoaded: false,
        data: payload,
      };
    default:
      return state;
  }
};
