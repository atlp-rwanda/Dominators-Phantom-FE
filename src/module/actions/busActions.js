import {
  POST_BUSES,
  GET_ALL_BUSES,
  GET_ONE_BUS,
  UPDATE_ONE_BUS,
  DELETE_BUS,
} from "../index";
import creator from "./creator";
import { toast } from "react-toastify";
import { backendUrl } from "../../utils/db";

const authorization = localStorage.getItem("token");
const headers = {
  authorization,
  "Content-type": "application/json",
};
export const getAllBuses = ( ) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/buses`, { headers });
    const datas = await dt.json();
    console.log("datas", datas);
    localStorage.setItem("value",JSON.stringify(datas))

    dispatch(creator(GET_ALL_BUSES, datas));
  } catch (e) {
    if (e.message) {
      return toast.error(e.message);
    }
  }
};


export const getAllBusesForUser = (searchfilter) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/buses`);
    const datas = await dt.json();
    const searchData = datas.filter((value) => {
      return (
        value.from.toLowerCase().includes(searchfilter) ||
        value.to.toLowerCase().includes(searchfilter) ||
        value.code.includes(searchfilter)
      );
    });
    dispatch(creator(GET_ALL_BUSES, searchData));
  } catch (e) {
    if (e.message) {
      return toast.error(e.message);
    }
  }
};
export const getOneBus = (busid) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/buses/` + busid);
    const data = await dt.json();
    dispatch(creator(GET_ONE_BUS, data));
  } catch (e) {
    if (e.response && e.response.data) {
      return toast.error(e.response.data.error);
    }
  }
};
export const postBuses = (data) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/buses`, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      
      headers,
    });
    const response = await dt.json();
    dispatch(creator(POST_BUSES, response));
  } catch (error) {
    if (error.message) return toast.error(error.message);
  }
};
export const updateBus = (data, id) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/buses/` + id, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    const updatedSelect = await fetch(`${backendUrl}/buses`);
    const updateData = await updatedSelect.json();
    dispatch(creator(UPDATE_ONE_BUS, updateData));
  } catch (e) {
    if (e.response && e.response.data) {
      return toast.error(e.response.data.error);
    }
  }
};

export const deleteBus = (id) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/buses/` + id, {
      method: "DELETE",
    });
    dispatch(creator(DELETE_BUS, id));
  } catch (error) {
    if (error.message) return toast.error(error.message);
  }
};