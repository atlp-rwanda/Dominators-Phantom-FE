const PermissionContext = React.createContext({
  permissions: [],
  addPermission: (permission) => {},
  removePermission: (id) => {},
});

export default PermissionContext;
