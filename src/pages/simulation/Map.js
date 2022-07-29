import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import RoutingMachine from "./RoutingControl";
import { PhantomBusMarker } from "./carMarker";
import { BusState } from "./BusState";
let cursor = 0;
let newCursor;
const UserMap = ({ props }) => {
  const [summary, setSummary] = useState(null);
  const [isDriver, setIsDriver] = useState([]);
  // const [currentTrack, setCurrentTrack] = useState({});

  const {
    position,
    setPosition,
    start,
    engine,
    pause,
    resume,
    speed,
    setCurrentTrack,
    currentTrack,
    currentPosition,
    setCurrentPosition,
    isSpeed,
    isSlowing,
  } = props;
  newCursor = currentPosition;
  // starting Car effect
  useEffect(() => {
    setCurrentTrack(position[cursor]);
    let interval;
    if (start && engine) {
      interval = setInterval(() => {
        if (cursor !== position.length - 1) {
          cursor += 1;
          setCurrentPosition(cursor);
          setCurrentTrack(position[cursor]);

          return;
        }
      }, speed);

      return () => {
        clearInterval(interval);
      };
    } else if (pause) {
      setCurrentTrack(currentTrack);
      clearInterval(interval);
    }
  }, [position, start, engine, resume, pause]);
  // Resume The Engine
  useEffect(() => {
    setCurrentTrack(position[newCursor]);
    let interval;
    if (resume && engine) {
      interval = setInterval(() => {
        if (newCursor !== position.length - 1) {
          newCursor += 1;
          setCurrentPosition(newCursor);
          setCurrentTrack(position[newCursor]);
          return;
        }
      }, speed);

      return () => {
        clearInterval(interval);
      };
    } else if (pause) {
      setCurrentTrack(currentTrack);
      clearInterval(interval);
    }
  }, [resume]);
  // speed up effect
  useEffect(() => {
    setCurrentTrack(position[newCursor]);
    let interval;
    if (isSpeed && engine) {
      interval = setInterval(() => {
        if (newCursor !== position.length - 1) {
          newCursor += 1;
          setCurrentPosition(newCursor);
          setCurrentTrack(position[newCursor]);
          return;
        }
      }, speed);

      return () => {
        clearInterval(interval);
      };
    } else if (pause) {
      setCurrentTrack(currentTrack);
      clearInterval(interval);
    }
  });
  // slow down effect
  useEffect(() => {
    setCurrentTrack(position[newCursor]);
    let interval;
    if (isSlowing && engine) {
      interval = setInterval(() => {
        if (newCursor !== position.length - 1) {
          newCursor += 1;
          setCurrentPosition(newCursor);
          setCurrentTrack(position[newCursor]);
          return;
        }
      }, speed);

      return () => {
        clearInterval(interval);
      };
    } else if (pause) {
      setCurrentTrack(currentTrack);
      clearInterval(interval);
    }
  }, [isSlowing]);
  return (
    <>
      <MapContainer
        center={{ lat: -1.939662908, lng: 30.055666444 }}
        zoom={isDriver ? 50 : 50}
        zoomControl={true}
        scrollWheelZoom={false}
        style={{ zIndex: 1, width: "71vw" }}
        className=""
      >
        <RoutingMachine setPosition={setPosition} />
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <PhantomBusMarker
              data={currentTrack ?? { lat: -1.978106, lng: 30.044125 }}
              speed={speed}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};
export default UserMap;
