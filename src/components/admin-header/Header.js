import React, { useState } from "react";
import groupIcon from "./phantom.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import "./Header.css";

const Header = () => {
  const [noun] = useState("Anesphore");
  const [rightBar, setRightBar] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="leftNavBar">
          <FaIcons.FaBars id="menuBars" />
          <img src={groupIcon} alt="" id="busIcon" />
        </div>
        <div className="rightNavBar">
          <p className="circleWord" onClick={() => setRightBar(!rightBar)}>
            {noun.charAt(0)}
          </p>
          <p id="noun"> {noun} </p>
          <FaIcons.FaChevronDown
            id="downArrow"
            onClick={() => setRightBar(!rightBar)}
          />
        </div>
      </nav>
      <div className="mainContent">
        {rightBar ? (
          <div className="rightBar">
            <div className="d-icons">
              <FaIcons.FaUserCircle className="icons-sub" />
              <p> My profile </p>
            </div>
            <div className="d-icons">
              <AiIcons.AiFillSetting className="icons-sub" />
              <p> Settings </p>
            </div>
            <div className="d-icons">
              <BsIcons.BsBellFill className="icons-sub" />
              <p> Notifications </p>
            </div>
            <div className="d-icons" id="logout">
              <IoIcons.IoMdLogOut className="icons-sub" />
              <p> Logout </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
