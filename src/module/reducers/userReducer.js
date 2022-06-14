import {
  DELETE_USER,
  GET_ALL_USER,
  GET_ONE_USER,
  POST_USERS,
  UPDATE_ONE_USER,
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
    case GET_ALL_USER:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: payload,
      };
    case GET_ONE_USER:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        values: payload,
      };
    case POST_USERS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: [...state.data, payload],
      };
    case UPDATE_ONE_USER:
      return {
        isLoaded: false,
        isLoading: true,
        data: payload,
      };
    case DELETE_USER:
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
