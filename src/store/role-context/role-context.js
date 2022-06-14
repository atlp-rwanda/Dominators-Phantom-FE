const RoleContext = React.createContext({
  roles: [],
  addRole: (role) => {},
  removeRole: (id) => {},
});

export default RoleContext;
