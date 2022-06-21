const RoleDetailsContext = React.createContext({
  role: [],
  addRole: (role) => {},
  removeRole: (id) => {},
  getRole: (id) => {},
});

export default RoleDetailsContext;
