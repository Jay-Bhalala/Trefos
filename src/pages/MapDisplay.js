import { Center } from "@chakra-ui/react";
import React, {useState, useRef} from "react";
import {MapContainer as Map, TileLayer} from "react-leaflet";
import osm from "./osm-providers"
import "./css-files/map.css";
import "leaflet/dist/leaflet.css"

function MapDisplay(props) {
  const [center, setCenter] = useState({ lat: 33.040039, lng: -96.644279 });
  const ZOOM_LEVEL = 15;
  const mapRef = useRef();

  return (
    <div className="col">
      <Map 
        center={center}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
      >
        <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
      </Map>
    </div>
  );
}

export default MapDisplay;