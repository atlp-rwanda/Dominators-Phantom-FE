import "./RouteModal.css";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { postRoute } from "../../module/actions/routeAction";
import CustomeButton from "../../components/Buttons/CustomeButton";
import { toast } from "react-toastify";
function RouteComponent(props) {
  const [isFrom, setIsFrom] = useState("");
  const [isTo, setIsTo] = useState("");
  const [isCode, setIsCode] = useState("");
  const [isDistance, setIsDistance] = useState("");
  const [error, setError] = useState({});
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
    if (isNaN(isCode)) {
      setError({ codeNumber: "Code of Route should be Number" });
      return true;
    }
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!FormValidation()) {
      const data = {
        id: 5,
        from: isFrom,
        to: isTo,
        code: isCode,
        distance: isDistance,
      };
      props.postRoute(data);
      toast.success("Route Have been added Successfully");
      props.setIsOpen(false);
    } else {
      toast.error("Some Filied are Empty");
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
          <h2>Add New Route</h2>
          <form className="form" onSubmit={HandleSubmit}>
            <div className="row-card">
              <div className="col-md-10">
                <div className="form-group row-card2">
                  <label htmlFor="new route">Distance:</label>
                  <div className="col-sm-10">
                    <span className="error">
                      {error.distance ? error.distance : ""}
                    </span>
                    <input
                      type="text"
                      placeholder="Distance"
                      value={isDistance}
                      onChange={(e) => {
                        setIsDistance(e.target.value);
                        setError({ distance: "" });
                      }}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="form-group row-card2">
                  <label htmlFor="new route">From:</label>
                  <div className="col-sm-10">
                    <span className="error">
                      {error.from ? error.from : ""}
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="From"
                      value={isFrom}
                      onChange={(e) => {
                        setIsFrom(e.target.value);
                        setError({ from: "" });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row-card2">
                  <label htmlFor="new route">To:</label>
                  <span className="error"></span>
                  <div className="col-sm-10">
                    <span className="error">{error.to ? error.to : ""}</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="To"
                      value={isTo}
                      onChange={(e) => {
                        setIsTo(e.target.value);
                        setError({ to: "" });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row-card2">
                  <label htmlFor="new route">Code:</label>
                  <div className="col-sm-10">
                    <span className="error">
                      {error.code
                        ? error.code
                        : "" || error.codeNumber
                        ? error.codeNumber
                        : ""}
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      value={isCode}
                      onChange={(e) => {
                        setIsCode(e.target.value);
                        setError({ code: "" });
                        setError({ codeNumber: "" });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="card-btn">
                  <CustomeButton classes="btn btn-green">ADD</CustomeButton>
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
  postRoute: postRoute,
})(RouteComponent);
