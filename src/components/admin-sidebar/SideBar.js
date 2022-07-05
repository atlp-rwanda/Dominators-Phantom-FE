import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import DropDown from "./DropDown";
import { GiSteeringWheel } from "react-icons/gi";
import { UserRole, AssignDriver } from "./DropDownData";

const Sidebar = () => {
  const [useDropDown, setUseDropDown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const showSubMenu = () => {
    const subMenuRoles = document.querySelector(".subMenu");
    if (subMenuRoles.style.display === "block") {
      subMenuRoles.style.display = "none";
    } else {
      subMenuRoles.style.display = "block";
    }
  };

  const role = localStorage.getItem("role");

  return (
    <div className="sidebar">
      <nav>
        <NavLink to="/dashboard">
          <AiIcons.AiFillDashboard />
          <span> Dashboard </span>
        </NavLink>
        {role === "admin" && (
          <>
            <NavLink to="/users">
              <IoIcons.IoIosBus /> <span> Users </span>
            </NavLink>
            <NavLink to="/roles">
              <IoIcons.IoIosPeople />
              <span>Roles & Permissions</span>
            </NavLink>
          </>
        )}
        {role === "operator" && (
          <DropDown
            setUseDropdown={setUseDropDown}
            useDropDown={useDropDown}
            name="Assigned Driver "
            driver="driver"
            icon={<GiSteeringWheel />}
          >
            <AssignDriver />
          </DropDown>
        )}
        <NavLink to="/crud-route">
          <AiIcons.AiOutlineReload />
          <span> Routes </span>
        </NavLink>
        <NavLink to="/buses">
          <IoIcons.IoMdBus />
          <span> Buses </span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
