import UserNavbar from "../components/Navbars/UserNavbar";
import UserHeader from "../components/Headers/UserHeader";
import { IoLocationSharp } from "react-icons/io5";
import { HiClock } from "react-icons/hi";
import { BsKeyboardFill } from "react-icons/bs";
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
            REGISTER
            <div className="home-circle">1</div>
          </div>
          <div className="col-3">
            <IoLocationSharp className="icons" />
            TRACK YOU BUS
            <div className="home-circle">2</div>
          </div>
          <div className="col-3">
            <HiClock className="icons" />
            TRAVEL ON TIME
            <div className="home-circle">3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
