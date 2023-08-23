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
      label: "Mapbox Satellite",
      value:
        "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_TOKEN"
    },
    // Add more basemap options here
  ];

  const handleBasemapChange = (value) => {
    setSelectedLayer(value);
  };

  const position = [0.505, 100.09]; // Latlong

  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{ zIndex: 0, height: "90vh", width: "100%" }}
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
              marginTop: "80px",
              marginRight: "10px",
              padding: "6px 12px",
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
      <Marker position={position}>
        <Popup>A sample marker on the map.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default WebGIS;
