import { GET_ALL_BUSES, GET_ALL_ERROR } from "..";
import creator from "./creator";
import { backendUrl, Authorization } from "../../utils/db";
import { toast } from "react-toastify";

export const getAllBuses = () => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/buses`, {
      headers: {
        Authorization,
      },
    });
    const data = await dt.json();
    if (dt.ok === false)
      dispatch(creator(GET_ALL_ERROR)), toast.error(data.message);
    else dispatch(creator(GET_ALL_BUSES, data.results));
  } catch (error) {
    toast.error(error.message);
  }
};
