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
    {/* <a title="GDPR-compliant Web Analytics" href="https://clicky.com/101440861"><img alt="Clicky" src="//static.getclicky.com/media/links/badge.gif" border="0" /></a>
<script async data-id="101440861" src="//static.getclicky.com/js"></script> */}

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
