import "./RouteModal.css";
import { ImCross, ImCompass2 } from "react-icons/im";
import { connect } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { postRoute } from "../../module/actions/routeAction";
import CustomeButton from "../../components/Buttons/CustomeButton";
import { toast } from "react-toastify";
import Map from "../../components/map/Map";

function RouteComponent(props) {
  const [isFrom, setIsFrom] = useState("");
  const [isTo, setIsTo] = useState("");
  const [isCode, setIsCode] = useState("");
  const [fromLatitude, setFromLatitude] = useState("");
  const [fromLongitude, setFromLongitude] = useState("");
  const [toLatitude, setToLatitude] = useState("");
  const [toLongitude, setToLongitude] = useState("");
  const [isDistance, setIsDistance] = useState("");
  const [error, setError] = useState({});
  const [previousError, setPreviousError] = useState("");
  const [showMap, setShowMap] = useState(false);

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
  const setClass = (id, className) => {
    const target = document.getElementsByClassName(id)[0];
    target.setAttribute("class", className);
  };

  useEffect(() => {
    if (previousError) setClass(previousError, "form-control " + previousError);
    const erroredKey = Object.keys(error).find((k) => !!error[k]);
    if (erroredKey) {
      setClass(erroredKey, "form-control " + erroredKey + " error-input");
      setPreviousError(erroredKey);
    }
  });

  const FormValidation = () => {
    if (isDistance == "") {
      setError({ distance: "Distance is required" });
      return true;
    }
    if (isFrom == "") {
      setError({ from: "Origin is required" });
      return true;
    }
    if (isTo == "") {
      setError({ to: "Destination is required" });
      return true;
    }

    if (isCode == "") {
      setError({ code: "Code is required" });
      return true;
    }
    if (fromLatitude == "") {
      setError({ fromLatitude: "Origin Latitude is required" });
      return true;
    }
    if (fromLongitude == "") {
      setError({ fromLongitude: "Origin Longitude is required" });
      return true;
    }

    if (toLatitude == "") {
      setError({ toLatitude: "Destination Latitude is required" });
      return true;
    }
    if (toLongitude == "") {
      setError({ toLongitude: "Destination Longitude is required" });
      return true;
    }

    if (isNaN(isCode)) {
      setError({ metricCode: "Code of Route should be Number" });
      return true;
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!FormValidation()) {
      const data = {
        origin: isFrom,
        destination: isTo,
        code: isCode,
        distance: isDistance,
        fromLongitude,
        fromLatitude,
        toLatitude,
        toLongitude,
      };
      props.postRoute(data);
      props.setIsOpen(false);
      toast.success("route created");
      location.reload();
    } else {
      toast.error("Some Fillied are Empty");
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
          className="top-right-icon error"
          onClick={() => {
            props.setIsOpen(false);
          }}
        />
        <div className="card">
          <h2>Add New Route</h2>
          {showMap ? (
            <Map props={mapProps} />
          ) : (
            <form onSubmit={HandleSubmit}>
              <div className="row-card">
                <div className="col-md-10">
                  <div className="form-group row-card2">
                    <label htmlFor="new route">Distance:</label>
                    <div className="col-sm-10">
                      <span className="error"></span>
                      <input
                        type="text"
                        placeholder="Distance"
                        value={isDistance}
                        onChange={(e) => {
                          setIsDistance(e.target.value);
                          setError({ distance: "" });
                        }}
                        className="form-control distance metricDistance"
                        id="distance"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group row-card2">
                    <label htmlFor="new route">From:</label>
                    <div className="col-sm-10">
                      <span className="error"></span>
                      <input
                        type="text"
                        className="form-control from"
                        placeholder="From"
                        value={isFrom}
                        onChange={(e) => {
                          setIsFrom(e.target.value);
                          setError({ from: "" });
                        }}
                        id="from"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group row-card2">
                    <label htmlFor="new route">To:</label>
                    <span className="error"></span>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control to"
                        placeholder="To"
                        value={isTo}
                        onChange={(e) => {
                          setIsTo(e.target.value);
                          setError({ to: "" });
                        }}
                        id="to"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group row-card2">
                    <label htmlFor="new route">Code:</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control code metricCode"
                        placeholder=""
                        value={isCode}
                        onChange={(e) => {
                          setIsCode(e.target.value);
                          setError({ code: "" });
                          setError({ metricCode: "" });
                        }}
                        id="code"
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
                          setError({ fromLatitude: "" });
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
                          setError({ fromLongitude: "" });
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
                          setError({ toLatitude: "" });
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
                          setError({ toLongitude: "" });
                        }}
                        id="toLongitude"
                      ></input>
                    </div>
                  </div>
                  <span className="error col-sm-10">
                    {Object.values(error).find((err) => err)}
                  </span>
                  <div className="card-btn">
                    <CustomeButton classes="btn btn-green">ADD</CustomeButton>
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
  postRoute: postRoute,
})(RouteComponent);
