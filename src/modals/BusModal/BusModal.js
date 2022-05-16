import "./BusModal.css";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { postBuses } from "../../module/actions/busAction";
import CustomeButton from "../../components/Buttons/CustomeButton";
import { toast,ToastContainer } from "react-toastify";

  import 'react-toastify/dist/ReactToastify.css';
function BusComponent(props) {
  const [isRoute, setIsRoute] = useState("");
  
  const [isBusType, setIsBusType] = useState("");
  const [isBus, setIsBus] = useState("");
  const [error, setError] = useState({});
  const FormValidation = () => {
    
    if (isRoute == "") {
      setError({ route: "Route is required" });
      return true;
    }
    
    if (isBus == "") {
      setError({ bus: "plate number is required" });
      return true;
    }

    if (isBusType == "") {
      setError({ busType: "bus type is required" });
      return true;
    }
   
    if (isBusType==""){
      setError({ busType: "Bus type is requared" });
      return true;
    }
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!FormValidation()) {
      const data = {
        id: 5,
        route: isRoute,
        
        busType: isBusType,
        bus: isBus,
        
      };
      
      props.postBuses(data);
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
                  <label htmlFor="new route">Route</label>
                  <div className="col-sm-10">
                    <span className="error">
                      {error.route ? error.route : ""}
                    </span>
                    <input
                    
                      type="text"
                      className="form-control"
                      placeholder="Route"
                      value={isRoute}
                      onChange={(e) => {
                        setIsRoute(e.target.value);
                        setError({ route: "" });
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
  postBuses: postBuses,
})(BusComponent);