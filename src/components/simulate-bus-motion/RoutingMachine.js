import { createControlComponent } from "@react-leaflet/core";
import * as L from "leaflet/dist/leaflet";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import currentIcon from "../../assets/images/busIcon.png";

const createRoutingMachineLayer = ({ origin, destination, userPosition }) => {
  const map = useMap();
  console.log(origin, destination);

  const instance = L.Routing.control({
    waypoints: [L.latLng(origin), L.latLng(destination)],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }],
    },
    show: true,
    addWaypoints: true,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: false,
    showAlternatives: false,
  });

  const locationIcon = L.icon({
    iconUrl: currentIcon,
    iconSize: [25, 35],
  });
  if (userPosition) {
    L.marker(userPosition, { icon: locationIcon })
      .addTo(map)
      .bindPopup("Current location");
  }

  return instance;
};

const RoutingMachine = createControlComponent(createRoutingMachineLayer);

export default RoutingMachine;
