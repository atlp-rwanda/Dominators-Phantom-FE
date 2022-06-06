import { useState, useContext } from "react";
import Header from "../../components/admin-header/Header";
import Sidebar from "../../components/admin-sidebar/SideBar";
import NewRole from "../../components/NewRole/NewRole";
import RoleItem from "../../components/RoleItem/RoleItem";
import Card from "../../components/UI/Card/Card";
import Button from "../../components/UI/Button/Button";
import { IconContext } from "react-icons";
import { FaPlus } from "react-icons/fa";
import classes from "./Roles.module.css";
import RoleContext from "../../store/role-context/role-context";

const Roles = () => {
  const roleCtx = useContext(RoleContext);
  const roles = roleCtx.roles;

  const [newRoleIsShown, setNewRoleIsShown] = useState(false);

  const showNewRoleHandler = () => {
    setNewRoleIsShown(true);
  };

  const hideNewRoleHandler = () => {
    setNewRoleIsShown(false);
  };

  const [roleItemIsShown, setRoleItemIsShown] = useState(false);

  const showRoleItemHandler = () => {
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
            {roleItemIsShown && <RoleItem onClose={hideRoleItemHandler} />}
            <ul className={classes.roles}>
              {roles.map((role) => (
                <li key={role.id} onClick={showRoleItemHandler}>
                  {role.name}
                </li>
              ))}
            </ul>
          </Card>
          <Card className={classes.permissions}>
            <h4 className={classes.title}>Available Permissions</h4>
            <ul className={classes.roles}>
              <li>
                Control the bus movement i.e. start, stop, and change bus speed.
              </li>
              <li>View the bus movement</li>
              <li>Manage (create, update, delete) routes</li>
              <li>Manage (create, update, delete) buses</li>
              <li>Manage (create, update, delete) bus to route assignment</li>
              <li>Manage (create, update, delete) driver to bus assignment</li>
              <li>View the bus movement</li>
              <li>
                The Administrator should be able to create, update, and delete
                roles.
              </li>
              <li>
                The administrator should be able to set and update role's
                permissions.
              </li>
              <li>Register and remove both drivers & operators</li>
            </ul>
          </Card>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Roles;
