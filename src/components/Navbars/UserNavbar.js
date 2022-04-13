import phantom from "../../assets/images/logos/phantomIcon.png";
import { NavLink } from "react-router-dom";
function UserNavbar() {
  return (
    <div className="navBar">
      <nav className="nav">
        <div className="logo">
          <img alt="" src={phantom} width="120px" height="65px" />
        </div>
        <div className="navItem">
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="ticket">TICKET</NavLink>
            </li>
            <li>
              <NavLink to="tracking">LIVE TRACKING</NavLink>
            </li>
            <li>
              <NavLink to="contact">CONTACT</NavLink>
            </li>
            <li>
              <NavLink to="login" className="login">
                LOGIN
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default UserNavbar;
