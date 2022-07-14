import React, { useState } from "react";
import LogoutModal from "./logout-modal";
import { ToastContainer } from "react-toastify";

const Logout = () => {
  //declaring logout variabls
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && <LogoutModal closeModal={closeModal} />}
      <ToastContainer />
      <button onClick={() => setShowModal(true)}> Logout </button>
    </div>
  );
};

export default Logout;
