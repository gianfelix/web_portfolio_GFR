import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Button, Heading, Icon, useColorMode } from "@chakra-ui/react";
import { SiOpenstreetmap, SiGooglestreetview } from "react-icons/si";
import adminKotaTKData from "../../GeoJSON/admin_KotaYK.json";

const AdminKotaYK = () => {
  const { colorMode } = useColorMode(); // Get the current color mode
  const isDarkMode = colorMode === "dark";

  const position = [-7.801, 110.373];
  const [selectedLayer, setSelectedLayer] = useState("streets");

  const handleBasemapChange = (layer) => {
    setSelectedLayer(layer);
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: () => {
        layer.setStyle({
          weight: 1,
          color: "#E53E3E",
          fillOpacity: 0.7,
        });
      },
      mouseout: () => {
        layer.setStyle({
          weight: 3,
          color: "#3388ff",
          fillOpacity: 0.2,
        });
      },
    });
    layer.bindPopup(feature.properties.NAMOBJ);
  };

  return (
    <Box
      p={5}
      minH="100%"
      bg={isDarkMode ? "gray.700" : "gray.300"}
      borderRadius={"3xl"}
      boxShadow="xl"
      align="center"
    >
      <Heading align="center" mb={4} fontSize="2xl">
        Kota Yogyakarta, Daerah Istimewa Yogyakarta
      </Heading>

      <MapContainer
        center={position}
        zoom={13}
        style={{
          zIndex: 0,
          height: "700px",
          width: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
        />

        <GeoJSON data={adminKotaTKData} onEachFeature={onEachFeature} />

        {/* <GeoJSON data={adminKotaTKData} /> */}

        {selectedLayer === "streets" && (
          <TileLayer
            url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
          />
        )}

        {selectedLayer === "satellite" && (
          <TileLayer
            url={`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`}
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
            attribution="&copy; Google"
          />
        )}

        {selectedLayer === "gstreet" && (
          <TileLayer
            url={`https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}`}
            attribution="&copy; Google"
          />
        )}
      </MapContainer>

      <Box mt={4} textAlign="center">
        <Button
          colorScheme={selectedLayer === "streets" ? "blue" : "gray"}
          onClick={() => handleBasemapChange("streets")}
        >
          <Icon mr={1} as={SiOpenstreetmap} />
          OpenStreetMap
        </Button>
        <Button
          ml={2}
          colorScheme={selectedLayer === "gstreet" ? "blue" : "gray"}
          onClick={() => handleBasemapChange("gstreet")}
        >
          <Icon mr={1} as={SiGooglestreetview} />
          Google Street
        </Button>
        <Button
          ml={2}
          colorScheme={selectedLayer === "satellite" ? "blue" : "gray"}
          onClick={() => handleBasemapChange("satellite")}
        >
          <Icon mr={1} as={SiGooglestreetview} />
          Google Satellite
        </Button>
      </Box>
    </Box>
  );
};

export default AdminKotaYK;
