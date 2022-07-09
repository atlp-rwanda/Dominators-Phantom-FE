import React, { useEffect, useState } from "react";
import Sidebar from "../components/admin-sidebar/SideBar";
import Header from "../components/admin-header/Header";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleShowSideBar = () => {
    setShowSideBar((value) => !value);
  };

  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      nav("/");
    }
  });
  return (
    <>
      <Header callFunction={() => handleShowSideBar()} />
      {screenWidth >= 800 ? <Sidebar /> : showSideBar ? <Sidebar /> : null}
    </>
  );
};

export default Dashboard;
