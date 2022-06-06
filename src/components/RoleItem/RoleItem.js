import Modal from "../UI/Modal/Modal";
import { FaEllipsisV, FaEdit, FaTrashAlt } from "react-icons/fa";
import classes from "./RoleItem.module.css";
import Card from "../UI/Card/Card";
import { useState } from "react";

const permissions = [
  {
    id: "p1",
    name: "Control the bus movement i.e. start, stop, and change bus speed.",
  },
  {
    id: "p2",
    name: "View the bus movement",
  },
  {
    id: "p3",
    name: "Manage (create, update, delete) routes",
  },
  {
    id: "p4",
    name: "Manage (create, update, delete) buses",
  },
  {
    id: "p5",
    name: "Manage (create, update, delete) bus to route assignment",
  },
  {
    id: "p6",
    name: "Manage (create, update, delete) driver to bus assignment",
  },
  {
    id: "p7",
    name: "View the bus movement",
  },
  {
    id: "p8",
    name: "The Administrator should be able to create, update, and delete roles",
  },
  {
    id: "p9",
    name: "The administrator should be able to set and update role's permissions.",
  },
  {
    id: "p10",
    name: "Register and remove both drivers & operators.",
  },
];

// const BtnOptions = () => {
//   return (
//     <Card className={classes.options}>
//       <small>
//         Edit
//         <FaEdit style={{ marginLeft: "23px" }} />
//       </small>
//       <small>
//         Delete <FaTrashAlt style={{ color: "red" }} />
//       </small>
//     </Card>
//   );
// };

const RoleItem = (props) => {
  const [showOptions, setShowOptions] = useState(false);

  const showOptionsHandler = () => {
    setShowOptions(true);
  };

  const hideOptionsHandler = () => {
    setShowOptions(false);
  };

  return (
    <Modal className={classes.modal} onClose={props.onClose}>
      <div>
        <h4>role name</h4>
        <ul className={classes.permissions}>
          {permissions.map((permission) => (
            <li>
              {permission.name}

              <FaTrashAlt
                className={classes["ellipsis-icon"]}
                style={{ cursor: "pointer", color: "red" }}
              />
            </li>
          ))}

          {/* <li>View the bus movement</li>
          <li>Manage (create, update, delete) routes</li>
          <li>Manage (create, update, delete) buses</li>
          <li>Manage (create, update, delete) bus to route assignment</li>
          <li>Manage (create, update, delete) driver to bus assignment</li>
          <li>View the bus movement</li>
          <li>
            The Administrator should be able to create, update, and delete
            roles.
          </li>
          <li>
            The administrator should be able to set and update role's
            permissions.
          </li>
          <li>Register and remove both drivers & operators</li> */}
        </ul>
      </div>
    </Modal>
  );
};

export default RoleItem;
