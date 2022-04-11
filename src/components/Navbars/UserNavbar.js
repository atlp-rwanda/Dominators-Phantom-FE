import phantom from "../../assets/images/logos/phantomIcon.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./UserNavbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
function UserNavbar() {
  const [ toggleMenu, setToggleMenu ] = useState( false );
  return (
    <>
      <div className="navBar">
        <nav className="nav">

              <div className="logo">
                <img alt="" src={phantom} width="120px" height="65px" />
              </div>
              <div className={toggleMenu ? "navItem active" : "navItem"}>
                <ul>
                  <li>
                    <NavLink to="/">HOME</NavLink>
                  </li>
                  <li>
                    <NavLink to="/routes">ROUTES</NavLink>
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
          {toggleMenu ? (
            <ImCross
              className="close"
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            />
          ) : (
            <GiHamburgerMenu
              className="hamburger"
              onClick={ () => {
                setToggleMenu( !toggleMenu );
              } }
            />
          ) }
        </nav>
      </div>
    </>)
  
}

export default UserNavbar;
