const RoleContext = React.createContext({
  roles: [],
  role: [],
  addRole: (role) => {},
  removeRole: (id) => {},
  getRole: (id) => {},
});

export default RoleContext;
