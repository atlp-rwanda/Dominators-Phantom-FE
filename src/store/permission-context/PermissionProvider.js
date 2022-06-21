import { useCallback, useEffect, useState } from "react";
import PermissionContext from "../permission-context/permission-context";
import { db } from "../../utils/db";

const PermissionProvider = (props) => {
  const [permissions, setPermissions] = useState([]);
  // const [isPosted, setIsPosted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteRoleHandler = async (id) => {
    const response = await fetch(`http://localhost:4000/roles/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsDeleted((prevState) => !prevState);
  };

  const fetchPermissionsHandler = useCallback(async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${db}/permissions`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setPermissions(data.record.allPermissions);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const permissionContext = {
    permissions: permissions,
    // addRole: postRoleHandler,
    // removeRole: deleteRoleHandler,
  };

  useEffect(() => {
    fetchPermissionsHandler();
  }, [fetchPermissionsHandler]);

  return (
    <PermissionContext.Provider value={permissionContext}>
      {props.children}
    </PermissionContext.Provider>
  );
};

export default PermissionProvider;
