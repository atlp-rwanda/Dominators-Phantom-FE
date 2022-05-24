import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

export default function Routing() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(-1.9411962, 30.0438899),
        L.latLng(-1.9595371, 30.1194344),
      ],
      routeWhileDragging: true,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
