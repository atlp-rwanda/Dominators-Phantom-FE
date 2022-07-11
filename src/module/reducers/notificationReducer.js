import { GET_ALL_DRIVER_NOTIFICATION, GET_NOTIFICATION_CHANGED } from "..";
const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  notification: [],
  values: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DRIVER_NOTIFICATION:
      return {
        ...state,
        isLoaded: false,
        notification: action.payload,
      };
    case GET_NOTIFICATION_CHANGED:
      return {
        ...state,
        isLoaded: false,
        notification: action.payload,
      };
    default:
      return state;
  }
};
