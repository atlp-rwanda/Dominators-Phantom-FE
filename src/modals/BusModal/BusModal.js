import "./BusModal.css";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { postBus } from "../../module/actions/busAction";
import CustomeButton from "../../components/Buttons/CustomeButton";
import { toast } from "react-toastify";
function BusComponent(props) {
  const [isFrom, setIsFrom] = useState("");
  const [isTo, setIsTo] = useState("");
  const [isBusType, setIsBusType] = useState("");
  const [isBus, setIsBus] = useState("");
  const [error, setError] = useState({});
  const FormValidation = () => {
    
    if (isFrom == "") {
      setError({ from: "Origin is required" });
      return true;
    }
    if (isTo == "") {
      setError({ to: "Destination is required" });
      return true;
    }
    if (isBus == "") {
      setError({ bus: "plate number is required" });
      return true;
    }

    // if (isBusType == "") {
    //   setError({ busType: "Code is required" });
    //   return true;
    // }
    // if (isNaN(isBusType)) {
    //   setError({ codeNumber: "Code of Route should be Number" });
    //   return true;
    // }
    if (isBusType==""){
      setError({ busType: "Bus type is requaredr" });
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
        busType: isBusType,
        bus: isBus,
      };
      props.postbuses(data);
      toast.success("bus Have been added Successfully");
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
          <h2>Add New Bus</h2>
          <form className="form" onSubmit={HandleSubmit}>
            <div className="row-card">
              <div className="col-md-10">
                
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
                  <label htmlFor="new route">Bus:</label>
                  <div className="col-sm-10">
                    <span className="error">
                      {error.bus ? error.bus : ""}
                    </span>
                    <input
                      type="text"
                      placeholder="Plate number"
                      value={isBus}
                      onChange={(e) => {
                        setIsBus(e.target.value);
                        setError({ bus: "" });
                      }}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="form-group row-card2">
                  <label htmlFor="new route">Bus type:</label>
                  <div className="col-sm-10">
                    <span className="error">
                      {error.busType
                        ? error.busType
                        // : "" || error.codeNumber
                        // ? error.codeNumber
                        : ""}
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bus type"
                      value={isBusType}
                      onChange={(e) => {
                        setIsBusType(e.target.value);
                        setError({ busType: "" });
                        // setError({ codeNumber: "" });
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
  postBus: postBus,
})(BusComponent);