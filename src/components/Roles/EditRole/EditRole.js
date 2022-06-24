import { useRef, useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { postUser } from "../../../module/actions/userAction";
import { toast } from "react-toastify";
import RoleContext from "../../../store/role-context/role-context";
import classes from "./EditRole.module.css";
import Input from "../../UI/Input/Input";
import { FaBullseye } from "react-icons/fa";

const EditRole = (props) => {
  const [roleIsValid, setRoleIsValid] = useState(true);
  const [duplicate, setDuplicate] = useState(false);
  const roleCtx = useContext(RoleContext);
  const roles = roleCtx.roles;

  const roleInputRef = useRef();

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(props.role.role_id);

    const enteredRole = roleInputRef.current.value;
    if (enteredRole.trim().length === 0) {
      return setRoleIsValid(false);
    }

    const existingRole = roles.some((role) => role.name === enteredRole);

    if (existingRole) return setDuplicate(true);

    roleCtx.updateRole(props.role.role_id, {
      name: enteredRole,
    });

    props.onClose();
  };

  const message = () => {
    if (!roleIsValid) return "Please add a new role name!";
    if (duplicate) return "Role name already exists";
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
              {<p className={classes.error}>{message()}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRole;
