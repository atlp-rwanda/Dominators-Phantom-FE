import phantom from "../../assets/images/logos/phantomIcon.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./UserNavbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
function UserNavbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  let humbuger;
  const toggleNav = () => {
    if (toggleMenu === false) {
      setToggleMenu(true);
    } else {
      setToggleMenu(false);
    }
  };

  return (
    <div className="navBar">
      <nav className="nav">
        <div className="logo">
          <img alt="" src={phantom} width="120px" height="65px" />
        </div>
        {toggleMenu ? (
          <div className="responsiveNavItem">
            <ImCross
              className="close"
              onClick={() => {
                setToggleMenu( false );
                humbuger={$}
              }}
            />
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
        ) : (
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
        )}

        <GiHamburgerMenu className="hamburger" onClick={toggleNav} />
      </nav>
    </div>
  );
}
export default UserNavbar;
