import { useState, useContext } from "react";
import Header from "../../components/admin-header/Header";
import Sidebar from "../../components/admin-sidebar/SideBar";
import NewRole from "../../components/Roles/NewRole/NewRole";
import RoleItem from "../../components/Roles/RoleItem/RoleItem";
import EditRole from "../../components/Roles/EditRole/EditRole";
import Card from "../../components/UI/Card/Card";
import Button from "../../components/UI/Button/Button";
import { IconContext } from "react-icons";
import { FaPlus, FaTrashAlt, FaEdit } from "react-icons/fa";
import classes from "./Roles.module.css";
import RoleContext from "../../store/role-context/role-context";
import swal from "sweetalert";
import { toast, ToastContainer } from "react-toastify";

const Roles = () => {
  const roleCtx = useContext(RoleContext);
  const roles = roleCtx.roles;

  const [newRoleIsShown, setNewRoleIsShown] = useState(false);
  const [roleItemIsShown, setRoleItemIsShown] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [editRoleIsShown, setEditRoleIsShown] = useState(false);

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

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        console.log("clicked");
        const arr = roles.filter((item) => item.id !== id);
        console.log(arr);
        toast.success("User Delete Successfully");
      } else {
      }
    });
    console.log(id);
  };

  const handleEdit = (role) => {
    setEditRoleIsShown(true);
    console.log(role.id);
  };

  const handleCloseEdit = () => {
    setEditRoleIsShown(false);
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
                <div key={role.id}>
                  <li onClick={() => showRoleItemHandler(role.name)}>
                    {role.name}
                  </li>
                  <span>
                    <FaEdit
                      className={classes.editIcon}
                      onClick={() => handleEdit(role)}
                    />

                    <FaTrashAlt
                      className={classes.trashIcon}
                      onClick={() => handleDelete(role.id)}
                    />
                  </span>
                </div>
              ))}
            </ul>
          </Card>
          {editRoleIsShown && <EditRole onClose={handleCloseEdit} />}
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
