import React from "react";
import Header from "../admin-header/Header";
import "./bus-simulate.css";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";

const BusSimulation = () => {
  const position = [51.505, -0.09];
  return (
    <div>
      <Header />
      <div className="simulate-container">
        <div className="leaflet-map">
          <Map
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "100px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>
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
