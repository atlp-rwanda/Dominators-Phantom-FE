import { useCallback, useEffect, useState } from "react";
import PermissionContext from "../permission-context/permission-context";
import { backendUrl } from "../../utils/db";
import { toast, ToastContainer } from "react-toastify";

const token = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

const PermissionProvider = (props) => {
  const [permissions, setPermissions] = useState({ result: [] });
  const [isPosted, setIsPosted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const postPermisionandler = async (permission) => {
    const response = await fetch(`${backendUrl}/permissions`, {
      method: "POST",
      body: JSON.stringify(permission),
      headers,
    });
    const data = await response.json();
    if (data.status === "fail") {
      toast.error(data.record.message);
    }

    if (data.status === "success") {
      toast.success("Permission added successfully");
    }

    setIsPosted((prevState) => !prevState);
  };

  const deletePermissionHandler = async (id) => {
    try {
      const response = await fetch(`${backendUrl}/permissions/${id}`, {
        method: "DELETE",
        headers,
      });
      const data = await response.json();
      if (data.status === "fail") {
        toast.error(data.record.message);
      }

      if (data.status === "success") {
        toast.success(data.record.message);
      }
      setIsDeleted((prevState) => !prevState);
    } catch (err) {
      console.log(error.message);
    }
  };

  const fetchPermissionsHandler = useCallback(async () => {
    try {
      if (!["/", "/login"].includes(location.pathname)) {
        const response = await fetch(
          `${backendUrl}/permissions?page=0&size=1000`,
          {
            headers,
          }
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        const total = response.headers.get("x-total-count");
        console.log(total);
        setPermissions(data.record.allPermissions);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const permissionContext = {
    permissions: permissions,
    addPermission: postPermisionandler,
    removePermission: deletePermissionHandler,
  };

  useEffect(() => {
    fetchPermissionsHandler();
  }, [fetchPermissionsHandler, isDeleted, isPosted]);

  return (
    <PermissionContext.Provider value={permissionContext}>
      <ToastContainer theme="colored" />
      {props.children}
    </PermissionContext.Provider>
  );
};

export default PermissionProvider;
