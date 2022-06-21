import { useRef, useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { postUser } from "../../../module/actions/userAction";
import { toast } from "react-toastify";
import RoleContext from "../../../store/role-context/role-context";
import classes from "./EditRole.module.css";
import Input from "../../UI/Input/Input";

const EditRole = (props) => {
  const [roleIsValid, setRoleIsValid] = useState(true);
  const roleCtx = useContext(RoleContext);
  const roles = roleCtx.roles;

  const roleInputRef = useRef();

  const SubmitHandler = (e) => {
    e.preventDefault();

    const enteredRoleInput = roleInputRef.current.value;
    const enteredRole =
      enteredRoleInput.charAt(0).toUpperCase() + enteredRoleInput.slice(1);
    if (enteredRole.trim().length === 0) {
      return setRoleIsValid(false);
    }

    const existingRole = roles.some((role) => role.name === enteredRole);

    if (existingRole) return setDuplicate(true);

    roleCtx.addRole({
      name: enteredRole,
    });

    props.onClose();
  };

  return (
    <div className={classes["main-add"]}>
      <ImCross className={classes["close-icon"]} onClick={props.onClose} />
      <div className={classes.card}>
        <form onSubmit={SubmitHandler}>
          <h3 className={classes["create-title"]}>Edit {props.role.name}</h3>
          <div>
            <div className={classes["select-container"]}>
              <Input
                className={classes["select-driver"]}
                ref={roleInputRef}
                input={{
                  id: "role",
                  type: "text",
                }}
                placeholder={props.role.name}
                onChange={(e) => setIsRole(e.target.value)}
              />
              <button className={classes["btn-save"]} type="submit">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRole;
