import { NavLink, Link } from "react-router-dom";
import * as IoIcons from "react-icons/io";
import { MdAssignmentReturned, MdAssignment } from "react-icons/md";
function UserRole() {
  return (
    <>
      <NavLink to="#">
        <IoIcons.IoMdAdd /> <span> New role </span>
      </NavLink>
      <Link to="#">
        <IoIcons.IoIosLock /> <span> Permissions </span>
      </Link>
      <NavLink to="#">
        <IoIcons.IoMdAnalytics /> <span> Actions </span>
      </NavLink>
    </>
  );
}
function AssignDriver() {
  return (
    <>
      <NavLink to="/assigned">
        <MdAssignmentReturned /> <span> Assigned </span>
      </NavLink>
      <NavLink to="/unassigned">
        <MdAssignment /> <span> Un Assigned </span>
      </NavLink>
    </>
  );
}
export { UserRole, AssignDriver };
