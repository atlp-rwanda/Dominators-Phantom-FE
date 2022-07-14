import "./profile.css";
import { useEffect, useState } from "react";
import Header from "../admin-header/Header";
import UpdateProfileForm from "./UpdateForm";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Sidebar from "../admin-sidebar/SideBar";
import { useJwt } from "react-jwt";
import { backendUrl, token } from "../../utils/db";

const UpdateProfile = () => {
  const nav = useNavigate();
  const [user, setUser] = useState();
  const [responseMessage, setResponseMessage] = useState(
    "Loading data, Please wait.."
  );
  const { decodedToken, isExpired } = useJwt(token);
  useEffect(() => {
    if (!token) {
      nav("/");
    }
  });

  if (decodedToken && !isExpired) {
    fetch(backendUrl + "/users/" + decodedToken.id + "/profile")
      .then((res) => {
        if (res.status == 400) {
          setResponseMessage("Error: Can not find Id of the user logged in.");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data.user);
      })
      .catch((error) => {
        setResponseMessage("Failed to fetch user data! 🥵");
      });
  }

  const handleUpdate = (updatedInfo) => {
    fetch(backendUrl + "/users/" + decodedToken.id + "/update", {
      method: "PATCH",
      body: updatedInfo,
    }).then((res) => {
      if (res.ok) {
        toast.info("Profile updated successfully!");
        window.location.reload();
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
          <Sidebar />
        </div>
        <div className="update-profile">
          <h1 className="title">Update Profile</h1>
          {user ? (
            <UpdateProfileForm userInfo={user} handleUpdate={handleUpdate} />
          ) : (
            <div>
              <center>
                <p>{responseMessage}</p>
              </center>
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
