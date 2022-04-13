import Header from "../admin-header/Header";
import Sidebar from "../admin-sidebar/SideBar";
import { FaTrash, FaPencilAlt, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllUsers, postUser } from "../../module/actions/action-user";
import { ToastContainer, toast } from "react-toastify";
import { AllUsers } from "../../../RegisterDriver.json";
import "./RegisterDriver.css";

const registerDriver = (props) => {
  
  // A popoup new user
  const [newUserPopup, setNewUserPopup] = useState(false);
  const toggleNewUserPopup = () => {
    setNewUserPopup(!newUserPopup);
  };
  if (newUserPopup) {
    document.body.classList.add("active-popup");
  } else {
    document.body.classList.remove("active-popup");
  }

  useEffect(() => {
    props.getAllUsers();
  }, []);

  // Values of the inputs
  const [user, setUser] = useState({
    id: "",
    email: "",
    role: "",
  });
  const { email, role } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Form validation
  function validate () {
    if (email == "") {
      toast.error("Email is required");
      return false;
    }
    if (role == "") {
      toast.error("Please select role");
      return false;
    }
  };

  // Submit the form
  const onSubmit = async (e) => {
    e.preventDefault();

    if (validate) {
      console.log(user);
      props.postUser(user);
      toast.success("User Have been added Successfully", { theme: "colored" });
    } else {
      toast.error("All fields are required");
    }
  };

  return (
    <div>
      <Header />
      <div className="content">
        <div>
          <Sidebar />
        </div>
        <div className="register-driver">
          <div className="intros">
            <div>Title component</div>
            <div>
              <button onClick={toggleNewUserPopup} className="btn-driver">
                Add New User
              </button>

              {newUserPopup && (
                <div className="overlay">
                  <div className="add_new_popup animate">
                    <form onSubmit={(e) => onSubmit(e)}>
                      <h3 className="create-title">
                        Create Driver or Operator
                      </h3>
                      <div>
                        <br />
                        <input
                          className="input-email"
                          placeholder="Email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => onInputChange(e)}
                        />
                        <span className="envelope-icon">
                          <FaEnvelope />
                        </span>
                        <br />
                        <select
                          className="select-driver"
                          id="role"
                          name="role"
                          value={role}
                          onChange={(e) => onInputChange(e)}
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
              )}
            </div>
          </div>

          <div>
            <table className="content-table ">
              <thead>
                <tr className="driver-thead">
                  <th>No</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {AllUsers.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <span className="table-no">
                        <input type="checkbox" id="" value=""></input>{" "}
                      </span>
                      <span className="table-no">{i + 1}</span>
                    </td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td className="td-action">
                      <div>
                        <a href="">
                          <span className="fa-pencil">
                            <FaPencilAlt />
                          </span>
                        </a>
                        <a href="">
                          <span className="fa-trash">
                            <FaTrash />
                          </span>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td>
                    <div className="table-nav">
                      <span className="tab-active">1</span>
                      <span>2</span>
                      <span>3</span>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <ToastContainer />
      </div>

      <div className="admin-footer">
        &copy; Copyright 2022,
        <span style={{ color: "#10B7FF" }}> Phantom Dominators</span>
      </div>
    </div>
  );
};

const mapState = ({ allUsers }) => ({
  user: allUsers.data,
});

export default connect(mapState, {
  getAllUsers: getAllUsers,
  postUser: postUser,
})(registerDriver);
