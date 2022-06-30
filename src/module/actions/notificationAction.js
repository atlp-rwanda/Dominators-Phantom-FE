import { client, Authorization } from "../../utils/db";
import { GET_ALL_DRIVER_NOTIFICATION, GET_NOTIFICATION_CHANGED } from "..";
import creator from "./creator";
export const getAllNotifications = (DriverId) => (dispatch) => {
  if (Authorization) {
    client.emit("login", "hello");
    client.on("notification", (data) => {
      const response = data.rows.filter(
        ({ userId, viewStatus }) => userId == DriverId && viewStatus == false
      );
      dispatch(creator(GET_ALL_DRIVER_NOTIFICATION, response));
    });
    client.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
  }
};
export const updateViewNotification = (DriverId) => (dispatch) => {
  if (Authorization) {
    client.emit("viewNotification", DriverId);
    client.on("changed", (data) => {
      const response = data.rows.filter(
        ({ userId, viewStatus }) => userId == DriverId && viewStatus == false
      );
      dispatch(creator(GET_NOTIFICATION_CHANGED, response));
    });
  }
};
