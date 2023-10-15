import React from 'react';
import { MapContainer, TileLayer, WMSTileLayer, Popup } from 'react-leaflet';

const WebGIS2 = () => {
  return (
    <MapContainer center={[-3, 117]} zoom={6} style={{ zIndex: 0, height: '93vh', width: '100%' }}>
      <TileLayer
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <WMSTileLayer
        layers="Test_shp:INDONESIA_KAB"
        url="http://localhost:8080/geoserver/Test_shp/wms?"
        transparent={true}
        format="image/png"
        attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
      >
        
      </WMSTileLayer>
    </MapContainer>
  );
};

export default WebGIS2;
