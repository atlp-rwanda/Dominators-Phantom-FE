import {
  POST_USERS,
  GET_ALL_USER,
  GET_ONE_USER,
  UPDATE_ONE_USER,
  DELETE_USER,
} from "../index";
import creator from "./creator";
import { toast } from "react-toastify";
import { db } from "../../utils/db";

const token = localStorage.getItem("token");
const headers = {
  Authorization: "Bearer " + token,
  "Content-Type": "application/json",
};

export const getAllUser = () => async (dispatch) => {
  try {
    const dt = await fetch(`${db}/users`, {
      headers,
    });
    const datas = await dt.json();
    dispatch(creator(GET_ALL_USER, datas.data));
  } catch (e) {
    if (e.message) {
      return toast.error(e.message);
    }
  }
};

export const getOneUser = (userId) => async (dispatch) => {
  try {
    const dt = await fetch(`${db}/users/` + userId);
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
    const dt = await fetch(`${db}/users/register`, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers,
    });
    const response = await dt.json();
    dispatch(creator(POST_USERS, response));
  } catch (error) {
    if (error.message) return toast.error(error.message);
  }
};
export const updateUser = (data, id) => async (dispatch) => {
  try {
    const dt = await fetch(`${db}/users/` + id, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    const updatedSelect = await fetch(`${db}/users`);
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
    const dt = await fetch(`${db}/users/` + id, {
      method: "DELETE",
    });
    dispatch(creator(DELETE_USER, id));
  } catch (error) {
    if (error.message) return toast.error(error.message);
  }
};
