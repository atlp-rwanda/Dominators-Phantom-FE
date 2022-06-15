import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import groupIcon from "../../assets/images/logos/phantomIcon.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [noun, setNoun] = useState("");
  const [rightBar, setRightBar] = useState(false);

  const userName = localStorage.getItem("userName");

  useEffect(() => {
    setNoun(userName);
  });

  const nav = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    return nav("/login");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="leftNavBar">
          <FaIcons.FaBars id="menuBars" />
          <img src={groupIcon} alt="" id="busIcon" />
        </div>

        <div className="rightNavBar" onClick={() => setRightBar(!rightBar)}>
          <p className="circleWord" onClick={() => setRightBar(!rightBar)}>
            {noun?.charAt(0)}
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
              <AiIcons.AiFillSetting className="icons-sub" />
              <span> Settings </span>
            </div>
            <div className="d-icons">
              <BsIcons.BsBellFill className="icons-sub" />
              <span> Notifications</span>
            </div>
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

export default Header;
