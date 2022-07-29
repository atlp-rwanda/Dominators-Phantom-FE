import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
const Routing = (props) => {
  const {
    fromLatitude,
    fromLongitude,
    toLatitude,
    toLongitude,
    setIsDistance,
  } = props;
  const map = useMap();
  useEffect(() => {
    if (!map) return;
    const routingControl = L.Routing.control({
      lineOptions: {
        styles: [
          { color: "hsl(166deg 100% 16% / 66%)", opacity: 1, weight: 10 },
        ],
      },
      waypoints: [
        L.latLng(fromLatitude, fromLongitude),
        L.latLng(toLatitude, toLongitude),
      ],
      routeWhileDragging: true,
    }).addTo(map);
    routingControl.on("routesfound", function (e) {
      var routes = e.routes;
      var summary = routes[0].summary;
      setIsDistance(summary.totalDistance / 1000);
    });
    return () => map.removeControl(routingControl);
  });
  return null;
};
export default Routing;
