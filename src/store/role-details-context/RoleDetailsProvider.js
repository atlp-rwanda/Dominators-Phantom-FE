import { useReducer, useCallback, useEffect, useState } from "react";
import RoleDetailsContext from "./role-details-context";
import { db } from "../../utils/db";

const token = localStorage.getItem("token");
const headers = {
  Authorization: "Bearer " + token,
  "Content-Type": "application/json",
};

const RoleDetailsProvider = (props) => {
  const [role, setRole] = useState([]);

  const getRoleHandler = async (id) => {
    try {
      const response = await fetch(`${db}/roles/${id}`, {
        headers,
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data.record);
      setRole(data.record);
    } catch (error) {
      console.log(error.message);
    }
  };

  const roleDetailsContext = {
    getRole: getRoleHandler,
    role: role,
  };

  // useEffect(() => {
  //   getRoleHandler();
  // }, [role]);

  return (
    <RoleDetailsContext.Provider value={roleDetailsContext}>
      {props.children}
    </RoleDetailsContext.Provider>
  );
};

export default RoleDetailsProvider;
