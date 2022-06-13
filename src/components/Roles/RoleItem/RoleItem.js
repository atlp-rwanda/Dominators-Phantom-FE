import { useState } from "react";
import Modal from "../../UI/Modal/Modal";
import { FaEllipsisV, FaPlus, FaTrashAlt } from "react-icons/fa";
import classes from "./RoleItem.module.css";
import Button from "../../UI/Button/Button";
import swal from "sweetalert";
import { toast, ToastContainer } from "react-toastify";

const permissions = [
  {
    id: "p1",
    name: "Control the bus movement",
  },
  {
    id: "p2",
    name: "View the bus movement",
  },
  {
    id: "p3",
    name: "Create routes",
  },
  {
    id: "p4",
    name: "Update routes",
  },
  {
    id: "p5",
    name: "Delete routes",
  },
  {
    id: "p6",
    name: "Create buses",
  },
  {
    id: "p7",
    name: "Update buses",
  },
  {
    id: "p8",
    name: "Delete buses",
  },
  {
    id: "p9",
    name: "Create bus to route assignment",
  },
  {
    id: "p10",
    name: "Update bus to route assignment",
  },
  {
    id: "p11",
    name: "Delete bus to route assignment",
  },
  {
    id: "p12",
    name: "Create driver to bus assignment",
  },
  {
    id: "p13",
    name: "Update driver to bus assignment",
  },
  {
    id: "p14",
    name: "Delete driver to bus assignment",
  },
  {
    id: "p15",
    name: "Create roles",
  },
  {
    id: "p16",
    name: "Update roles",
  },
  {
    id: "p17",
    name: "Delete roles",
  },
  {
    id: "p18",
    name: "Set and Update role's permissions",
  },
  {
    id: "p19",
    name: "Register and remove both drivers & operators",
  },
];

const handleDelete = (id) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this ",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      const arr = permissions.filter((item) => item.id !== id);
      console.log(arr);
      toast.success("User Delete Successfully");
    } else {
    }
  });
  console.log(id);
};

const RoleItem = (props) => {
  const [checkedState, setCheckedState] = useState(
    new Array(permissions.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalNumber = updatedCheckedState.reduce(
      (numOfChecked, currentState, index) => {
        if (currentState === true) {
          return numOfChecked + 1;
        }
        return numOfChecked;
      },
      0
    );

    setTotal(totalNumber);
  };

  return (
    <Modal className={classes.modal} onClose={props.onClose}>
      <div>
        <div className={classes.header}>
          <div>
            <h4>{props.roleName}</h4>
            <FaPlus className={classes["add-btn"]} />
          </div>
          {total ? (
            <Button className={classes.btn} onClick={handleDelete}>
              Delete({total})
            </Button>
          ) : (
            ""
          )}
        </div>
        <ul className={classes.permissions}>
          {permissions.map((permission, id) => (
            <li key={permission.id}>
              <input
                type="checkbox"
                checked={checkedState[id]}
                onChange={() => handleOnChange(id)}
              ></input>
              {permission.name}

              <FaTrashAlt
                className={classes["ellipsis-icon"]}
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(permission.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default RoleItem;
