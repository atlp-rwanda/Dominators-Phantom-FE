import { useState, useContext, useEffect } from "react";
import Modal from "../../UI/Modal/Modal";
import { FaEllipsisV, FaPlus, FaTrashAlt } from "react-icons/fa";
import classes from "./RoleItem.module.css";
import Button from "../../UI/Button/Button";
import AssignPermission from "../../Permissions/AssignPermission/AssignPermission";
import PermissionContext from "../../../store/permission-context/permission-context";
import RoleContext from "../../../store/role-context/role-context";
import RoleDetailsContext from "../../../store/role-details-context/role-details-context";
import swal from "sweetalert";
import { toast, ToastContainer } from "react-toastify";

const handleDelete = (id) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this ",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      const arr = permissions.filter((item) => item.id !== id);
      console.log(arr);
      toast.success("User Delete Successfully");
    } else {
    }
  });
  console.log(id);
};

const RoleItem = (props) => {
  const [showAssignPermissions, setShowAssignPermissions] = useState(false);
  const [rolePermissions, setRolePermissions] = useState([]);

  const roleCtx = useContext(RoleContext);
  const RoleDCtx = useContext(RoleDetailsContext);
  const permCtx = useContext(PermissionContext);

  const roleId = props.role;
  const permissions = permCtx.permissions;

  useEffect(() => {
    RoleDCtx.getRole(roleId);
  }, []);

  const roleData = RoleDCtx.role;
  console.log(roleData.permissions);

  // if (roleData.permissions) {
  //   setRolePermissions(roleData.permissions);
  //   console.log(rolePermissions);
  // }

  const [checkedState, setCheckedState] = useState(
    new Array(permissions.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalNumber = updatedCheckedState.reduce(
      (numOfChecked, currentState, index) => {
        if (currentState === true) {
          return numOfChecked + 1;
        }
        return numOfChecked;
      },
      0
    );

    setTotal(totalNumber);
  };

  const showAssignPermissionHandler = () => {
    setShowAssignPermissions(true);
  };

  const hideAssignPermissionHandler = () => {
    setShowAssignPermissions(false);
  };

  return (
    <Modal className={classes.modal} onClose={props.onClose}>
      <div>
        <div className={classes.header}>
          <div>
            <h4>role name</h4>
            <FaPlus
              className={classes["add-btn"]}
              onClick={() => showAssignPermissionHandler()}
            />
            {showAssignPermissions && (
              <AssignPermission
                hideAssignPermissionHandler={hideAssignPermissionHandler}
              />
            )}
          </div>
          {total ? (
            <Button className={classes.btn} onClick={handleDelete}>
              Delete({total})
            </Button>
          ) : (
            ""
          )}
        </div>
        <ul className={classes.permissions}>
          {roleData.permissions.map((permission, id) => (
            <li key={permission.id}>
              <input
                type="checkbox"
                checked={checkedState[id]}
                onChange={() => handleOnChange(id)}
              />
              {permission.name}

              <FaTrashAlt
                className={classes["ellipsis-icon"]}
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(permission.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default RoleItem;
