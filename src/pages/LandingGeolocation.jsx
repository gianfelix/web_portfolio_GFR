import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingTokoYog from "./LandingTokoYog";
import LandingTokoSby from "./LandingTokoSby";
import LandingTidakJangkau from "./LandingTidakJangkau";
import { Box, Text } from "@chakra-ui/react";

const LandingGeolocation = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  console.log(userLocation);
  if (!userLocation) {
    return <div>Mengambil lokasi...</div>;
  }

  const inYogjakarta =
    userLocation.latitude >= -8.03 &&
    userLocation.latitude <= -7.65 &&
    userLocation.longitude >= 110.0 &&
    userLocation.longitude <= 110.5;
  const inSurabaya =
  userLocation.latitude >= -8.6 &&
  userLocation.latitude <= -5.85 &&
  userLocation.longitude >= 110.1 &&
  userLocation.longitude <= 114.8;

  return (
    <>
      <Box>
        <Text>Your Coordinate Location:</Text>
        <Text>Latitude: {userLocation.latitude}</Text>
        <Text>Longitude: {userLocation.longitude}</Text>
        <Text>
          Coordinat: {userLocation.latitude}, {userLocation.longitude}
        </Text>
      </Box>
      {inYogjakarta ? (
        <LandingTokoYog />
      ) : inSurabaya ? (
        <LandingTokoSby />
      ) : (
        <LandingTidakJangkau />
      )}
    </>
  );
};

export default LandingGeolocation;
