
import { useEffect, useState } from "react";
import bus from "../../assets/images/bus.svg";
import HomeButton from "../Buttons/HomeButton";
import "./header.css";
import UserHeaderSkeleton from "./UserHeaderSkeleton";
function UserHeader() {

  const [Skeleton, setSkeleton] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSkeleton(true);
    }, 5000);
    return () => clearTimeout(timer);
  });
  return (
<<<<<<< HEAD
    <>
      {Skeleton ? (
        <>
          <div className="intro_header">
            <div className="header-content">
              <div className="content">
                <h4>AVOID LONG BUS QUEUES </h4>
                <div className="ft-tracking">WITH TRACKING BUS LOCATION</div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </p>
                <div className="ft-header-btn">
                  <HomeButton>Start Tracking</HomeButton>
                </div>
              </div>
              <div className="bus-image">
                <img src={bus} alt="" width="70%" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <UserHeaderSkeleton />
      )}
    </>

=======
    <div className="intro_header">
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
          <img src={bus} alt="" width="70%" />
        </div>
      </div>
    </div>
>>>>>>> icons packages
  );
}
export default UserHeader;
