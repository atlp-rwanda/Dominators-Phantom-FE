import { GET_ALL_USERS, GET_ALL_ERROR } from "..";
import { db, Authorization } from "../../utils/db";
import creator from "./creator";
import { toast } from "react-toastify";

export const getAllUsers = () => async (dispatch) => {
  try {

    const dt = await fetch(`${db}/users`, {
      headers: {
        Authorization,
      },
    });
    const data = await dt.json();
    if (dt.ok === false)
      dispatch(creator(GET_ALL_ERROR)), toast.error(data.message);
    else dispatch(creator(GET_ALL_USERS, data));
  } catch (error) {
    toast.error(error.message);
  }
};
