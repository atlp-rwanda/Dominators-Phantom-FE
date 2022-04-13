import bus from "../../assets/images/bus.svg";
import HomeButton from "../Buttons/HomeButton";
function UserHeader() {
  return (
    <div className="intro_header">
      <div className="header">
        <div className="header-content">
          <div className="content">
            <h4>AVOID LONG BUS QUEUES </h4>
            <div className="ft-tracking">WITH TRACKING BUS LOCATION</div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
            <div className="ft-header-btn">
              <HomeButton>Start Tracking</HomeButton>
            
            </div>
          </div>
          <div className="bus-image">
            <img src={bus} alt="" width="80%" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserHeader;
