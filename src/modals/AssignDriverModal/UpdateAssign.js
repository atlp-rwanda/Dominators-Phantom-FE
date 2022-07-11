import "./assignModal.css";
import { ImCross } from "react-icons/im";
import Select from "react-select";
import { getAllUserDriver } from "../../module/actions/userAction";
import { getAllBuses } from "../../module/actions/busesAction";
import { UpdateDriverAssignToBuses } from "../../module/actions/assignBuseAction";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CustomeButton from "../../components/Buttons/CustomeButton";
import { connect } from "react-redux";
function UpdateAssign(props) {
  const { users, buses } = props;
  const [firstName, setFirstName] = useState("");
  const { AssignData } = props;
  const [selectedOptionUsers, setSelectionOptionUsers] = useState({
    label: AssignData.userEmail,
    value: AssignData.userId,
    name: AssignData.name,
  });
  const [selectedOptionBuses, setSelectionOptionBuses] = useState({
    label: AssignData.busePlateNumber,

    value: AssignData.buseId,
    value: AssignData.busePlateNumber,
  });
  const [error, setError] = useState({});
  const optionUsers = users.map((value) => ({
    value: value.id,
    label: value.email,
    name: value.firstName + " " + value.lastName,
  }));
  const optionBuses = buses.map((value) => ({
    value: value.id,
    label: value.prateNumber,
  }));
  useEffect(() => {
    props.getAllUserDriver();
    props.getAllBuses();
    setFirstName(AssignData.name);
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
      const data = {
        userId: selectedOptionUsers.value,
        buseId: selectedOptionBuses.value,
      };
      props.UpdateDriverAssignToBuses(data, AssignData.id);
      toast.info("Driver has been Updated successfully!");
      props.setIsUpdateModel(false);
    } else {
      toast.error("Some Filied are Empty");
    }
  };
  return (
    <>
      <div className="main-assign">
        <ImCross
          className="close-icon"
          onClick={() => {
            props.setIsUpdateModel(false);
          }}
        />
        <h2>Update Assigned Driver To Bus </h2>
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
                  <CustomeButton classes="btn btn-green">UPDATE</CustomeButton>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
const mapState = ({ user, buses }) => ({
  users: user.drivers,
  buses: buses.data,
});
export default connect(mapState, {
  getAllUserDriver: getAllUserDriver,
  getAllBuses: getAllBuses,
  UpdateDriverAssignToBuses: UpdateDriverAssignToBuses,
})(UpdateAssign);
