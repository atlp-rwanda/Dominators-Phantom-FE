import "./notification.css";
import { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import moment from "moment";
import { updateViewNotification } from "../../module/actions/NotificationAction";
import { connect } from "react-redux";
function NotificationComponent(props) {
  const { notificationMessage } = props;
  let date = notificationMessage.createdAt;
  const handleCloseModal = () => {
    props.setOpenModal(false);
    props.updateViewNotification(notificationMessage.id);
  };
  return (
    <>
      <div className="main-add m-t-2">
        <ImCross className="close-icon" onClick={handleCloseModal} />
        <div className="card">
          <h2 className="bunner">Notification:</h2>
          <div className="date">Date:{moment().toLocaleString(date)}</div>
          <div className="message">
            {" "}
            {notificationMessage.Notification.message}
          </div>
        </div>
      </div>
    </>
  );
}
export default connect(null, {
  updateViewNotification: updateViewNotification,
})(NotificationComponent);
