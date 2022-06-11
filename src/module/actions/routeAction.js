import {
  POST_ROUTES,
  GET_ALL_ROUTE,
  GET_ONE_ROUTE,
  UPDATE_ONE_ROUTE,
  DELETE_ROUTE,
} from "../index";
import creator from "./creator";
import { toast } from "react-toastify";
import { db } from "../../utils/db";

export const getAllRoute = () => async (dispatch) => {
  try {
    const dt = await fetch(`${db}/routes`);
    const datas = await dt.json();
    dispatch(creator(GET_ALL_ROUTE, datas));
  } catch (e) {
    if (e.message) {
      return toast.error(e.message);
    }
  }
};
export const getAllRouteForUser = (searchfilter) => async (dispatch) => {
  try {
    const dt = await fetch(`${db}/routes`);
    const datas = await dt.json();
    const searchData = datas.filter((value) => {
      return (
        value.from.toLowerCase().includes(searchfilter) ||
        value.to.toLowerCase().includes(searchfilter) ||
        value.code.includes(searchfilter)
      );
    });
    dispatch(creator(GET_ALL_ROUTE, searchData));
  } catch (e) {
    if (e.message) {
      return toast.error(e.message);
    }
  }
};
export const getOneRoute = (routeId) => async (dispatch) => {
  try {
    const dt = await fetch(`${db}/routes/` + routeId);
    const data = await dt.json();
    dispatch(creator(GET_ONE_ROUTE, data));
  } catch (e) {
    if (e.response && e.response.data) {
      return toast.error(e.response.data.error);
    }
  }
};
export const postRoute = (data) => async (dispatch) => {
  try {
    const dt = await fetch(`${db}/routes`, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await dt.json();
    dispatch(creator(POST_ROUTES, response));
  } catch (error) {
    if (error.message) return toast.error(error.message);
  }
};
export const updateRoute = (data, id) => async (dispatch) => {
  try {
    const dt = await fetch(`${db}/routes/` + id, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    const updatedSelect = await fetch(`${db}/routes`);
    const updateData = await updatedSelect.json();
    dispatch(creator(UPDATE_ONE_ROUTE, updateData));
  } catch (e) {
    if (e.response && e.response.data) {
      return toast.error(e.response.data.error);
    }
  }
};

export const deleteRoute = (id) => async (dispatch) => {
  try {
    const dt = await fetch(`${db}/routes/` + id, {
      method: "DELETE",
    });
    dispatch(creator(DELETE_ROUTE, id));
  } catch (error) {
    if (error.message) return toast.error(error.message);
  }
};
