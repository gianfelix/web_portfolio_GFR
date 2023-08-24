import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Hero } from "../components/LandingPage/Hero";
import { Skills } from "../components/LandingPage/Skills";
import { Projects } from "../components/LandingPage/Projects";
import Education from "../components/LandingPage/Education";

import FooterLanding from "../components/LandingPage/FooterLanding";
import ExpLanding from "../components/LandingPage/ExpLanding";

const LandingPage = () => {
  return (
    <>
      <Hero />
      {/* <Education/> */}
      <Skills />
      <Box mt={-8}>
        <ExpLanding />
      </Box>
      <Projects />
      <FooterLanding />
    </>
  );
};

export default LandingPage;
