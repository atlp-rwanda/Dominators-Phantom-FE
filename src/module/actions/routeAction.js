import {
  POST_ROUTES,
  GET_ALL_ROUTE,
  GET_ONE_ROUTE,
  UPDATE_ONE_ROUTE,
  DELETE_ROUTE,
  UPDATE_ONE_ROUTE_ERROR,
} from "../index";
import creator from "./creator";
import { toast } from "react-toastify";
import { db, token } from "../../utils/db";

export const getAllRoute = (page, size) => async (dispatch) => {
  console.log(token);
  try {
    const dt = await fetch(`${db}/routes?page=${page}&size=${size}`, {
      headers: {
        authorization: token,
      },
    });
    const datas = await dt.json();
    dispatch(creator(GET_ALL_ROUTE, datas));
  } catch (e) {
    if (e.message) {
      return toast.error(e.message);
    }
  }
};
export const getAllRouteForUser =
  (page, size, searchfilter) => async (dispatch) => {
    try {
      const dt = await fetch(`${db}/routes?page=${page}&size=${size}`, {
        headers: {
          authorization: token,
        },
      });
      const datas = await dt.json();

      const searchData = datas.result.filter((value) => {
        return (
          value.origin.toLowerCase().includes(searchfilter) ||
          value.destination.toLowerCase().includes(searchfilter) ||
          value.code.includes(searchfilter)
        );
      });
      const data = { searchData, datas };
      dispatch(creator(GET_ALL_ROUTE, data));
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
    console.log(data);
    const dt = await fetch(`${db}/routes`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
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
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const updatedSelect = await fetch(`${db}/routes`, {
      headers: {
        authorization: token,
      },
    });
    const updateData = await updatedSelect.json();
    dispatch(creator(UPDATE_ONE_ROUTE, updateData));
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(
        creator(UPDATE_ONE_ROUTE_ERROR, toast.error(e.response.data.error))
      );
    }
  }
};

export const deleteRoute = (routeId) => async (dispatch) => {
  console.log(routeId);
  try {
    const dt = await fetch(`${db}/routes/` + routeId, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    dispatch(creator(DELETE_ROUTE, routeId));
    return toast.success("Route Delete Successfully");
  } catch (error) {
    if (error.message) return toast.error(error.message);
  }
};
