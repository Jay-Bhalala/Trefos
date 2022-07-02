import React from "react";

import L from "leaflet";
import { MapContainer as Map, Marker, TileLayer } from "react-leaflet";
import osm from "../osm-providers";
import "leaflet/dist/leaflet.css";
import "./StaticMap.css";

const StaticMap = (props) => {
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  });

  let lat = props.lat1;
  let lng = props.lng1;

  const marker = { lat, lng };

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2> </h2>

          <div className="col">
            <Map
              center={marker}
              zoom={12}
              style={{ width: "100%", height: "16rem" }}
            >
              <TileLayer url={osm.maptiler.url} />
              <Marker position={[lat, lng]}></Marker>
            </Map>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticMap;
