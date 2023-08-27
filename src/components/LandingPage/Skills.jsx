import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaDesktop,
  FaSatellite,
} from "react-icons/fa";
import { TbDrone } from "react-icons/tb";

export const Skills = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const skillsData = [
    {
      icon: FaCode,
      title: "Front-end Development",
      description: "HTML, CSS, JavaScript and React JS",
    },
    {
      icon: FaDatabase,
      title: "Back-end Development",
      description: "Node.js, Express JS and REST API",
    },
    {
      icon: FaServer,
      title: "Database",
      description: "MongoDB, MySQL and PostGIS",
    },
    { icon: FaDesktop, title: "GIS Analyst", description: "ArcGIS and QGIS" },
    {
      icon: FaSatellite,
      title: "Remote Sensing Analyst",
      description: "ENVI, Agisoft, Google Earth Engine",
    },
    {
      icon: TbDrone,
      title: "Drone Operator",
      description: "DJI, Pix4D, and Drone Deploy",
    },
  ];

  return (
    <Box p={6} bg={isDarkMode ? "gray.800" : "white"} borderRadius="md">
      <Heading
        fontSize={{ base: "2xl", md: "4xl" }}
        mb={5}
        textAlign="center"
        fontWeight="bold"
      >
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color={isDarkMode ? "white" : "black"}
          letterSpacing="wide"
          textTransform="uppercase"
        >
          MY SKILLS
        </Text>
      </Heading>
      <SimpleGrid
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        columns={{ base: 1, xl: 3 }}
        spacing={10}
        // spacingX={{ base: 5, xl: 10 }}
      >
        {skillsData.map((skill) => (
          <Flex
            key={skill.title}
            p={5}
            // maxW={"md"}
            minW={{ base: "450px", md: "600px", xl: "450px" }}
            bg={isDarkMode ? "blue.700" : "blue.100"}
            borderRadius="lg"
            boxShadow="md"
            flexDirection="column"
            align="center"
            justify="center"
            _hover={{
              transform: "translateY(-5px)",
              bg: isDarkMode ? "blue.800" : "blue.200",
            }}
          >
            <Box
              as={skill.icon}
              fontSize={{ base: "2xl", md: "4xl" }}
              color={isDarkMode ? "blue.300" : "blue.600"}
              mb={3}
            />
            <Heading fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
              {skill.title}
            </Heading>
            <Text mt={1} textAlign="center" fontSize="md" px={"15%"}>
              {skill.description}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
