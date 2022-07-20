import "./RouteModal.css";
import { ImCross} from "react-icons/im";

function RouteDetail(props) {
  return (
    <>
      <div className="main-add">
        <ImCross
          className="close-icon"
          onClick={() => {
            props.setDetail(false);
          }}
        />
        <div className="card">
          <h2>Route Details</h2>
          <div className="row-card">
            <div className="form-group row-card2">
              <label htmlFor="new route">Distance:</label>
              <div className="col-sm-10">
                <pre></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RouteDetail;
