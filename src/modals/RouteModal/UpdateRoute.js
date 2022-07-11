import "./RouteModal.css";
import { ImCross, ImCompass2 } from "react-icons/im";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { updateRoute } from "../../module/actions/routeAction";
import CustomeButton from "../../components/Buttons/CustomeButton";
import { toast, ToastContainer } from "react-toastify";
import Map from "../../components/map/Map";
function UpdateRoute(props) {
  const route = props.routeData;
  const [isDistance, setIsDistance] = useState(route ? route.distance : "");
  const [isFrom, setIsFrom] = useState(route ? route.from : "");
  const [isTo, setIsTo] = useState(route ? route.to : "");
  const [isCode, setIsCode] = useState(route ? route.code : "");
  const [fromLatitude, setFromLatitude] = useState(
    route ? route.fromLatitude : ""
  );
  const [fromLongitude, setFromLongitude] = useState(
    route ? route.fromLongitude : ""
  );
  const [toLatitude, setToLatitude] = useState(route ? route.toLatitude : "");
  const [toLongitude, setToLongitude] = useState(
    route ? route.toLongitude : ""
  );
  const [showMap, setShowMap] = useState(false);
  const FormValidation = () => {
    if (isCode == "") return true;
    if (isTo == "") return true;
    if (isDistance == "") return true;
    if (isFrom == "") return true;
  };
  const mapProps = {
    setFromLatitude,
    setFromLongitude,
    setToLatitude,
    setToLongitude,
    fromLatitude,
    fromLongitude,
    toLatitude,
    toLongitude,
    setIsDistance,
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
        fromLongitude,
        fromLatitude,
        toLatitude,
        toLongitude,
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
        <ImCompass2
          className="top-left-icon success"
          onClick={() => setShowMap(!showMap)}
        />
        <ImCross
          className="close-icon"
          onClick={() => {
            props.setUpdateModal(false);
          }}
        />
        <div className="card">
          <h2>Update Route</h2>
          {showMap ? (
            <Map props={mapProps} />
          ) : (
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
                    <label htmlFor="new route">Origin Latitude:</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control fromLatitude metricFromLatitude"
                        placeholder="Origin Latitude"
                        value={fromLatitude}
                        onChange={(e) => {
                          setFromLatitude(e.target.value);
                        }}
                        id="fromLatitude"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group row-card2">
                    <label htmlFor="new route">Origin Longitude:</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control fromLongitude  metricFromLongitude"
                        placeholder="Origin Longitude "
                        value={fromLongitude}
                        onChange={(e) => {
                          setFromLongitude(e.target.value);
                        }}
                        id="fromLongitude"
                      ></input>
                    </div>
                  </div>

                  <div className="form-group row-card2">
                    <label htmlFor="new route">Destination Latitude:</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control toLatitude metricToLatitude"
                        placeholder="Destination Latitude"
                        value={toLatitude}
                        onChange={(e) => {
                          setToLatitude(e.target.value);
                        }}
                        id="toLatitude"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group row-card2">
                    <label htmlFor="new route">Destination Longitude:</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control toLongitude metricToLongitude"
                        placeholder="Destination Longitude "
                        value={toLongitude}
                        onChange={(e) => {
                          setToLongitude(e.target.value);
                        }}
                        id="toLongitude"
                      ></input>
                    </div>
                  </div>
                  <div className="card-btn">
                    <CustomeButton classes="btn btn-green">
                      UPDATE
                    </CustomeButton>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
export default connect(null, {
  updateRoute: updateRoute,
})(UpdateRoute);
