import Header from "../../components/admin-header/Header";
import Sidebar from "../../components/admin-sidebar/SideBar";
import Card from "../../components/UI/Card/Card";
import Button from "../../components/UI/Button/Button";
import { IconContext } from "react-icons";
import { FaPlus, FaTrashAlt, FaEdit } from "react-icons/fa";
import classes from "./RoleSkeleton.module.css";

const RoleSkeleton = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className={classes.main}>
        <Button className={`${classes.btn} ${classes["btn-role"]}`}>
          <span>
            <FaPlus />
          </span>
          <span className={classes["add-role"]}>Add Role</span>
        </Button>
        <Button className={`${classes.btn} ${classes["btn-permission"]}`}>
          <span>
            <FaPlus />
          </span>
          <span className={classes["add-role"]}>Add Permission</span>
        </Button>
        <div className={classes["roles-permissions"]}>
          <Card className={classes.driver}>
            <h4 className={classes.title}>Available Roles</h4>
          </Card>
          <Card className={classes.permissions}>
            <h4 className={classes.title}>Available Permissions</h4>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RoleSkeleton;
