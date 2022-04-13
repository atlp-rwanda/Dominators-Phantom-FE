<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/pages/Home/Home.js
>>>>>>> factorization of folders
import UserNavbar from "../../components/Navbars/UserNavbar";
import UserHeader from "../../components/Headers/UserHeader";
import { IoLocationSharp } from "react-icons/io5";
import { HiClock } from "react-icons/hi";
import { BsKeyboardFill } from "react-icons/bs";
import "./home.css";
import Footer from "../../components/Footer/Footer";
<<<<<<< HEAD

import HomeSkeleton from "./HomeSkeleton";
import { useState ,useEffect} from "react";
function Home() {
  const [skeleton, setSkeleton] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSkeleton(true);
    }, 5000);
    return () => clearTimeout(timer);
  });

=======
========
import UserNavbar from "../components/Navbars/UserNavbar";
import UserHeader from "../components/Headers/UserHeader";
>>>>>>>> factorization of folders:src/pages/Home.js
function Home() {
>>>>>>> factorization of folders
  return (
    <div>
      <UserNavbar />
      <UserHeader />
<<<<<<< HEAD

      {skeleton ? (
        <div className="home">
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
        </div>
      ) : (
        <HomeSkeleton />
      )}

=======
      <div className="home-content">
<<<<<<<< HEAD:src/pages/Home/Home.js
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
========
        <h3>
          HOW DOES IT WORKER
        </h3>
        <div>
          <div className="col-3">Register</div>
          <div className="col-3"></div>
          <div className="col-3"></div>
>>>>>>>> factorization of folders:src/pages/Home.js
        </div>
      </div>
>>>>>>> factorization of folders
      <Footer Aime="aime" />
    </div>
  );
}
export default Home;
