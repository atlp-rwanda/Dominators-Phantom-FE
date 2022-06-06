import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";
//import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
//import * as BsIcons from "react-icons/bs";
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
  return (
    <div className="sidebar">
      <nav>
        <Link to="#">
          <AiIcons.AiFillDashboard />
          <span> Dashboard </span>
        </Link>
        <Link to="/driver-operator">
          <IoIcons.IoIosBus /> <span> Driver & Operator </span>
        </Link>
        <Link to="/roles">
          <IoIcons.IoIosPeople />
          <span>Roles & Permissions</span>
        </Link>
<<<<<<< HEAD
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
=======
>>>>>>> Added roles and permissions
        <NavLink to="/crud-route">
          <AiIcons.AiOutlineReload />
          <span> Routes </span>
        </NavLink>

        <NavLink to="/crud-route">
          <AiIcons.AiOutlineReload />
          <span> Routes </span>
        </NavLink>

        <Link to="#">
          <IoIcons.IoMdBus />
          <span> Buses </span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
