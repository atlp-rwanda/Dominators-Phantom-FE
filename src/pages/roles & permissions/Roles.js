import { useState, useContext } from "react";
import Header from "../../components/admin-header/Header";
import Sidebar from "../../components/admin-sidebar/SideBar";
import NewRole from "../../components/NewRole/NewRole";
import RoleItem from "../../components/RoleItem/RoleItem";
import Card from "../../components/UI/Card/Card";
import Button from "../../components/UI/Button/Button";
import { IconContext } from "react-icons";
import { FaPlus, FaTrashAlt, FaEdit } from "react-icons/fa";
import classes from "./Roles.module.css";
import RoleContext from "../../store/role-context/role-context";

const Roles = () => {
  const roleCtx = useContext(RoleContext);
  const roles = roleCtx.roles;

  const [newRoleIsShown, setNewRoleIsShown] = useState(false);

  const [roleItemIsShown, setRoleItemIsShown] = useState(false);

  const [roleName, setRoleName] = useState("");

  const showNewRoleHandler = () => {
    setNewRoleIsShown(true);
  };

  const hideNewRoleHandler = () => {
    setNewRoleIsShown(false);
  };

  const showRoleItemHandler = (role) => {
    setRoleName(role);
    setRoleItemIsShown(true);
  };

  const hideRoleItemHandler = () => {
    setRoleItemIsShown(false);
  };

  return (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <Header />
      <Sidebar />
      <div className={classes.main}>
        {newRoleIsShown && <NewRole onClose={hideNewRoleHandler} />}
        <Button onClick={showNewRoleHandler} className={classes.btn}>
          <span>
            <FaPlus />
          </span>
          <span className={classes["add-role"]}>Add Role</span>
        </Button>
        <div className={classes["roles-permissions"]}>
          <Card className={classes.driver}>
            <h4 className={classes.title}>Available Roles</h4>
            {roleItemIsShown && (
              <RoleItem roleName={roleName} onClose={hideRoleItemHandler} />
            )}
            <ul className={classes.roles}>
              {roles.map((role) => (
                <div>
                  <li
                    key={role.id}
                    onClick={() => showRoleItemHandler(role.name)}
                  >
                    {role.name}
                  </li>
                  <span>
                    <FaEdit
                      style={{ cursor: "pointer", marginRight: "10px" }}
                    />
                    <FaTrashAlt style={{ cursor: "pointer" }} />
                  </span>
                </div>
              ))}
            </ul>
          </Card>
          <Card className={classes.permissions}>
            <h4 className={classes.title}>Available Permissions</h4>
            <ul className={classes.roles}>
              <li>Control the bus movement</li>
              <li>View the bus movement</li>
              <li>Create routes</li>
              <li>Update routes</li>
              <li>Delete routes</li>
              <li>Create buses</li>
              <li>Update buses</li>
              <li>Delete buses</li>
              <li>Create bus to route assignment</li>
              <li>Update bus to route assignment</li>
              <li>Delete bus to route assignment</li>
              <li>Create driver to bus assignment</li>
              <li>Update driver to bus assignment</li>
              <li>Delete driver to bus assignment</li>
              <li>Create roles</li>
              <li>Update roles</li>
              <li>Delete roles</li>
              <li>Set and Update role's permissions</li>
              <li>Register and remove both drivers & operators</li>
            </ul>
          </Card>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Roles;
