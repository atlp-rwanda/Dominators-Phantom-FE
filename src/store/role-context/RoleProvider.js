import { useReducer, useCallback, useEffect, useState } from "react";
import RoleContext from "./role-context";
import { toast, ToastContainer } from "react-toastify";
import { db } from "../../utils/db";

const token = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

const RoleProvider = (props) => {
  const [roles, setRoles] = useState([]);
  const [isPosted, setIsPosted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const postRoleHandler = async (role) => {
    const response = await fetch(`${db}/roles`, {
      method: "POST",
      body: JSON.stringify(role),
      headers,
    });
    const data = await response.json();
    console.log(data);
    if (data.status === "fail") {
      toast.error(data.record.message);
    }

    if (data.status === "success") {
      toast.success("Role added successfully");
    }
    setIsPosted((prevState) => !prevState);
  };

  const updateRoleHandler = async (id, role) => {
    const response = await fetch(`${db}/roles/${id}`, {
      method: "PATCH",
      body: JSON.stringify(role),
      headers,
    });
    const data = await response.json();
    console.log(data);
    if (data.status === "fail") {
      toast.error(data.record.message);
    }

    if (data.status === "success") {
      toast.success("Role added successfully");
    }
    setIsPosted((prevState) => !prevState);
  };

  const deleteRoleHandler = async (id) => {
    const response = await fetch(`${db}/roles/${id}`, {
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
      if (location.pathname != "/") {
        const response = await fetch(`${db}/roles`, {
          headers,
        });

        const data = await response.json();

        if (data.status === "fail") {
          toast.error(data.record.message);
        }
        setRoles(data.record.allRoles);
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
  };

  useEffect(() => {
    fetchRolesHandler();
  }, [fetchRolesHandler, isPosted, isDeleted]);

  return (
    <RoleContext.Provider value={roleContext}>
      {props.children}
    </RoleContext.Provider>
  );
};

export default RoleProvider;
