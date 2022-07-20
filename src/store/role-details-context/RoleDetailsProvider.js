import { useReducer, useCallback, useEffect, useState } from "react";
import RoleDetailsContext from "./role-details-context";
import { toast, ToastContainer } from "react-toastify";
import { backendUrl } from "../../utils/db";

const token = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

const RoleDetailsProvider = (props) => {
  const [role, setRole] = useState([]);

  const getRoleHandler = async (id) => {
    try {
      const response = await fetch(`${backendUrl}/roles/${id}`, {
        headers,
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setRole(data.record);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addPermissionHandler = async (permission) => {
    try {
      const response = await fetch(
        `${backendUrl}/roles/${role.role_id}/permissions`,
        {
          method: "POST",
          body: JSON.stringify(permission),
          headers,
        }
      );

      const data = await response.json();
      if (data.status === "fail") {
        toast.error(data.record.message);
      }

      if (data.status === "success") {
        toast.success(`permission added to ${role.name} successfully`);
      }
      setRole(data.record);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deletePermissionHandler = async (id) => {
    try {
      const response = await fetch(
        `${backendUrl}/roles/${role.role_id}/permissions/${id}`,
        {
          method: "DELETE",
          headers,
        }
      );

      const data = await response.json();
      if (data.status === "fail") {
        toast.error(data.record.message);
      }

      if (data.status === "success") {
        toast.success(`permission removed from ${role.name} successfully`);
      }
      setRole(data.record);
    } catch (error) {
      console.log(error.message);
    }
  };

  const roleDetailsContext = {
    getRole: getRoleHandler,
    role: role,
    addPermission: addPermissionHandler,
    deletePermission: deletePermissionHandler,
  };

  return (
    <RoleDetailsContext.Provider value={roleDetailsContext}>
      {props.children}
    </RoleDetailsContext.Provider>
  );
};

export default RoleDetailsProvider;
