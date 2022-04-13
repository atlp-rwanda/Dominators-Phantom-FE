import { GET_ALL_USERS, POST_ALL_USERS } from "..";
import { db } from "../../utils/db";
import { toast } from "react-toastify";
import creator from "./creator";

export const getAllUsers = () => async (dispatch) => {
  try {
    const dt = await fetch(`${db}/AllUsers`);
    const datas = await dt.json();
    dispatch(creator(GET_ALL_USERS, datas));
  } catch (e) {
    if (e.message) {
      return toast.error(e.message);
    }
  }
};

export const postUser = (data) => async (dispatch) => {
  console.log(data);
  try {
    const dt = await fetch(`${db}/AllUsers`, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await dt.json();
    dispatch(creator(POST_ALL_USERS, response));
  } catch (error) {
    if (error.message) return toast.error(error.message);
  }
};
