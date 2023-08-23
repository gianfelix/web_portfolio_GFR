import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Hero } from "../components/LandingPage/Hero";
import { Skills } from "../components/LandingPage/Skills";
import { Projects } from "../components/LandingPage/Projects";
import Education from "../components/LandingPage/Education";
import Experience from "./Experience";
import FooterLanding from "../components/LandingPage/FooterLanding";

const LandingPage = () => {
  return (
    <>
    <Hero/>
    {/* <Education/> */}
    <Skills/>
    <Experience/>
    <Projects/>
    <FooterLanding/>
    </>
  );
};

export default LandingPage;
