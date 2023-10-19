import React from "react";
import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";
import { Box, Heading } from "@chakra-ui/react";
import { LegendWebGIS3 } from "./LegendWebGIS3";

const WebGIS3 = () => {
  const wmsUrl = "http://localhost:8080/geoserver/Faskes_kota_YK/wms";

  const layers = [
    "Faskes_kota_YK:admin_kota_yk",
    "Faskes_kota_YK:keterjangkauan_faskes",
    "Faskes_kota_YK:Jalan_ALL_Lapangan",
    "Faskes_kota_YK:faskes",
  ].join(",");

  return (
    <MapContainer
      center={[-7.803, 110.375873]}
      zoom={14}
      style={{ zIndex: 0, height: "93vh", width: "100%" }}
    >
      <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <WMSTileLayer
        layers={layers}
        url={wmsUrl}
        transparent={true}
        format="image/png"
        attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
      />
      <LegendWebGIS3/>
    </MapContainer>
  );
};

export default WebGIS3;
