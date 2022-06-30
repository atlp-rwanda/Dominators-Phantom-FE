import "./notification.css";
import { useState, useEffect } from "react";
import Header from "../../components/admin-header/Header";
import Sidebar from "../../components/admin-sidebar/SideBar";
import { FaBell } from "react-icons/fa";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { connect } from "react-redux";
import NotificationComponent from "../../components/notification/notificationComponent";
function Notification(props) {
  const { notification } = props;
  const [openModal, setOpenModal] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState();

  return (
    <>
      <Header />
      <Sidebar />
      <div className="main">
        <BreadCrumb icon={<FaBell />} title="NOTIFICATION" />
        <div className="content">
          <div className=" route-table main-notification">
            <div className="title-notification">
              Fabrice You have {notification.length} unread notification
            </div>
            {notification.map((value, idx) => {
              return (
                <div
                  className="_notification"
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault;
                    setOpenModal(true);
                    setNotificationMessage(value);
                  }}
                >
                  <h6>{value.User.firstName + " " + value.User.lastName}</h6>
                  <p>{value.Notification.message}</p>
                </div>
              );
            })}
          </div>
          {openModal ? (
            <NotificationComponent
              openModal={openModal}
              setOpenModal={setOpenModal}
              notificationMessage={notificationMessage}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
const mapToState = ({ notification }) => ({
  notification: notification.notification,
});
export default connect(mapToState)(Notification);
