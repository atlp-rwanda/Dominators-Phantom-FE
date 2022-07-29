import L from "leaflet";
// import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Popup } from "react-leaflet";
import { LeafletTrackingMarker } from "react-leaflet-tracking-marker";
// import icon from '../../assets/images/busIcon.png';
import { connect, useDispatch, useSelector } from "react-redux";
import Header from "../../components/admin-header/Header";
import Sidebar from "../../components/admin-sidebar/SideBar";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import SimulationController from "./simulationController";
import "./style.css";
import { IoIosSpeedometer } from "react-icons/io";
import UseMap from "./Map";
import { BusState } from "./BusState";
const busIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
  iconSize: [30, 30],
  popupAnchor: [2, -20],
});

function Simulation() {
  const props = BusState();
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main">
        <BreadCrumb icon={<IoIosSpeedometer />} title="LIST OF ROUTE" />
        <div className="content">
          <SimulationController props={{ ...props }} />
          <div>
            <div className="mapView">
              <UseMap props={{ ...props }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Simulation;
