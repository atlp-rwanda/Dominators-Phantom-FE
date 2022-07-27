import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

const Sidebar = () => {
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
        <NavLink to="/users">
          <IoIcons.IoIosBus /> <span> Users </span>
        </NavLink>
        <NavLink to="/roles">
          <IoIcons.IoIosPeople />
          <span>Roles & Permissions</span>
        </NavLink>
        <Link to="#">
          <IoIcons.IoIosBus /> <span> Driver & Operator </span>
        </Link>
        {(role === "admin" || role === "operator") && (
          <Link to="#" onClick={showSubMenu}>
            <IoIcons.IoIosPeople />
            <span>
              User Roles <IoIcons.IoMdArrowDropdown className="icon-dropDown" />
            </span>
          </Link>
        )}
        {role === "admin" && (
          <div className="subMenu">
            <NavLink to="#">
              <IoIcons.IoMdAdd /> <span> New role </span>
            </NavLink>
            <Link to="#">
              <IoIcons.IoIosLock /> <span> Permissions </span>
            </Link>
            <NavLink to="#">
              <IoIcons.IoMdAnalytics /> <span> Actions </span>
            </NavLink>
          </div>
        )}
        <NavLink to="/crud-route">
          <AiIcons.AiOutlineReload />
          <span> Routes </span>
        </NavLink>
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
        <NavLink to="/crud-buses">
          <IoIcons.IoMdBus />
          <span> Buses </span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;