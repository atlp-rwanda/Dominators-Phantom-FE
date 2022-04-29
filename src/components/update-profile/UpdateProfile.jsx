import SideBarProfile from "./sidebarProfile";
import "./profile.css";
import { useState, useEffect } from "react";
import Header from "../admin-header/Header";
import UpdateProfileForm from "./UpdateForm";
import { ToastContainer, toast } from "react-toastify";

const UpdateProfile = () => {
  const [user, setUser] = useState();
  fetch("http://localhost:3000/user")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setUser(data);
    });

  const handleUpdate = (updatedInfo) => {
    fetch("http://localhost:3000/user", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    }).then((res) => {
      if (res.ok) {
        toast.info("Profile updated successfully!");
        localStorage.setItem("user", JSON.stringify(updatedInfo));
      } else {
        toast.error("Failed to update!");
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="content">
        <div>
          <SideBarProfile />
        </div>
        <div className="update-profile">
          <h1 className="title">Update Profile</h1>
          {user ? (
            <UpdateProfileForm user={user} handleUpdate={handleUpdate} />
          ) : (
            <div>
              <h2>Data Loading...</h2>
            </div>
          )}
        </div>
      </div>
      <ToastContainer theme="colored" />
      <div className="admin-footer">
        &copy; Copyright 2022,
        <span style={{ color: "#10B7FF" }}> Phantom Dominators</span>
      </div>
    </div>
  );
};
export default UpdateProfile;
