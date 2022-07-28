import React, { useState } from "react";

export const BusState = () => {
  const [position, setPosition] = useState([]);
  const [start, setStart] = useState(false);
  const [engine, setEngine] = useState(false);
  const [summary, setSummary] = useState();
  const [isSpeed, setIsSpeed] = useState(false);
  const [isSlowing, setIsSlowing] = useState(false);
  const [speed, setSpeed] = useState(200);
  const [pause, setPause] = useState(false);
  const [resume, setResume] = useState(false);
  const [passengers, setPassengers] = useState(0);
  const [currentCoords, setCurrentCoords] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [freeSeats, setFreeSeats] = useState(0);
  // const [origin, setOrigin] = useState({lat: -1.978106, lng: 30.044125});
  // const [destination, setDestination] = useState({lat: -1.939662908, lng: 30.055666});

  
  return {
    currentPosition,
    currentCoords,
    // destination,
    engine,
    freeSeats,
    isSlowing,
    isSpeed,
    // origin,
    passengers,
    pause,
    position,
    resume,
    // setDestination,
    setCurrentPosition,
    setCurrentCoords,
    setEngine,
    setFreeSeats,
    setIsSlowing,
    setIsSpeed,
    // setOrigin,
    setPassengers,
    setPause,
    setPosition,
    setResume,
    setSpeed,
    setStart,
    setSummary,
    speed,
    start,
    summary,
  }
}
