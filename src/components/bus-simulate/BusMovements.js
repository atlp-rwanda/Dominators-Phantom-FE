import React from "react";
import Footer from "../Footer/Footer";
import UserNavbar from "../Navbars/UserNavbar";
import "./tracking-moves.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const BusMovements = () => {
  const position = [51.505, -0.09];
  return (
    <div>
      <UserNavbar />
      <div className="tracking-moves-container">
        <div className="map-container">
          <Map
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "100%" }}
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
        <div className="bus-movements-info">
          <h1> Selected Bus Info. </h1> <br />
          <p>
            <span> Plate Number: </span>RAE 245 M
          </p>
          <p>
            <span> Route: </span> KG 372 ST
          </p>
          <p>
            <span> Start: </span> KG 372 ST - Post 24
          </p>
          <p>
            <span> Stop: </span> KG 372 ST - Post 45
          </p>
          <p>
            <span> Driver: </span> Kamana Deo
          </p>
          <p>
            <span> Operator: </span> NSANZIMANA Chris
          </p>
          <p>
            <span> Speed: </span> 78Km/h
          </p>
          <p>
            <span> Expected time: </span> 45 min
          </p>
          <p>
            <span> Remaining seats: </span> 4 Seats
          </p>
          <div className="book-ticket">
            <button> Book Now </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusMovements;
