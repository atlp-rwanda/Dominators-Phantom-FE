const RoleDetailsContext = React.createContext({
  role: [],
  getRole: (id) => {},
  addPermission: (permission) => {},
  deletePermission: (id) => {},
});

export default RoleDetailsContext;
