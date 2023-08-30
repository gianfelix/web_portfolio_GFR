import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const WebGIS = () => {
  const [selectedLayer, setSelectedLayer] = useState(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  );

  const basemapOptions = [
    {
      label: "OpenStreetMap",
      value: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    },
    {
      label: "Google Satellite",
      value:
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    },
   
    // Add more basemap options here
  ];

  const handleBasemapChange = (value) => {
    setSelectedLayer(value);
  };

  const position = [-7.101, 110.09]; // Latlong

  return (
    <MapContainer
      center={position}
      zoom={8}
      style={{ zIndex: 0, height: "93vh", width: "100%" }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 1000, // Increase z-index to bring buttons to the top
          display: "flex",
        }}
      >
        {basemapOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleBasemapChange(option.value)}
            style={{
              marginTop: "835px",
              marginRight: "10px",
              padding: "10px 12px",
              border: "none",
              backgroundColor:
                selectedLayer === option.value ? "#3182CE" : "#63B3ED",
              color: "white",
              cursor: "pointer",
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
      <TileLayer
        url={selectedLayer}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <Marker position={position}>
        <Popup>A sample marker on the map.</Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default WebGIS;
