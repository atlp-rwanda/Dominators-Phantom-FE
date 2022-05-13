import "./UserModal.css";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { useState } from "react";
import { postUser } from "../../module/actions/userAction";
import { FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";
function UserComponent(props) {
  const [isEmail, setIsEmail] = useState("");
  const [isRole, setIsRole] = useState("");
  const [error, setError] = useState({});
  const FormValidation = () => {
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
        id: "",
        email: isEmail,
        role: isRole,
      };
      props.postUser(data);
      toast.success("User added Successfully");
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
                  <option value="Driver">Driver</option>
                  <option value="Operator">Operator</option>
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
