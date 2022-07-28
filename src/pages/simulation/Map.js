import React, { useState } from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const UserMap = ({ props }) => {
  //   const {
  //     buses,
  //     dispatch,
  //     setRoute,
  //     route: { origin, destination },
  //   } = props;
  const [position, setPosition] = useState([]);
  const [summary, setSummary] = useState(null);
  const [isDriver, setIsDriver] = useState([]);

  //   const routingProps = { setPosition, setSummary, origin, destination };
  return (
    <>
      {/* {!isDriver ? (
        buses.map((b, i, buses) => (
          <BusActions props={{ ...b, position, dispatch, buses }} key={i} />
        ))
      ) : (
        <BusActions props={{ ...buses, position, isDriver }} />
      )} */}
      <MapContainer
        center={{ lat: -1.939662908, lng: 30.055666444 }}
        zoom={isDriver ? 50 : 10}
        zoomControl={true}
        scrollWheelZoom={false}
        style={{ zIndex: 1, padding: "100px !important" }}
      >
        {/* {origin && destination && <RoutingControl props={routingProps} />} */}
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            {/* {!isDriver ? (
              buses.map((b, i, buses) => (
                <PhantomBusMarker props={{ ...b, isDriver }} key={i} />
              ))
            ) : (
              <PhantomBusMarker props={{ ...buses, isDriver, position }} />
            )} */}
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};
export default UserMap;
