import { useState, useContext } from "react";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { postUser } from "../../../module/actions/userAction";
import { toast } from "react-toastify";
import RoleContext from "../../../store/role-context/role-context";
import classes from "./AssignPermission.module.css";

const AssignPermission = (props) => {
  const roleCtx = useContext(RoleContext);
  const roles = roleCtx.roles;

  const [isRole, setIsRole] = useState("");
  const [error, setError] = useState({});

  const FormValidation = () => {
    if (isRole == "") {
      setError({ from: "Role is required" });
      return true;
    }
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!FormValidation()) {
      const data = {
        id: "",
        firstName: isFirstName,
        lastName: isLastName,
        email: isEmail,
        role: isRole,
      };
      props.postUser(data);
      toast.success("User added Successfully");
      props.setShowAssignPermissions(false);
    } else {
      toast.error("All fields are required");
    }
  };

  return (
    <>
      <div className={classes["main-add"]}>
        <ImCross
          className={classes["close-icon"]}
          onClick={props.hideAssignPermissionHandler}
        />
        <div className={classes.card}>
          <form onSubmit={(e) => HandleSubmit(e)}>
            <h3 className="create-title">Add Permission</h3>
            <div>
              <select
                className={classes["select-driver"]}
                id="role"
                name="role"
                value={isRole}
                onChange={(e) => setIsRole(e.target.value)}
              >
                <option name="" value="">
                  Select
                </option>
                {roles.map((role) => (
                  <option value="Driver" key={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
              <div>
                <button className={classes["btn-save"]} type="submit">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default connect(null, {
  postUser: postUser,
})(AssignPermission);
