import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import axios from "axios";

const WebGIS4 = () => {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/geoserver/webgis_try/wms?service=WMS&version=1.1.0&request=GetMap&layers=webgis_try%3APL_2020_dissolve_projct&bbox=94.972,-11.008,141.020,6.076&width=768&height=330&srs=EPSG%3A4326&styles=&format=geojson"
      )
      .then((response) => {
        console.log("GeoJSON data:", response.data);
        setGeojsonData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching GeoJSON data:", error);
      });
  }, []);

  return (
    <MapContainer
      center={[-3.490807, 117.746622]}
      zoom={5}
      style={{ height: "94vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {geojsonData && (
        <GeoJSON
          data={geojsonData}
          style={{ fillColor: "green", color: "black" }}
        />
      )}
      
    </MapContainer>
  );
};

export default WebGIS4;
