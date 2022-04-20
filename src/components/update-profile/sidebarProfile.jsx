import React from "react";
import Sidebar from "../admin-sidebar/SideBar";
import avatar from "./Ellipse 2.png";
const SideBarProfile = () => {
  return (
<<<<<<< HEAD
    <>
      {!localStorage.getItem("user") ? (
        <div className="sidebar-profile">
          <h2> Driver </h2> <div className="line"> </div>
          <img src={avatar} alt="avatar" className="avatar" />
          <p> kamana356@gmail.com </p>{" "}
=======
    <React.Fragment>
      {!localStorage.getItem("user") ? (
        <div className="sidebar-profile">
          <h2>Driver</h2>
          <div className="line"></div>
          <img src={avatar} alt="avatar" className="avatar" />
          <p>kamana356@gmail.com</p>
>>>>>>> f48a737 (commit)
        </div>
      ) : (
        <div>
          <Sidebar />
        </div>
      )}
<<<<<<< HEAD
    </>
=======
    </React.Fragment>
>>>>>>> f48a737 (commit)
  );
};

export default SideBarProfile;
