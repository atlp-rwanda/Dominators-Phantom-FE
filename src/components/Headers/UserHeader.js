import bus from "../../assets/images/bus.svg";
function UserHeader() {
  return (
    <div className="intro_header">
      <div className="header">
        <div className="header-content">
          <div className="content">Header</div>
          <div className="bus-image">
            <img src={bus} alt="" height="30px" width="100px" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserHeader;
