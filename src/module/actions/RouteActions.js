import { GET_ALL_ROUTES } from "..";
import { db } from "../../utils/db";
import creator from "./creator";
import { toast } from "react-toastify";

export const getAllRoutes = () => async (dispatch) => {
  try {
    const dt = await fetch(`${db}/routes`);
    const data = await dt.json();
    dispatch(creator(GET_ALL_ROUTES, data));
  } catch (error) {
    toast.error(error.message);
  }
};