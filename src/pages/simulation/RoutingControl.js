import React, { useState } from "react";
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useSelector } from "react-redux";

const createRoutineMachineLayer = ({ setPosition }) => {
  // const {setPosition, setSummary, origin, destination} = props;
  // const route = useSelector((state) => state);
  // console.log("state", route.testRouteReducer.route.message[0].from);
  const [origin, setOrigin] = useState({ lat: -1.978106, lng: 30.044125 });
  const [destination, setDestination] = useState({
    lat: -1.939662908,
    lng: 30.055666,
  });

  const instance = L.Routing.control({
    position: "bottomleft",
    waypoints: [origin, destination],
    lineOptions: {
      styles: [
        {
          color: "green",
          weight: 10,
          border: "1px solid #000",
        },
      ],
    },
    show: false,
  });

  instance.on("routesfound", function (e) {
    const routes = e.routes[0].coordinates;
    const coordinatesValues = Object.values(routes);
    const summary = e.routes[0].summary;

    let coordinates = [];
    for (let i = 0; i < coordinatesValues.length; i++) {
      coordinates.push({
        lat: coordinatesValues[i].lat,
        lng: coordinatesValues[i]?.lng,
      });
    }
    setPosition([...coordinates]);
    // setSummary(summary);
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
