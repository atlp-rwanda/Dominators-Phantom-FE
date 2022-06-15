import { useRef, useState, useContext } from "react";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import RoleContext from "../../../store/role-context/role-context";
import classes from "./NewRole.module.css";

const NewRole = (props) => {
  const roleCtx = useContext(RoleContext);
  const roles = roleCtx.roles;

  const [roleIsValid, setRoleIsValid] = useState(true);
  const [duplicate, setDuplicate] = useState(false);
  const roleInputRef = useRef();

  const SubmitHandler = (e) => {
    e.preventDefault();

    const enteredRole = roleInputRef.current.value;
    if (enteredRole.trim().length === 0) {
      return setRoleIsValid(false);
    }

    const existingRole = roles.some((role) => {
      console.log(enteredRole, role.name);
      role.name === enteredRole;
    });

    console.log(existingRole);

    if (existingRole) return setDuplicate(true);

    roleCtx.addRole({
      id: Math.random().toString(),
      name: enteredRole.charAt(0).toUpperCase() + enteredRole.slice(1),
    });

    props.onClose();
  };

  const message = () => {
    if (!roleIsValid) return "Please add a role!";
    if (duplicate) return "Role already exists";
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={SubmitHandler}>
        <Input
          ref={roleInputRef}
          label="New Role"
          input={{
            id: "role",
            type: "text",
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

export default NewRole;
