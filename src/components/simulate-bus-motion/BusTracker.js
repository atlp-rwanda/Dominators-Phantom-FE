import L from 'leaflet';
// import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Popup } from 'react-leaflet';
import { LeafletTrackingMarker } from 'react-leaflet-tracking-marker';
// import icon from '../../assets/images/busIcon.png';
import { connect, useDispatch, useSelector } from 'react-redux';

const busIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
    iconSize: [30, 30],
    popupAnchor: [2, -20]
});

function BusTracker({ data }) {
    const { lat, lng } = data;
    const [prevPos, setPrevPos] = useState([lat, lng]);
    const Dispatch = useDispatch();
    const seats = useSelector(state => state.PassengerReducer.value)
    useEffect(() => {
        if (prevPos[1] !== lng && prevPos[0] !== lat) setPrevPos([lat, lng]);
    }, [lat, lng, prevPos]);

    return (
        <LeafletTrackingMarker
            id="leaflet"
            icon={busIcon}
            position={[lat, lng]}
            previousPosition={prevPos}
            duration={1000}
        >
            <Popup>
                Bus: Coaster, RAC508E <br /> Remaining seats: {seats} <br /> Driver:
            </Popup>
        </LeafletTrackingMarker>
    );
}

export default BusTracker;