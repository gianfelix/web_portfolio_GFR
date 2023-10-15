import React, { useEffect, useState } from "react";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [gisData, setGisData] = useState([]);
  const [map, setMap] = useState(null); // State untuk menyimpan objek peta

  useEffect(() => {
    // Mengambil data dari server Node.js Anda
    axios
      .get("http://localhost:8000/api/gisdata")
      .then((response) => {
        setGisData(response.data);

        // Inisialisasi peta Leaflet jika belum ada
        if (!map) {
          const newMap = L.map("map").setView([-7, 110], 5); // Ganti dengan koordinat dan zoom awal yang sesuai
          setMap(newMap); // Simpan objek peta ke dalam state
          // Tambahkan layer peta dasar
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(newMap);
        }

        // Tambahkan atau perbarui layer GeoJSON dari data yang diterima
        if (map) {
          if (map.hasLayer("geojsonLayer")) {
            map.removeLayer("geojsonLayer");
          }
          const geojsonLayer = L.geoJSON(response.data, {
            onEachFeature: (feature, layer) => {
              // Tambahkan aksi atau informasi tambahan jika diperlukan
              layer.bindPopup(`Kabupaten: ${feature.properties.kabupaten_}`);
            },
          }).addTo(map);
          geojsonLayer.addTo(map);
        }
      })
      .catch((error) => {
        console.error("Error fetching GIS data:", error);
      });
  }, [map]); // Pastikan efek hanya terjadi jika map berubah

  return (
    <div>
      <h1>Data GIS</h1>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      <ul>
        {gisData.map((item, index) => (
          <li key={index}>
            {item.id} {item.kabupaten_}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapComponent;
