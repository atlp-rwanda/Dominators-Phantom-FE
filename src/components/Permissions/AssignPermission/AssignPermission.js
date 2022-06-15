import Modal from "../../UI/Modal/Modal";
import classes from "./AssignPermission.module.css";

const AssignPermission = () => {
  return (
    <Modal>
      <h4>Assign Permissions to Role</h4>
      <form>
        <label htmlFor="perm-select">Choose a permission:</label>

        <select name="pets" id="perm-select">
          <option value="">--Please choose an permission--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </form>
    </Modal>
  );
};

export default AssignPermission;
