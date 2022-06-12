import "./UserModal.css";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { useState, useContext } from "react";
import { postUser } from "../../module/actions/userAction";
import { FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";
import RoleContext from "../../store/role-context/role-context";

function UserComponent(props) {
  const roleCtx = useContext(RoleContext);
  const roles = roleCtx.roles;

  const [isEmail, setIsEmail] = useState("");
  const [isRole, setIsRole] = useState("");
  const [isFirstName, setIsFirstName] = useState("");
  const [isLastName, setIsLastName] = useState("");
  const [error, setError] = useState({});

  const FormValidation = () => {
    if (isFirstName == "") {
      setError({ firstName: "First Name is required" });
      return true;
    }
    if (isLastName == "") {
      setError({ lastName: "Last Name is required" });
      return true;
    }
    if (isEmail == "") {
      setError({ email: "Email is required" });
      return true;
    }
    if (isRole == "") {
      setError({ from: "Role is required" });
      return true;
    }
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!FormValidation()) {
      const data = {
        firstName: isFirstName,
        lastName: isLastName,
        email: isEmail,
        role: isRole,
      };
      props.postUser(data);
      props.setIsOpen(false);
    } else {
      toast.error("All fields are required");
    }
  };
  return (
    <>
      <div className="main-add">
        <ImCross
          className="close-icon"
          onClick={() => {
            props.setIsOpen(false);
          }}
        />
        <div className="card">
          <form onSubmit={(e) => HandleSubmit(e)}>
            <h3 className="create-title">Create Driver or Operator</h3>
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
              <span className="envelope-icon">
                <FaEnvelope />
              </span>
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
                {roles?.map((role, key) => (
                  <option value={role.name} key={key}>
                    {role.name}
                  </option>
                ))}
              </select>
              <div>
                <button className="btn-save" type="submit">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default connect(null, {
  postUser: postUser,
})(UserComponent);
