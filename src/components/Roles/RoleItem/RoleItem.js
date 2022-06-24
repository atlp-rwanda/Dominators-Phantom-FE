import { useState, useContext, useEffect } from "react";
import Modal from "../../UI/Modal/Modal";
import { FaEllipsisV, FaPlus, FaTrashAlt } from "react-icons/fa";
import classes from "./RoleItem.module.css";
import Button from "../../UI/Button/Button";
import AssignPermission from "../../Permissions/AssignPermission/AssignPermission";
import RoleDetailsContext from "../../../store/role-details-context/role-details-context";
import swal from "sweetalert";
import { toast, ToastContainer } from "react-toastify";

const RoleItem = (props) => {
  const [showAssignPermissions, setShowAssignPermissions] = useState(false);
  const [rolePermissions, setRolePermissions] = useState([]);

  const RoleDCtx = useContext(RoleDetailsContext);

  const roleId = props.role;
  const roleData = RoleDCtx.role;

  useEffect(() => {
    RoleDCtx.getRole(roleId);
    if (roleData.permissions) {
      setRolePermissions(roleData.permissions);
    }
  }, [rolePermissions, showAssignPermissions]);

  const [checkedState, setCheckedState] = useState(
    new Array(rolePermissions.length).fill(false)
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

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        console.log(id);
        RoleDCtx.deletePermission(id);
        setRolePermissions(roleData.permissions);
      }
    });
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
            <h4>{roleData.name}</h4>
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
          {roleData?.permissions?.map((permission, id) => (
            <li key={permission.permission_id}>
              <input
                type="checkbox"
                checked={checkedState[id]}
                onChange={() => handleOnChange(id)}
              />
              {permission.name}

              <FaTrashAlt
                className={classes["ellipsis-icon"]}
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(permission.permission_id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default RoleItem;
