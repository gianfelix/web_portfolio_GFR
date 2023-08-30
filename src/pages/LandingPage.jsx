import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Hero } from "../components/LandingPage/Hero";
import { Skills } from "../components/LandingPage/Skills";

import Education from "../components/LandingPage/Education";

import FooterLanding from "../components/LandingPage/FooterLanding";
import ExpLanding from "../components/LandingPage/ExpLanding";
import CertificatesAwards from "./CertificatesAwards";
import { Projects } from "./Projects";

const LandingPage = () => {
  const [userLocation, setUserLocation] = useState("");

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        // Get user's geolocation using browser's Geolocation API
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Check if user is in Jogja (coordinates are approximate)
            // const isUserInJogja = latitude > -7.733838 && latitude < -7.74 &&
            //   longitude > 110.383752 && longitude < 110.393752;
              // -7.733838, 110.383752
              const isUserInJogja = latitude > -7.80 && latitude < -7.70 &&
              longitude > 110.30 && longitude < 110.50;
            setUserLocation(isUserInJogja ? "Jogja" : "Other");
          },
          (error) => {
            console.error("Error getting geolocation:", error);
            setUserLocation("Other");
          }
        );
        console.log("cek lokasi:" ,navigator.geolocation.getCurrentPosition, userLocation);
      } catch (error) {
        console.error("Geolocation is not supported by this browser.");
        setUserLocation("Other");
      }
    };

    fetchUserLocation();
  }, []);

  return (
    <>
      <Hero userLocation={userLocation}/>
      {/* <Education/> */}
      <Skills />
      <Projects />
      <Box mt={-8}>
        <ExpLanding />
      </Box>
      <CertificatesAwards />
      <FooterLanding />
    </>
  );
};

export default LandingPage;
