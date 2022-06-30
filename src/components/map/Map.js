import React, { useState, useEffect } from "react";
import { ImCheckmark, ImCross } from "react-icons/im";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import EventComponent from "./Event";

import Routing from "./Routing";

const center = { lat: -1.9431208545984047, lng: 30.057279438873277 };

const LeafMap = ({ props }) => {
  const [currentLoc, setCurrentLoc] = useState(null);
  const [targetLocation, setTargetLocation] = useState("start");
  const {
    setFromLatitude,
    setFromLongitude,
    setToLatitude,
    setToLongitude,
    fromLatitude,
    fromLongitude,
    toLatitude,
    toLongitude,
    setIsDistance,
  } = props;

  useEffect(() => {
    if (fromLatitude && fromLongitude) setTargetLocation("destination");
  });

  return (
    <MapContainer
      center={center}
      zoom={15}
      style={{ width: "100%", height: "60vh" }}
      draggable={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <EventComponent props={{ setCurrentLoc }} />
      {fromLatitude && fromLongitude && (
        <Marker position={[fromLatitude, fromLongitude]} />
      )}
      {toLatitude && toLongitude && (
        <Marker position={[toLatitude, toLongitude]} />
      )}
      <Marker position={center} />
      {currentLoc && (
        <Popup
          closeButton={false}
          position={currentLoc}
          style={{ padding: "20px" }}
        >
          Set {targetLocation} of route at coordinates{" "}
          <pre>
            {" "}
            lat: {currentLoc.lat} <br></br> lng: {currentLoc.lng}
          </pre>
          <br></br>
          <ImCheckmark
            className="bottom-left-icon success"
            onClick={(e) => {
              const [nextLoc, setLat, setLong] =
                targetLocation == "start"
                  ? ["destination", setFromLatitude, setFromLongitude]
                  : ["start", setToLatitude, setToLongitude];
              setTargetLocation(nextLoc);
              setLat(currentLoc.lat);
              setLong(currentLoc.lng);
              setCurrentLoc(null);
            }}
          />
          <ImCross
            className="bottom-right-icon error"
            onClick={(e) => {
              setCurrentLoc(null);
            }}
          />
        </Popup>
      )}
      <Routing
        fromLatitude={fromLatitude}
        fromLongitude={fromLongitude}
        toLatitude={toLatitude}
        toLongitude={toLongitude}
        setIsDistance={setIsDistance}
      />
    </MapContainer>
  );
};

export default LeafMap;
