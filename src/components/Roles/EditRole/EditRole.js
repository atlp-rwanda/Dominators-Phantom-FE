import { useState, useContext } from "react";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { postUser } from "../../../module/actions/userAction";
import { toast } from "react-toastify";
import RoleContext from "../../../store/role-context/role-context";
import classes from "./EditRole.module.css";

const EditRole = (props) => {
  const roleCtx = useContext(RoleContext);
  const roles = roleCtx.roles;

  return (
    <div className={classes["main-add"]}>
      <ImCross className={classes["close-icon"]} onClick={props.onClose} />
      <div className={classes.card}>
        <form onSubmit={(e) => HandleSubmit(e)}>
          <h3 className={classes["create-title"]}>Edit Role</h3>
          <div>
            <div className={classes["select-container"]}>
              <input
                className={classes["select-driver"]}
                id="role"
                name="role"
                value=""
                placeholder="Driver"
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
