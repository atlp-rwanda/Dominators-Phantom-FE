import "./UserModal.css";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { updateUser } from "../../module/actions/userAction";
import CustomeButton from "../../components/Buttons/CustomeButton";
import { toast, ToastContainer } from "react-toastify";
function UpdateUser(props) {
  const user = props.userData;
  const [isFirstName, setIsFirstName] = useState(user ? user.firstName : "");
  const [isLastName, setIsLastName] = useState(user ? user.lastName : "");
  const [isEmail, setIsEmail] = useState(user ? user.email : "");
  const [isRole, setIsRole] = useState(user ? user.role : "");

  console.log(user);
  const FormValidation = () => {
    if (isFirstName == "") return true;
    if (isLastName == "") return true;
    if (isEmail == "") return true;
    if (isRole == "") return true;
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    FormValidation();
    if (!FormValidation()) {
      const Data = {
        firstName: isFirstName,
        lastName: isLastName,
        email: isEmail,
        role: isRole,
      };
      props.updateUser(Data, user.id);
      toast.info("User updated Successfully");
      props.setUpdateUser(false);
    } else {
      toast.error("Fill missing record");
    }
  };
  return (
    <>
      <div className="main-add">
        <ImCross
          className="close-icon"
          onClick={() => {
            props.setUpdateUser(false);
          }}
        />
        <div className="card">
          <form onSubmit={(e) => HandleSubmit(e)}>
            <h3 className="create-title">Update User</h3>
            <div>
              <br />
              <input
                className="input-fname"
                placeholder="First Name"
                id="firstName"
                name="firstName"
                value={isFirstName}
                onChange={(e) => setIsFirstName(e.target.value)}
              />
              <input
                className="input-lname"
                placeholder="Last Name"
                id="lastName"
                name="lastName"
                value={isLastName}
                onChange={(e) => setIsLastName(e.target.value)}
              />
              <input
                className="input-email"
                placeholder="Email"
                id="email"
                name="email"
                value={isEmail}
                onChange={(e) => setIsEmail(e.target.value)}
              />
              <br />
              <select
                className="select-driver"
                id="role"
                name="role"
                value={isRole}
                onChange={(e) => setIsRole(e.target.value)}
              >
                <option name="" value="">
                  Select
                </option>
                <option value="Driver">Driver</option>
                <option value="Operator">Operator</option>
              </select>
              <div>
                <div className="card-btn">
                  <CustomeButton classes="btn btn-green btn-update">
                    UPDATE
                  </CustomeButton>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default connect(null, {
  updateUser: updateUser,
})(UpdateUser);
