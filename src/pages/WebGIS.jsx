import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { Box, Button, Heading } from "@chakra-ui/react";

import AdminKotaYK from "../components/WebGIS/AdminKotaYK";

const WebGIS = () => {

  return (
    <Box px={5} py={5}>
      <AdminKotaYK/>
    </Box>
  );
};

export default WebGIS;
