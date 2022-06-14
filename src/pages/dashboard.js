import React, { useEffect } from "react";
import Sidebar from "../components/admin-sidebar/SideBar";
import Header from "../components/admin-header/Header";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      nav("/");
    }
  });
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
};

export default Dashboard;
