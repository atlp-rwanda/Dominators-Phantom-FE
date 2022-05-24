import React from "react";
import { Popup, Marker } from "react-leaflet";
const LocationMarker = ({
  position,
  route,
  bus,
  startTime,
  duration,
  location,
}) => {
  return (
    <Marker position={position}>
      <Popup>
        <img src="./nyabugogo.jpeg" alt={location + " Picture Location"} />
        <br />
        <h2>{location}</h2>
        <br /> Bus: <a href="#">{bus}</a>.
        <br /> Route: <a href={"#"}>{route}</a> <br />
        Start time: <span style={{ color: "#648d80" }}>{startTime} AM</span>,
        Duration: <span style={{ color: "#648d80" }}>{duration} min</span>.
        <br />
        &copy; Phantom Dominators.
      </Popup>
    </Marker>
  );
};

export default LocationMarker;
