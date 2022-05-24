import React, { useState } from "react";
import Header from "../admin-header/Header";
import "./bus-simulate.css";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";
import LocationMarker from "./map-components/LocationMarker";
import Routing from "./map-components/Routing";

const BusSimulation = () => {
  const [position, setPosition] = useState([-1.9411962, 30.0438899]);
  const [bus, setBus] = useState("RAB 123 D");
  const [route, setRoute] = useState(102);
  const [startTime, setSartTime] = useState("19:40");
  const [duration, setDuration] = useState("20");
  const [location, setLocation] = useState("Nyabugogo");

  const handleStart = () => {
    setPosition([-1.9595371, 30.1194344]);
    setRoute(294);
    setDuration(0);
    setLocation("Remera");
  };
  const handleRestart = () => {
    setPosition([-1.9411962, 30.0438899]);
    setRoute(102);
    setDuration(20);
    setLocation("Nyabugogo");
  };
  return (
    <div>
      <Header />
      <div className="simulate-container">
        <div className="leaflet-map">
          <Map center={position} zoom={13} style={{ height: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker
              position={position}
              route={route}
              bus={bus}
              startTime={startTime}
              duration={duration}
              location={location}
            />
            {/* <Routing /> */}
          </Map>
        </div>

        <div className="simulate-buttons-container">
          <div>
            <button onClick={handleStart}>Start</button>
          </div>
          <div className="btnRight">
            <button>Speed up</button>
          </div>
          <div className="btnRight">
            <button>Slow down</button>
          </div>
          <div>
            <button onClick={handleRestart}>Restart</button>
            <button>Stop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusSimulation;
