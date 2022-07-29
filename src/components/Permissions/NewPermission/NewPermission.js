import { useRef, useState, useContext } from "react";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import RoleContext from "../../../store/role-context/role-context";
import PermissionContext from "../../../store/permission-context/permission-context";
import classes from "./NewPermission.module.css";

const NewPermission = (props) => {
  const permissionCtx = useContext(PermissionContext);
  const permissions = permissionCtx.permissions;

  const [roleIsValid, setRoleIsValid] = useState(true);
  const [duplicate, setDuplicate] = useState(false);

  const permissionInputRef = useRef();
  const permissionDescInputRef = useRef();

  const SubmitHandler = (e) => {
    e.preventDefault();

    const enteredPermission = permissionInputRef.current.value;
    const enteredPermissionDescInput = permissionDescInputRef.current.value;

    if (enteredPermission.trim().length === 0) {
      return setRoleIsValid(false);
    }

    permissionCtx.addPermission({
      name: enteredPermission,
      description: enteredPermissionDescInput,
    });

    props.onClose();
  };

  const message = () => {
    if (!roleIsValid) return "Please add a Permission!";
    if (duplicate) return "Role already exists";
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={SubmitHandler}>
        <Input
          ref={permissionInputRef}
          label="New Permission"
          input={{
            id: "permission",
            type: "text",
          }}
        />
        <Input
          ref={permissionDescInputRef}
          label="Permission description"
          input={{
            id: "permission",
            type: "text-area",
          }}
        />
        <Button className={classes["btn-close"]} onClick={props.onClose}>
          Close
        </Button>
        <Button type="submit" className={classes.btn}>
          Save
        </Button>
        {<p className={classes.error}>{message()}</p>}
      </form>
    </Modal>
  );
};

export default NewPermission;
