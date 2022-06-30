import * as IoIcons from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
function DropDown(props) {
  return (
    <>
      <Link
        to="#"
        onClick={(e) => {
          e.type === "click" ? props.setUseDropdown(!props.useDropDown) : "";
        }}
      >
        {props.icon}
        <span>
          {props.name} <IoIcons.IoMdArrowDropdown className="icon-dropDown" />
        </span>
      </Link>

      {props.useDropDown && props.driver ? (
        <div className="subMenu">{props.children}</div>
      ) : (
        ""
      )}
    </>
  );
}
export default DropDown;
