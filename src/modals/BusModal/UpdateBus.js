import "./BusModel.css";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
<<<<<<< HEAD
import { getAllRoute } from "../../module/actions/routeAction";
import { updateBus } from "../../module/actions/busActions";
import CustomeButton from "../../components/Buttons/CustomeButton";
import { toast, ToastContainer } from "react-toastify";
import Select from "react-select";

function UpdateBus(props) {
  const bus = props.busData;

  const [isBus, setIsBus] = useState(bus ? bus.plateNumber : "");
  // // const [isRoute, setIsRoute] = useState(bus ? bus.route : "");
  // const [isTo, setIsTo] = useState(bus ? bus.to : "");
  // const [isFrom, setIsFrom] = useState(bus ? bus.from : "");

  const [isBusType, setIsBusType] = useState(bus ? bus.busType : "");

  useEffect(() => {
    props.getAllRoute(0, 20);
  }, []);
  const optionRoute = props.route?.map((value) => ({
    value: value.routeId,
    label: value.origin + "-" + value.destination,
  }));
  const FormValidation = () => {
    if (isBusType == "") return true;
    // if (isTo == "") return true;
    // if (isFrom == "") return true;
    if (isBus == "") return true;
    // if (isRoute == "") return true;
=======
// import { getAllRoute } from "../../module/actions/routeAction";
import { updateBus } from "../../module/actions/busActions";
import CustomeButton from "../../components/Buttons/CustomeButton";
import { toast, ToastContainer } from "react-toastify";

function UpdateBus(props) {
  const bus = props.busData;
  const [route, setRoute] = useState(bus ? bus.routes : "");
  const [isBus, setIsBus] = useState(bus ? bus.plateNumber : "");
  const [isBusType, setIsBusType] = useState(bus ? bus.busType : "");

  const FormValidation = () => {
    if (isBusType == "") return true;
    if (isBus == "") return true;
>>>>>>> 15e96d449414318efe7145993b85106ac9030c33
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    FormValidation();
    if (!FormValidation()) {
      const Data = {
<<<<<<< HEAD
        // route: isRoute,
        // to: isTo,
        // to: isFrom,

=======
>>>>>>> 15e96d449414318efe7145993b85106ac9030c33
        busType: isBusType,
        bus: isBus,
      };
      props.updateBus(Data, bus.id);
      toast.info("You Have updated Successfully");
<<<<<<< HEAD
=======
      location.reload()
>>>>>>> 15e96d449414318efe7145993b85106ac9030c33
      props.setUpdateModal(false);
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
            props.setUpdateModal(false);
          }}
        />
        <div className="card">
          <h2>Update Bus</h2>
          <form className="form" onSubmit={HandleSubmit}>
            <div className="row-card">
              <div className="col-md-10">
<<<<<<< HEAD
                <div className="form-group row-card2">
                  <label htmlFor="new bus">Routes:</label>
                  <div className="col-sm-10">
                    <select
                      options={optionRoute}
                      // className="form-control"
                      value={route}
                      onChange={(e) => setRoute(e.target.value)}
                    />
                  </div>
                </div>
              
           

=======
              <div className="form-group row-card2">
                  <label htmlFor="new bus">Route:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      value={route}
                      onChange={(e) => setRoute(e.target.value)}

                    ></input>
                    <span className="error"></span>
                  </div>
                </div>
>>>>>>> 15e96d449414318efe7145993b85106ac9030c33
                <div className="form-group row-card2">
                  <label htmlFor="new bus">Bus:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      required
                      placeholder="Bus's plate number"
                      className="form-control"
                      value={isBus}
                      onChange={(e) => setIsBus(e.target.value)}
                    ></input>
                    <span className="error"></span>
                  </div>
                </div>
                <div className="form-group row-card2">
                  <label htmlFor="new bus">Bus type:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      required
                      value={isBusType}
                      onChange={(e) => setIsBusType(e.target.value)}
                    ></input>
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
export default connect(null, {
  updateBus: updateBus,
<<<<<<< HEAD
  getAllRoute: getAllRoute,
=======
  // getAllRoute: getAllRoute,
>>>>>>> 15e96d449414318efe7145993b85106ac9030c33
})(UpdateBus);
