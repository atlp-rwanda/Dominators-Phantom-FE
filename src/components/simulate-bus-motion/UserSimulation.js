import L from "leaflet";
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import BusTracker from "./BusTracker";
import RoutingMachine from "./RoutingMachine";
import { Icon } from "@iconify/react";
import UserNavbar from "../Navbars/UserNavbar";
import Footer from "../Footer/Footer";
import "./style.css";
const UserSimulation = () => {
  const options = [
    {
      name: "Nyabugogo",
      coordinates: { lat: -1.936671, lng: 30.053524 },
    },
    {
      name: "Kimironko",
      coordinates: { lat: -1.9362376, lng: 30.130060100000037 },
    },
    {
      name: "Nyanza",
      coordinates: { lat: -2.0007591860478864, lng: 30.09273823239436 },
    },
    {
      name: "Remera",
      coordinates: { lat: -1.9585082793047428, lng: 30.119018946877382 },
    },
    {
      name: "Down-Town",
      coordinates: { lat: -1.9433247022379925, lng: 30.057306224487732 },
    },
  ];

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const rMachine = useRef();
  const selectOne = useRef();
  const selectDes = useRef();
  const [position, setposition] = useState(null);

  const handleRoute = (e) => {
    e.preventDefault();
    options.filter((option) => {
      const startingPoint = option.name === e.target.origin.value;
      if (startingPoint) {
        setOrigin(option.coordinates);
      }
    });
    options.filter((option) => {
      const endingPoint = option.name === e.target.destination.value;
      if (endingPoint) {
        setDestination(option.coordinates);
      }
    });
  };

  let cursor = 0;

  const [currentTrack, setcurrentTrack] = useState(null);

  useEffect(() => {
    if (origin && destination && rMachine.current) {
      rMachine.current.setWaypoints([L.latLng(origin), L.latLng(destination)]);
    }
  }, [origin, destination]);

  const handlestart = () => {
    rMachine.current.on("routeselected", (e) => {
      window.clearInterval();
      const coor = e.route.coordinates;
      alert("Route selected");
      setcurrentTrack(coor[cursor]);
      setInterval(() => {
        if (cursor === coor.length - 1) {
          setTimeout(() => {
            cursor = 0;
            setcurrentTrack(coor[cursor]);
          }, 5000);
        }
        cursor++;
        setcurrentTrack(coor[cursor]);
      }, 2000);
    });
  };
  const handlestop = () => {
    rMachine.current.off("routeselected", (e) => {
      window.clearInterval();
      const coor = e.route.coordinates;
      alert("Route selected");
      setcurrentTrack(coor[cursor]);
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const optionNames = selectDes.current.options;
    Object.keys(optionNames).forEach((key) => {
      const option = optionNames[key];
      if (option.value === value) {
        option.disabled = true;
      } else {
        option.disabled = false;
      }
    });
  };

  const handleChangeDes = (e) => {
    const { value } = e.target;
    const optionNames = selectOne.current.options;
    Object.keys(optionNames).forEach((key) => {
      const option = optionNames[key];
      if (option.value === value) {
        option.disabled = true;
      } else {
        option.disabled = false;
      }
    });
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const userLocation = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setposition(userLocation);
      });
    }
  }, []);
  return (
    <>
      <UserNavbar />
      <section className="section">
        <div className="main-head">
          <h1 className="title">Navigation Map</h1>
        </div>

        <div className="level">
          <div className="mapView">
            <MapContainer
              center={{ lat: -1.936671, lng: 30.053524 }}
              zoom={13}
              zoomControl={false}
              className="ly"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <ZoomControl position="topright" />
              {origin && destination && currentTrack ? (
                <BusTracker data={currentTrack} />
              ) : (
                ""
              )}

              {origin && destination ? (
                <RoutingMachine
                  ref={rMachine}
                  origin={origin}
                  destination={destination}
                  userPosition={position}
                />
              ) : (
                ""
              )}
            </MapContainer>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserSimulation;
