import {
  GET_ALL_DRIVER_ASSIGN_TO_BUSES,
  POST_DRIVER_ASSIGN_TO_BUSES,
  DELETE_DRIVER_ASSIGN_TO_BUSES,
  UPDATE_DRIVER_ASSIGN_TO_BUSES,
  GET_ALL_ERROR,
} from "..";
import { backendUrl, headers } from "../../utils/db";
import creator from "./creator";
import { toast } from "react-toastify";
export const getAllDriverAssignToBuses = (page, size) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/assign/?page=${page}&size=${size}`, {
      headers,
    });
    const data = await dt.json();
    if (dt.ok === false) {
      dispatch(creator(GET_ALL_ERROR));
      toast.error(data.message);
    } else dispatch(creator(GET_ALL_DRIVER_ASSIGN_TO_BUSES, data));
  } catch (error) {
    toast.error(error.message);
  }
};
export const postDriverAssignToBuses = (buseId, userId) => async (dispatch) => {
  try {
    const dt = await fetch(
      `${backendUrl}/assign/bus/${buseId}/driver/${userId}`,
      {
        method: "POST",
        mode: "cors",
        headers,
      }
    );
    const response = await dt.json();

    if (dt.ok === false) {
      toast.error(response.record.message);
      dispatch(creator(GET_ALL_ERROR));
    } else {
      const newDriver = await fetch(
        `${backendUrl}/assign?page=${0}&size=${10}`,
        {
          headers,
        }
      );
      const data = await newDriver.json();
      toast.success(response.record.message);
      dispatch(creator(POST_DRIVER_ASSIGN_TO_BUSES, data));
    }
  } catch (error) {
    toast.error(error.message);
  }
};
export const UpdateDriverAssignToBuses = (data, id) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/assign/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers,
    });
    console.log(await dt.json());
    if (dt.ok === false) {
      dispatch(creator(GET_ALL_ERROR));
      toast.error(data.message);
    } else {
      const updatedSelect = await fetch(
        `${backendUrl}/assign?page=${0}&size=${10}`,
        {
          headers: {
            Authorization,
          },
        }
      );
      const updateData = await updatedSelect.json();
      dispatch(creator(UPDATE_DRIVER_ASSIGN_TO_BUSES, updateData));
    }
  } catch (error) {
    toast.error(error.message);
  }
};
export const deleteDriverAssignToBuses = (id) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/assign/${id}`, {
      method: "DELETE",
      headers,
    });

    const data = await fetch(`${backendUrl}/assign?page=${0}&size=${10}`, {
      headers: {
        Authorization,
      },
    });
    dispatch(creator(DELETE_DRIVER_ASSIGN_TO_BUSES, data));
  } catch (error) {
    toast.error(error.message);
  }
};
