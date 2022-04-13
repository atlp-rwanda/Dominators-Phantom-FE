import phantom from "../../assets/images/logos/phantomIcon.png";
import { NavLink } from "react-router-dom";
function UserNavbar() {
  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <img alt="" src={phantom} width="120px" height="65px" />
        </div>
        <div className="navItem">
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>TICKET</li>
            <li>LIVE TRACKING</li>
            <li>CONTACT</li>
            <li>LOGIN</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default UserNavbar;
