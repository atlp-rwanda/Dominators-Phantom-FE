import React from "react";
import Sidebar from "../admin-sidebar/SideBar";
import avatar from "./Ellipse 2.png";
const SideBarProfile = () => {

  const userEmail = localStorage.getItem("userEmail");
  const userRole = localStorage.getItem("role");

  return (
    <>
      {!localStorage.getItem("user") ? (
        <div className="sidebar-profile">
          <h2> {userRole} </h2> <div className="line"> </div> 
          <img src={avatar} alt="avatar" className="avatar" />
          <p> {userEmail} </p>{" "}
        </div>
      ) : (
        <div>
          <Sidebar />
        </div>
      )}
    </>
  );
};

export default SideBarProfile;
