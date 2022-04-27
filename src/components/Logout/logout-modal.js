import React from "react";
import "./logout-modal.css";
import logo from "../../assets/images/phantom.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogoutModal = ({ closeModal }) => {
  let token = localStorage.getItem("token");
  const goHome = useNavigate();
  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("token");
      goHome("/");
    } else {
      toast.error("An arror occured while signing out!", {
        theme: "colored",
      });
    }
  };
  return (
    <div className="logout-modal-container" onClick={closeModal}>
      <div className="logout-modal">
        <img src={logo} alt="Phantom Logo" className="logo" />
        <h2>Are you sure do you want to log out? </h2>
        <div className="buttons-container">
          <button className="cancel">Cancel</button>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
