import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import groupIcon from "../../assets/images/logos/phantomIcon.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { getAllNotifications } from "../../module/actions/notificationAction";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  const [noun, setNoun] = useState("");
  const [rightBar, setRightBar] = useState(false);
  const user = localStorage.getItem("user");
  const userName = localStorage.getItem("userName");
  const DriverId = localStorage.getItem("userId");
  const { notification } = props;
  const coutnNotification = notification.length;
  useEffect(() => {
    setNoun(userName);
    if (localStorage.getItem("role") === "driver") {
      props.getAllNotifications(DriverId);
    }
  }, [notification]);

  const nav = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("profilePic");
    return nav("/login");
  };
  return (
    <div>
      <nav className="navbar">
        <div className="leftNavBar">
          <FaIcons.FaBars id="menuBars" onClick={() => props.callFunction()} />
          <img src={groupIcon} alt="" id="busIcon" />
        </div>
        <div className="rightNavBar" onClick={() => setRightBar(!rightBar)}>
          {notification.length > 0 ? (
            <FaIcons.FaBell id="" className="bell" />
          ) : (
            ""
          )}
          <p className="circleWord" onClick={() => setRightBar(!rightBar)}>
            {localStorage.getItem("profilePic") ? (
              <img
                src={localStorage.getItem("profilePic")}
                alt={noun?.charAt(0)}
                id="profilePic"
              />
            ) : (
              <span id="nounAvatar">{noun?.charAt(0)}</span>
            )}
          </p>
          <p id="noun"> {noun} </p>
          {rightBar ? (
            <FaIcons.FaChevronUp id="downArrow" />
          ) : (
            <FaIcons.FaChevronDown id="downArrow" />
          )}
        </div>
      </nav>
      <div className="mainContent">
        {rightBar ? (
          <div className="rightBar">
            <Link to="/update-profile" className="d-icons" id="toUpdate">
              <FaIcons.FaUserCircle className="icons-sub" />
              <span> My profile </span>
            </Link>

            <div className="d-icons">
              <AiIcons.AiFillSetting className="icons-sub " />
              <span> Settings </span>
            </div>
            <NavLink to="/notification" style={{ color: "var(--green)" }}>
              <div className="d-icons">
                <BsIcons.BsBellFill
                  className={
                    coutnNotification > 0
                      ? "icons-sub bell-notify"
                      : "icons-sub"
                  }
                />
                <span>
                  {" "}
                  Notification{notification.length > 1 ? "s" : ""} (
                  {notification.length > 0 ? notification.length : ""})
                </span>
              </div>
            </NavLink>
            <div className="d-icons" id="logout">
              <IoIcons.IoMdLogOut className="icons-sub" />
              <span onClick={(e) => handleLogout(e)}> Logout </span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
const mapToState = ({ notification }) => ({
  notification: notification.notification,
});
export default connect(mapToState, {
  getAllNotifications: getAllNotifications,
})(Header);
