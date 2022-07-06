import { useCallback, useEffect, useState } from "react";
import RoleContext from "./role-context";
import { toast, ToastContainer } from "react-toastify";
import { backendUrl, Authorization, headers } from "../../utils/db";

const RoleProvider = (props) => {
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPosted, setIsPosted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const postRoleHandler = async (role) => {
    const response = await fetch(`${backendUrl}/roles`, {
      method: "POST",
      headers,
      body: JSON.stringify(role),
    });
    const data = await response.json();
    if (data.status === "fail") {
      toast.error(data.record.message);
    }

    if (data.status === "success") {
      toast.success("Role added successfully");
    }
    setIsPosted((prevState) => !prevState);
  };

  const updateRoleHandler = async (id, role) => {
    const response = await fetch(`${backendUrl}/roles/${id}`, {
      method: "PATCH",
      body: JSON.stringify(role),
      headers,
    });
    const data = await response.json();
    if (data.status === "fail") {
      toast.error(data.record.message);
    }

    if (data.status === "success") {
      toast.success("Role added successfully");
    }
    setIsUpdated((prevState) => !prevState);
  };

  const deleteRoleHandler = async (id) => {
    const response = await fetch(`${backendUrl}/roles/${id}`, {
      method: "DELETE",
      headers,
    });

    const data = await response.json();
    if (data.status === "fail") {
      toast.error(data.record.message);
    }

    if (data.status === "success") {
      toast.success("Role deleted successfully");
    }
    setIsDeleted((prevState) => !prevState);
  };

  const fetchRolesHandler = useCallback(async () => {
    try {
      if (!["/", "/login"].includes(location.pathname)) {
        const response = await fetch(`${backendUrl}/roles`, {
          headers,
        });

        const data = await response.json();

        if (data.status === "fail") {
          toast.error(data.record.message);
        }
        setRoles(data.record.allRoles);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  const roleContext = {
    roles: roles,
    addRole: postRoleHandler,
    updateRole: updateRoleHandler,
    removeRole: deleteRoleHandler,
    isLoading,
  };

  useEffect(() => {
    fetchRolesHandler();
  }, [fetchRolesHandler, isPosted, isDeleted, isUpdated, isLoading]);

  return (
    <RoleContext.Provider value={roleContext}>
      <ToastContainer theme="colored" />
      {props.children}
    </RoleContext.Provider>
  );
};

export default RoleProvider;
