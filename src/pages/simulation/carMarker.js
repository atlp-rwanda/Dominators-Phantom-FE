import React, { useEffect, useState } from "react";
import { LeafletTrackingMarker } from "react-leaflet-tracking-marker";
import L from "leaflet";

const icon = L.icon({
  iconSize: [40, 25],
  popupAnchor: [2, -20],
  iconUrl:
    "https://res.cloudinary.com/avengersphantom/image/upload/v1656445298/Images/phantomIconCar_flohca.png",
});

export const PhantomBusMarker = (props) => {
  const { lat, lng } = props.data;
  const [prevPos, setPrevPos] = useState([lat, lng]);

  useEffect(() => {
    if (prevPos[1] !== lng && prevPos[0] !== lat) setPrevPos([lat, lng]);
  }, [lat, lng]);

  return (
    <LeafletTrackingMarker
      icon={icon}
      position={[lat, lng]}
      previousPosition={prevPos}
      duration={props.speed}
      keepAtCenter={true}
      rotationOrigin="center"
      autoPanPadding={[600, 600]}
      draggable={true}
    />
  );
};
