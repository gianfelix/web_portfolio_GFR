import React from "react";
import { Box, Container, Heading, Text, useColorMode } from "@chakra-ui/react";

const About = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <Box
      bgGradient={
        isDarkMode
          ? "linear(to-r, gray.700, blue.900)"
          : "linear(to-r, gray.100, blue.200)"
      }
      minH={"100vh"}
      py={20}
    >
      <Container
        maxW="container.md"
        p={4}
        rounded="xl"
        boxShadow="xl"
        // border={"1px solid"}
        bg={isDarkMode ? "gray.800" : "gray.100"}
      >
        <Heading mb={4} textAlign="center" fontSize="3xl">
          About Me
        </Heading>
        <Text fontSize="lg">
          Welcome to my portfolio website! I'm passionate about web development
          and creating user-friendly experiences. With several years of
          experience in the field, I've had the opportunity to work on various
          projects that have enriched my skills and knowledge.
        </Text>
        <Text mt={4} fontSize="lg">
          When I'm not coding, you can find me exploring the great outdoors,
          reading, or experimenting with new cooking recipes.
        </Text>
      </Container>
    </Box>
  );
};

export default About;
