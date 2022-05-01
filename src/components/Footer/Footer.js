import "./footer.css";

import { NavLink } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-limit">
        <div className="footer-content">
          <div className="footer-quick-links">
            QUICK LINKS
            <ul>
              <li>
                <NavLink to="/ticket">&gt;TICKET</NavLink>
              </li>
              <li>
                <NavLink to="/live-tracking">&gt;LIVE TRACKING</NavLink>
              </li>
              <li>
                <NavLink to="/contact">&gt;CONTACT</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-contact-us">
            CONTACT US
            <ul>
              <li>kk 767 street</li>
              <li>Kigali Rwanda</li>
              <li>+2507888888</li>
              <li>phantom@gmail.com</li>
            </ul>
          </div>
          <div className="footer-social-media">
            SOCIAL MEDIA
            <ul>
              <li>
                <AiFillFacebook className="icon-facebook" />
                &nbsp; Facebook
              </li>
              <li>
                <AiFillTwitterSquare className="icon-twitter" />
                &nbsp; Twitter
              </li>
              <li>
                <AiFillLinkedin className="icon-linkedin" />
                &nbsp; LinkedIn
              </li>
              <li>
                <AiFillYoutube className="icon-youtube" />
                &nbsp; Youtube
              </li>
            </ul>
          </div>
        </div>
        <div className="hr" />
        <div className="designer">
          <p className="p1">Phantom 2022. All rights reserved</p>
          <p className="p2">Designed by ATLP Dominators</p>
        </div>
      </div>
    </div>
  );

}
export default Footer;
