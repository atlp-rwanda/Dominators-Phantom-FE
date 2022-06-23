const RoleContext = React.createContext({
  roles: [],
  role: [],
  addRole: (role) => {},
  removeRole: (id) => {},
  getRole: (id) => {},
  updateRole: (role) => {},
});

export default RoleContext;
