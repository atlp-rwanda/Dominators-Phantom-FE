import { useReducer, useCallback, useEffect, useState } from "react";
import RoleContext from "./role-context";
import { toast, ToastContainer } from "react-toastify";
import { db } from "../../utils/db";

const token = localStorage.getItem("token");
const headers = {
  Authorization: "Bearer " + token,
  "Content-Type": "application/json",
};

const RoleProvider = (props) => {
  const [role, setRole] = useState([]);
  const [roles, setRoles] = useState([]);
  const [isPosted, setIsPosted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const postRoleHandler = async (role) => {
    const response = await fetch(`${db}/roles`, {
      method: "POST",
      body: JSON.stringify(role),
      headers,
    });
    setIsPosted((prevState) => !prevState);
  };

  const deleteRoleHandler = async (id) => {
    const response = await fetch(`${db}/roles/${id}`, {
      method: "DELETE",
      headers,
    });
    setIsDeleted((prevState) => !prevState);
  };

  const fetchRolesHandler = useCallback(async () => {
    try {
      const response = await fetch(`${db}/roles`, {
        headers,
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
        // toast.error("Unauthorized access");
      }

      const data = await response.json();
      setRoles(data.record.allRoles);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const roleContext = {
    roles: roles,
    addRole: postRoleHandler,
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
