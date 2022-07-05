import {
  POST_USERS,
  POST_ONE_USER_ERROR,
  GET_ALL_USER,
  GET_ONE_USER,
  UPDATE_ONE_USER,
  DELETE_USER,
  GET_ALL_ERROR,
} from "../index";
import creator from "./creator";
import { toast } from "react-toastify";
import { backendUrl, headers } from "../../utils/db";

const token = localStorage.getItem("token");
// const headers = {
//   Authorization: `Bearer ${token}`,
//   "Content-Type": "application/json",
// };

export const getAllUser = () => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/users`, {
      headers,
    });
    const datas = await dt.json();
    console.log(datas);
    if (dt.ok === false)
      dispatch(creator(GET_ALL_ERROR)), toast.error(datas.message);
    else dispatch(creator(GET_ALL_USER, datas.data));
  } catch (e) {
    if (e.message) {
      return toast.error(e.message);
    }
  }
};

export const getOneUser = (userId) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/users/` + userId, {
      headers
    });
    const data = await dt.json();
    dispatch(creator(GET_ONE_USER, data));
  } catch (e) {
    if (e.response && e.response.data) {
      return toast.error(e.response.data.error);
    }
  }
};
export const postUser = (data) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/users/register`, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers,
    });
    const response = await dt.json();
    const message = response.error || response.message
    if (dt.status==201) {
      dispatch(creator(POST_USERS, response.data));
      toast.success(message);
    } else {
      dispatch(creator(POST_ONE_USER_ERROR, message));
      toast.error(message)
    }
  } catch (error) {
    if (error.message) return toast.error(error.message);
  }
};
export const updateUser = (data, id) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/users/` + id, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers,
    });
    const updatedSelect = await fetch(`${backendUrl}/users`);
    const updateData = await updatedSelect.json();
    dispatch(creator(UPDATE_ONE_USER, updateData));
  } catch (e) {
    if (e.response && e.response.data) {
      return toast.error(e.response.data.error);
    }
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/users/` + id, {
      method: "DELETE",
      headers
    });
    dispatch(creator(DELETE_USER, id));
  } catch (error) {
    if (error.message) return toast.error(error.message);
  }
};
