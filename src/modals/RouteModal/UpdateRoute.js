import "./RouteModal.css";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { updateRoute } from "../../module/actions/routeAction";
import CustomeButton from "../../components/Buttons/CustomeButton";
import { toast, ToastContainer } from "react-toastify";
function UpdateRoute(props) {
  const route = props.routeData;
  const [isDistance, setIsDistance] = useState(route ? route.distance : "");
  const [isFrom, setIsFrom] = useState(route ? route.from : "");
  const [isTo, setIsTo] = useState(route ? route.to : "");
  const [latitude, setIsLatitude] = useState(route ? route.latitude : "");
  const [longitude, setIsLongitude] = useState(route ? route.longitude : "");
  const [isCode, setIsCode] = useState(route ? route.code : "");

  const FormValidation = () => {
    if (isCode == "") return true;
    if (isTo == "") return true;
    if (isDistance == "") return true;
    if (isFrom == "") return true;
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    FormValidation();
    if (!FormValidation()) {
      const Data = {
        origin: isFrom,
        destination: isTo,
        code: isCode,
        distance: isDistance,
        longitude: longitude,
        latitude: latitude,
      };
      props.updateRoute(Data, route.id);
      toast.info("You Have updated Successfully");
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
          <h2>Update Route</h2>
          <form onSubmit={HandleSubmit}>
            <div className="row-card">
              <div className="col-md-10">
                <div className="form-group row-card2">
                  <label htmlFor="new route">Distance:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      required
                      placeholder="Distance"
                      className="form-control"
                      value={isDistance}
                      onChange={(e) => setIsDistance(e.target.value)}
                    ></input>
                    <span className="error"></span>
                  </div>
                </div>
                <div className="form-group row-card2">
                  <label htmlFor="new route">From:</label>
                  <div className="col-sm-10">
                    <input
                      className="form-control"
                      type="text"
                      required
                      placeholder="From"
                      value={isFrom}
                      onChange={(e) => setIsFrom(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="form-group row-card2">
                  <label htmlFor="new route">To:</label>
                  <div className="col-sm-10">
                    <input
                      className="form-control"
                      type="text"
                      required
                      placeholder="To"
                      value={isTo}
                      onChange={(e) => setIsTo(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="form-group row-card2">
                  <label htmlFor="new route">Code:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="code"
                      required
                      value={isCode}
                      onChange={(e) => setIsCode(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="form-group row-card2">
                  <label htmlFor="new route">Latitude:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="longitude"
                      value={latitude}
                      onChange={(e) => {
                        setIsLatitude(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row-card2">
                  <label htmlFor="new route">Longitude:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="longitude"
                      value={longitude}
                      onChange={(e) => {
                        setIsLongitude(e.target.value);
                      }}
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
  updateRoute: updateRoute,
})(UpdateRoute);
