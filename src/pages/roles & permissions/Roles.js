import { useState, useContext, useEffect, useCallback } from "react";
import Header from "../../components/admin-header/Header";
import Sidebar from "../../components/admin-sidebar/SideBar";
import NewRole from "../../components/Roles/NewRole/NewRole";
import NewPermission from "../../components/Permissions/NewPermission/NewPermission";
import RoleItem from "../../components/Roles/RoleItem/RoleItem";
import EditRole from "../../components/Roles/EditRole/EditRole";
import RoleSkeleton from "./RoleSkeleton";
import Card from "../../components/UI/Card/Card";
import Button from "../../components/UI/Button/Button";
import { IconContext } from "react-icons";
import { FaPlus, FaTrashAlt, FaEdit } from "react-icons/fa";
import classes from "./Roles.module.css";
import RoleContext from "../../store/role-context/role-context";
import PermissionContext from "../../store/permission-context/permission-context";
import swal from "sweetalert";
import ReactPaginate from "react-paginate";
import { toast, ToastContainer } from "react-toastify";
import { backendUrl, headers } from "../../utils/db";

const Roles = () => {
  const roleCtx = useContext(RoleContext);
  const rolesCtx = roleCtx.roles;

  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const permCtx = useContext(PermissionContext);
  const permissionsCtx = permCtx.permissions;

  const [isLoading, setIsLoading] = useState(true);
  const [newRoleIsShown, setNewRoleIsShown] = useState(false);
  const [newPermissionIsShown, setNewPermissionIsShown] = useState(false);
  const [roleItemIsShown, setRoleItemIsShown] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [roleId, setRoleId] = useState("");
  const [editRoleIsShown, setEditRoleIsShown] = useState(false);

  // const fetchRolesHandler = useCallback(async () => {
  //   try {
  //     const response = await fetch(`${backendUrl}/roles`, {
  //       headers,
  //     });
  //     const data = await response.json();
  //     setRoles(data.record.allRoles);
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // }, []);

  const fetchPermissionsHandler = useCallback(async () => {
    try {
      const response = await fetch(
        `${backendUrl}/permissions/?page=0&size=100`,
        {
          headers,
        }
      );
      const data = await response.json();
      setPermissions(data.record.allPermissions);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  useEffect(() => {
    setRoles(rolesCtx);
    fetchPermissionsHandler();
  }, [rolesCtx, permissionsCtx]);

  const showNewRoleHandler = () => {
    setNewRoleIsShown(true);
  };

  const hideNewRoleHandler = () => {
    setNewRoleIsShown(false);
  };

  const showNewPermissionHandler = () => {
    setNewPermissionIsShown(true);
  };

  const hideNewPermissionHandler = () => {
    setNewPermissionIsShown(false);
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
        roleCtx.removeRole(id);
      }
    });
  };

  const handleDeletePermission = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        permCtx.removePermission(id);
      }
    });
  };

  const handleEdit = (id, role) => {
    setRoleName(role);
    setRoleId(id);
    setEditRoleIsShown(true);
  };

  const handleCloseEdit = () => {
    setEditRoleIsShown(false);
  };

  const pageChangeHandler = (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;
  };

  return (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <ToastContainer theme="colored" />
      <Header />
      <Sidebar />
      {isLoading ? (
        <RoleSkeleton />
      ) : (
        <div className={classes.main}>
          {newRoleIsShown && <NewRole onClose={hideNewRoleHandler} />}
          {newPermissionIsShown && (
            <NewPermission onClose={hideNewPermissionHandler} />
          )}
          <Button
            onClick={showNewRoleHandler}
            className={`${classes.btn} ${classes["btn-role"]}`}
          >
            <span>
              <FaPlus />
            </span>
            <span className={classes["add-role"]}>Add Role</span>
          </Button>
          <Button
            onClick={showNewPermissionHandler}
            className={`${classes.btn} ${classes["btn-permission"]}`}
          >
            <span>
              <FaPlus />
            </span>
            <span className={classes["add-role"]}>Add Permission</span>
          </Button>
          <div className={classes["roles-permissions"]}>
            <Card className={classes.driver}>
              <h4 className={classes.title}>Available Roles</h4>
              {roleItemIsShown && (
                <RoleItem role={roleName} onClose={hideRoleItemHandler} />
              )}
              <ul className={classes.roles}>
                {roles?.map((role) => (
                  <div key={role.role_id}>
                    <li onClick={() => showRoleItemHandler(role.role_id)}>
                      {role.name}
                    </li>
                    <span>
                      <FaEdit
                        className={classes.editIcon}
                        onClick={() => handleEdit(role.role_id, role)}
                      />

                      <FaTrashAlt
                        className={classes.trashIcon}
                        onClick={() => handleDelete(role.role_id)}
                      />
                    </span>
                  </div>
                ))}
              </ul>
            </Card>
            {editRoleIsShown && (
              <EditRole
                role={roleName}
                roleId={roleId}
                onClose={handleCloseEdit}
              />
            )}
            <Card className={classes.permissions}>
              <h4 className={classes.title}>Available Permissions</h4>
              <ul className={classes.roles}>
                {permissions?.result.map((permission) => (
                  <div key={permission.permission_id}>
                    <li>{permission.name}</li>
                    <span>
                      <FaEdit
                        className={classes.editIcon}
                        onClick={() => handleEdit(permission)}
                      />

                      <FaTrashAlt
                        className={classes.trashIcon}
                        onClick={() =>
                          handleDeletePermission(permission.permission_id)
                        }
                      />
                    </span>
                  </div>
                ))}
              </ul>
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={10}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={pageChangeHandler}
                containerClassName={
                  "pagination pagination-sm justify-content-center"
                }
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </Card>
          </div>
        </div>
      )}
    </IconContext.Provider>
  );
};

export default Roles;
