import React from "react";
import Header from "../admin-header/Header";
import "./bus-simulate.css";

import { MapContainer } from "react-leaflet";

const BusSimulation = () => {
  return (
    <div>
      <Header />
      <div className="simulate-container">
        <div className="leaflet-map">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63799.13635147974!2d30.077747199999997!3d-1.9759103999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1652081321836!5m2!1sen!2srw"
            loading="lazy"
            style={{ width: "100%", height: "100%" }}
          ></iframe> */}
        </div>

        <div className="simulate-buttons-container">
          <div>
            <button>Start</button>
          </div>
          <div className="btnRight">
            <button>Speed up</button>
          </div>
          <div className="btnRight">
            <button>Slow down</button>
          </div>
          <div>
            <button>Stop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusSimulation;
