import "./assignModal.css";
import { ImCross } from "react-icons/im";
import Select from "react-select";
import { getAllUser} from "../../module/actions/userAction";
import { getAllBuses } from "../../module/actions/busesAction";
import { postDriverAssignToBuses } from "../../module/actions/assignBuseAction";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CustomeButton from "../../components/Buttons/CustomeButton";
import { connect } from "react-redux";
function AssignModal(props) {
  const { users, buses } = props;
  const [firstName, setFirstName] = useState("");
  const [selectedOptionUsers, setSelectionOptionUsers] = useState(null);
  const [selectedOptionBuses, setSelectionOptionBuses] = useState(null);
  const [error, setError] = useState({});
  const optionUsers = users?.map((value) => ({
    value: value.id,
    label: value.email,
    name: value.firstName + " " + value.lastName,
  }));
  const optionBuses = buses?.map((value) => ({
    value: value.id,
    label: value.prateNumber,
  }));
  useEffect(() => {
    props.getAllUser();
    props.getAllBuses();
  }, []);
  const FormValidation = () => {
    if (selectedOptionUsers == null || selectedOptionUsers == "") {
      setError({ usersError: "Buses Plate Number is required" });
      return true;
    }
    if (selectedOptionBuses == "" || selectedOptionBuses == null) {
      setError({ busesError: "Driver Email is required" });
      return true;
    }
  };
  const handleChangeUser = (selectedOptionUsers) => {
    setSelectionOptionUsers(selectedOptionUsers);
    setFirstName(selectedOptionUsers.name);
    selectedOptionUsers == null ? "" : setError({ usersError: "" });
  };
  const handleChangeBuses = (selectedOptionBuses) => {
    setSelectionOptionBuses(selectedOptionBuses);
    selectedOptionBuses == null ? "" : setError({ busesError: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!FormValidation()) {
      props.postDriverAssignToBuses(
        selectedOptionBuses.value,
        selectedOptionUsers.value
      );
      props.setIsOpen(false);
    } else {
      toast.error("Some Fillied are Empty");
    }
  };
  return (
    <>
      <div className="main-assign">
        <ImCross
          className="close-icon"
          onClick={() => {
            props.setIsOpen(false);
          }}
        />
        <h2>Assign Driver To Bus </h2>
        <div className="line"></div>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="row-card">
              <div className="col-md-10">
                <div className="form-group row-card2">
                  <label htmlFor="new route">Driver Email:</label>
                  <div className="col-sm-10">
                    <span className="error">
                      {error.usersError ? error.usersError : ""}
                    </span>
                    <Select
                      isClearable
                      options={optionUsers}
                      value={selectedOptionUsers}
                      onChange={handleChangeUser}
                    />
                  </div>
                </div>
                <div className="form-group row-card2">
                  <label htmlFor="new route">Driver Full Name:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      disabled
                      value={firstName}
                    />
                  </div>
                </div>
                <div className="form-group row-card2">
                  <label htmlFor="new route">Bus Plate No:</label>
                  <div className="col-sm-10">
                    <span className="error">
                      {error.busesError ? error.busesError : ""}
                    </span>
                    <Select
                      isClearable
                      options={optionBuses}
                      value={selectedOptionBuses}
                      onChange={handleChangeBuses}
                    />
                  </div>
                </div>
                <div className="form-group row-card2">
                  <label htmlFor="new route">Notify:</label>

                  <div className="col-sm-10">
                    <input type="checkbox" className="" />{" "}
                  </div>
                </div>
                <div className="card-btn">
                  <CustomeButton classes="btn btn-green">
                    ASSIGN BUSE
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
const mapState = ({ users, buses }) => ({
  users: users.data,
  buses: buses.data,
});
export default connect(mapState, {
  getAllUser: getAllUser,
  getAllBuses: getAllBuses,
  postDriverAssignToBuses: postDriverAssignToBuses,
})(AssignModal);
