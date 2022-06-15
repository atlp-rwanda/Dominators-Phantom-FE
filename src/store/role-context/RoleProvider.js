import { useReducer } from "react";
import RoleContext from "./role-context";

const defaultRoleState = {
  roles: [
    { id: Math.random().toString(), name: "Driver" },
    { id: Math.random().toString(), name: "Operator" },
    { id: Math.random().toString(), name: "Admin" },
  ],
};

let updatedRoles;

const roleReducer = (state, action) => {
  if (action.type === "ADD_ROLE") {
    const existingRoles = state.roles.some(
      (role) => role.name === action.role.name
    );

    console.log(existingRoles);

    updatedRoles = state.roles.concat(action.role);
    return {
      roles: updatedRoles,
    };
  }
  return defaultRoleState;
};

const RoleProvider = (props) => {
  const [roleState, dispatchRoleAction] = useReducer(
    roleReducer,
    defaultRoleState
  );

  const addRoleHandler = (role) => {
    dispatchRoleAction({ type: "ADD_ROLE", role: role });
  };

  const removeRoleHandler = (id) => {
    dispatchRoleAction({ type: "REMOVE_ROLE", id: id });
  };

  const roleContext = {
    roles: roleState.roles,
    addRole: addRoleHandler,
    removeRole: removeRoleHandler,
  };
  return (
    <RoleContext.Provider value={roleContext}>
      {props.children}
    </RoleContext.Provider>
  );
};

export default RoleProvider;
