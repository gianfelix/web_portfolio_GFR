import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Button, Heading, Icon, useColorMode } from "@chakra-ui/react";
import { SiOpenstreetmap, SiGooglestreetview } from "react-icons/si";
import adminKotaTKData from "../../GeoJSON/admin_KotaYK.json";
// import INDONESIA_KAB_0 from "../../GeoJSON/INDONESIA_KAB_0.js";
import indonesia_kab from "../../GeoJSON/indonesia_kab.geojson"

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

        {/* <GeoJSON data={adminKotaTKData} onEachFeature={onEachFeature} /> */}
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


// import React from "react";
// import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

// const geoJsonData = {
//   "type": "FeatureCollection",
//   "name": "access1",
//   "crs": {
//     "type": "name",
//     "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }
//   },
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {
//         "id": 1,
//         "luas": 5574284.66,
//         "pddkLK": "10724",
        
//       },
//       "geometry": {
//         "type": "MultiPolygon",
//         "coordinates": [
//           [ [ [ 98.285522211399666, 4.01752912586106 ], [ 98.288266509757563, 4.019392041358327 ], [ 98.294570694942166, 4.019161408898419 ], [ 98.295873566554491, 4.01937154628166 ], [ 98.297285538360626, 4.019663630971447 ], [ 98.30093403185316, 4.019876496437327 ], [ 98.302768429000082, 4.015672446000034 ], [ 98.307838531000101, 4.015137833000031 ], [ 98.30798486300003, 4.015207523000113 ], [ 98.308131194000069, 4.015277212000017 ], [ 98.308277526, 4.01534690100001 ], [ 98.308408802000116, 4.015414054000059 ], [ 98.306991525000086, 4.014304707000109 ], [ 98.307481218000106, 4.008208112999982 ], [ 98.307608906000013, 4.008098431000056 ], [ 98.307736595, 4.00798875000004 ], [ 98.30786428400009, 4.007879069000113 ], [ 98.307991973000085, 4.007769386000097 ], [ 98.308119661, 4.007659705000082 ], [ 98.308251948000105, 4.007546078000095 ], [ 98.308384233000126, 4.007432452000019 ], [ 98.310641529000023, 4.005672384000052 ], [ 98.311689303000037, 4.005227664000115 ], [ 98.311795628000127, 4.005192956 ], [ 98.31190335900007, 4.005157790000018 ], [ 98.312011090000098, 4.005122624000039 ], [ 98.312146651000035, 4.005063675000047 ], [ 98.312282211000067, 4.005004726000054 ], [ 98.31241985300008, 4.004917407000024 ], [ 98.312557495000107, 4.004830086 ], [ 98.312695137000034, 4.004742766000051 ], [ 98.312832779000047, 4.00465544500002 ], [ 98.312949394000015, 4.004582245000092 ], [ 98.313066010000071, 4.004509043000075 ], [ 98.313182625000039, 4.004435842000058 ], [ 98.31329924, 4.004362640000041 ], [ 98.313407066000053, 4.004279705000018 ], [ 98.31351489300009, 4.004196769 ], [ 98.313622720000041, 4.00411383300006 ], [ 98.313730546000087, 4.004030897000037 ], [ 98.313848306000054, 4.003917184000043 ], [ 98.313966065000031, 4.003803468000049 ], [ 98.314083825000097, 4.003689754000055 ], [ 98.314194013000062, 4.003561574000019 ], [ 98.314304201000112, 4.003433392000071 ], [ 98.314414389, 4.003305212000035 ], [ 98.314524577000057, 4.003177031000087 ], [ 98.31462750200005, 4.003030965000081 ], [ 98.31473042600004, 4.002884899000074 ], [ 98.314833351000019, 4.002738832000068 ], [ 98.314936275, 4.002592766000062 ], [ 98.315039199000097, 4.002446701000055 ], [ 98.315142124, 4.002300634000049 ], [ 98.315201082000073, 4.002147687 ], [ 98.315260040000069, 4.001994741000052 ], [ 98.315278211915057, 4.001947599495069 ], [ 98.315318997000062, 4.001841795000098 ], [ 98.315348349203575, 4.001732235446045 ], [ 98.314665932681152, 3.996574052181313 ], [ 98.312495884942109, 3.996209528750088 ], [ 98.309409342141507, 3.995702414845801 ], [ 98.308176031000045, 3.998805787999986 ], [ 98.306597437000079, 4.001874502000051 ], [ 98.30214568100007, 4.00125766 ], [ 98.298074854000049, 4.004367694000015 ], [ 98.293836752000033, 4.001682409000056 ], [ 98.293777932000054, 4.001546196000065 ], [ 98.293719112000076, 4.001409982000075 ], [ 98.294202031964957, 3.996577378762228 ], [ 98.293398286921501, 3.994368081053058 ], [ 98.291232338926861, 3.995678095007031 ], [ 98.29081998986004, 3.999211829850835 ], [ 98.288430517608589, 4.001794247548759 ], [ 98.284208655179214, 4.005139114755025 ], [ 98.283798875672147, 4.006389838562615 ], [ 98.283322925008179, 4.00849363470767 ], [ 98.285235387469839, 4.0134543292743 ], [ 98.285512077400554, 4.01694420545595 ], [ 98.285522211399666, 4.01752912586106 ] ] ], [ [ [ 98.309976287000055, 4.016216812000044 ], [ 98.309828442000068, 4.016131682000017 ], [ 98.309687568000058, 4.016060577000085 ], [ 98.309976287000055, 4.016216812000044 ] ] ], [ [ [ 98.310462544219988, 4.016492750899827 ], [ 98.310554158000073, 4.016536816000054 ], [ 98.310645771786, 4.016580881103081 ], [ 98.310271979000092, 4.016387072 ], [ 98.310419824000064, 4.016472203000037 ], [ 98.310462544219988, 4.016492750899827 ] ] ]
//         ]
//       }
//     }
//   ]
// };

// const AdminKotaYK = () => {
//   return (
//     <MapContainer
//       center={[4.01752912586106, 98.285522211399666]}
//       zoom={13}
//       style={{ height: "100vh", width: "100%" }}
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//       <GeoJSON data={geoJsonData} />
//     </MapContainer>
//   );
// };

// export default AdminKotaYK;
