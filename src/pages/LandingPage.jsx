import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Hero } from "../components/LandingPage/Hero";
import { Skills } from "../components/LandingPage/Skills";

import Education from "../components/LandingPage/Education";

import FooterLanding from "../components/LandingPage/FooterLanding";
import ExpLanding from "../components/LandingPage/ExpLanding";
import CertificatesAwards from "./CertificatesAwards";
import { Projects } from "./Projects";

const LandingPage = () => {
  return (
    <>
      <Hero />
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
