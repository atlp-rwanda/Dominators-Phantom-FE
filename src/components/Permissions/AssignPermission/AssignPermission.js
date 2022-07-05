import { useState, useContext } from "react";
import { ImCross } from "react-icons/im";
import RoleContext from "../../../store/role-context/role-context";
import RoleDetailsContext from "../../../store/role-details-context/role-details-context";
import PermissionContext from "../../../store/permission-context/permission-context";
import classes from "./AssignPermission.module.css";

const AssignPermission = (props) => {
  const roleCtx = useContext(RoleContext);
  const roles = roleCtx.roles;

  const permCtx = useContext(PermissionContext);
  const permissions = permCtx.permissions;

  const roleDCtx = useContext(RoleDetailsContext);
  const roleData = roleDCtx.role;

  const rolePermissionsId = roleData?.permissions?.map(
    (permission) => permission.permission_id
  );

  const [isPermission, setIsPermission] = useState("");
  const [error, setError] = useState("");

  const filteredPermissions = permissions.result?.filter(
    (permission) => !rolePermissionsId.includes(permission.permission_id)
  );

  const FormValidation = () => {
    if (isPermission === "") {
      return setError({ from: "Permission is required" });
    }
  };
  const HandleSubmit = (e, id) => {
    e.preventDefault();
    if (isPermission === "") {
      return setError("Permission is required");
    }
    const data = {
      permission_id: id,
    };
    console.log(data);
    roleDCtx.addPermission(data);
    props.hideAssignPermissionHandler();
  };

  return (
    <>
      <div className={classes["main-add"]}>
        <ImCross
          className={classes["close-icon"]}
          onClick={props.hideAssignPermissionHandler}
        />
        <div className={classes.card}>
          <form onSubmit={(e) => HandleSubmit(e, isPermission)}>
            <h3 className="create-title">Add Permission</h3>
            <div>
              <select
                className={classes["select-driver"]}
                id="permission"
                name="permission"
                value={isPermission}
                onChange={(e) => setIsPermission(e.target.value)}
              >
                <option name="" value="">
                  {filteredPermissions.length == 0
                    ? "No new permission to add"
                    : "Select Permission"}
                </option>
                {filteredPermissions.map((permission) => (
                  <option
                    value={permission.permission_id}
                    key={permission.permission_id}
                  >
                    {permission.name}
                  </option>
                ))}
              </select>
              <div>
                <button className={classes["btn-save"]} type="submit">
                  Save
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AssignPermission;
