import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import groupIcon from "./phantom.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import "./Header.css";

const Header = () => {
  const [noun] = useState("Anesphore");

  const [rightBar, setRightBar] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="leftNavBar">
          <FaIcons.FaBars id="menuBars" onClick={() => setSideBar(!sideBar)} />{" "}
          <img src={groupIcon} alt="" id="busIcon" />
        </div>{" "}
        <div className="rightNavBar">
          <p className="circleWord" onClick={() => setRightBar(!rightBar)}>
            {" "}
            {noun.charAt(0)}{" "}
          </p>{" "}
          <p id="noun"> {noun} </p>{" "}
          <FaIcons.FaChevronDown
            id="downArrow"
            onClick={() => setRightBar(!rightBar)}
          />{" "}
        </div>{" "}
      </nav>
      {sideBar ? (
        <div div className="sideBar">
          <nav>
            <Link to="#">
              <AiIcons.AiFillDashboard />
              <span> Dashboard </span>{" "}
            </Link>{" "}
            <Link to="#">
              <IoIcons.IoIosBus /> <span> Driver & Operator </span>{" "}
            </Link>{" "}
            <button onClick={() => setSubMenu(!subMenu)}>
              <IoIcons.IoIosPeople />
              <span>
                User Roles{" "}
                <IoIcons.IoMdArrowDropdown className="icon-dropDown" />
              </span>{" "}
            </button>
            {subMenu ? (
              <div className="subMenu1">
                <NavLink to="#">
                  <IoIcons.IoMdAdd /> <span> New role </span>{" "}
                </NavLink>{" "}
                <Link to="#">
                  <IoIcons.IoIosLock /> <span> Permissions </span>{" "}
                </Link>{" "}
                <Link to="#">
                  <IoIcons.IoMdAnalytics /> <span> Actions </span>{" "}
                </Link>{" "}
              </div>
            ) : null}{" "}
            <Link to="#">
              <AiIcons.AiOutlineReload />
              <span> Routes </span>{" "}
            </Link>{" "}
            <Link to="#">
              <IoIcons.IoMdBus />
              <span> Buses </span>{" "}
            </Link>{" "}
          </nav>{" "}
        </div>
      ) : null}
      <div className="mainContent">
        {" "}
        {rightBar ? (
          <div className="rightBar">
            <div className="icons">
              <FaIcons.FaUserCircle className="icons-sub" />
              <p> My profile </p>{" "}
            </div>
            <div className="icons">
              <AiIcons.AiFillSetting className="icons-sub" />
              <p> Settings </p>{" "}
            </div>
            <div className="icons">
              <BsIcons.BsBellFill className="icons-sub" />
              <p> Notifications </p>{" "}
            </div>
            <div className="icons">
              <IoIcons.IoMdLogOut className="icons-sub" />
              <p id="logout"> Logout </p>{" "}
            </div>{" "}
          </div>
        ) : null}{" "}
      </div>{" "}
    </div>
  );
};

export default Header;
