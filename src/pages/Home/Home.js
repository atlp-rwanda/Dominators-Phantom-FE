import UserNavbar from "../../components/Navbars/UserNavbar";
import UserHeader from "../../components/Headers/UserHeader";
import { IoLocationSharp } from "react-icons/io5";
import { HiClock } from "react-icons/hi";
import { BsKeyboardFill } from "react-icons/bs";
import "./home.css";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <div>
      <UserNavbar />
      <UserHeader />
      <div className="home-content">
        <h3>HOW DOES IT WORKER</h3>
        <div className="row">
          <div className="col-3">
            <BsKeyboardFill className="icons" />
            <p> REGISTER</p>
            <div className="home-circle">
              <span>1</span>
            </div>
          </div>
          <div className="col-3">
            <IoLocationSharp className="icons" />
            <p>TRACK YOU BUS</p>
            <div className="home-circle">
              <span>2</span>
            </div>
          </div>
          <div className="col-3">
            <HiClock className="icons" />
            <p>TRAVEL ON TIME</p>
            <div className="home-circle">
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
      <Footer Aime="aime" />
    </div>
  );
}
export default Home;
