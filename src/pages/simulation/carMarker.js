import React, { useEffect, useState } from "react";
import { LeafletTrackingMarker } from "react-leaflet-tracking-marker";
import L from "leaflet";

const icon = L.icon({
  iconSize: [20, 25],
  popupAnchor: [2, -20],
  iconUrl: 'https://res.cloudinary.com/avengersphantom/image/upload/v1656445298/Images/phantomIconCar_flohca.png',
});

export const PhantomBusMarker = ({ props }) => {
  const {currentCoords, speed, pause, resume, isSlowing, isSpeed, isDriver} = props;
  const { lat, lng } = currentCoords ?? { lat: -1.978106, lng: 30.044125 };
  const [prevPos, setPrevPos] = useState([lat, lng]);

  useEffect(() => {
    if (prevPos[1] !== lng && prevPos[0] !== lat) setPrevPos([lat, lng]);
  }, [lat, lng, prevPos, pause, speed, resume, isSlowing, isSpeed]);

  return (
    <LeafletTrackingMarker
      icon={icon}
      position={[lat, lng]}
      previousPosition={prevPos}
      duration={speed}
      keepAtCenter={isDriver ?? false}
      rotationOrigin="center"
      autoPanPadding={[600, 600]}
      draggable={true}
    />
  );
};
