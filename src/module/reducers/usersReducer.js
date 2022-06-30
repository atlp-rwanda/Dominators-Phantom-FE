import { GET_ALL_ERROR, GET_ALL_USERS } from "..";
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
        isLoaded: false,
      };

    case GET_ALL_USERS:
      const userDrivers = payload.data.filter(({ role }) => role === "driver");
      return {
        ...state,
        isLoaded: true,
        data: userDrivers,
      };
    default:
      return state;
  }
};
