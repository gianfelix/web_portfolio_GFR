import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Divider,
  Spinner,
  Card,
  CardHeader,
  CardBody,
  useColorMode,
  Image,
} from "@chakra-ui/react";

const CertificatesAwards = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const isUnderMaintenance = false;

  if (isUnderMaintenance) {
    return (
      <Flex justify="center" align="center" minH="80vh">
        <Text mr={5} fontSize="xl">
          Certificate & Awards Page is Under Maintenance
        </Text>
        <Spinner thickness="4px" size="xl" color="brand.500" />
      </Flex>
    );
  }

  return (
    <Box p={3}>
      <Flex direction="column" align="center" mt={8}>
        <Heading size="xl" color={isDarkMode ? "white" : "black"}
        _hover={{
          transform: "scale(1.1)",
        }}
        transition={"transform 0.3s ease-in-out"}
        >
          Certificates & Awards
        </Heading>
        <Divider
          mt={4}
          mb={"25px"}
          border={"2px"}
          borderRadius={"full"}
          w={"75%"}
        />
        <Stack
          spacing={6}
          w={{ base: "80%", md: "100%" }}
          maxW={"container.xl"}
          mb={5}
        >
          <Card
            bg={isDarkMode ? "blue.900" : "blue.100"}
            _hover={{
              borderColor: isDarkMode ? "white" : "black",
              borderWidth: 1,
              bg: isDarkMode ? "blue.800" : "blue.200",
            }}
          >
            <CardHeader>
              <Heading size={{ base: "md", md: "lg" }}>
                Certificate of Completion - Bootcamp Web Development
              </Heading>
            </CardHeader>
            <CardBody fontSize={{ base: "sm", md: "md" }}>
              <Text>
                Organized By Purwadhika Digital Technology School
              </Text>
              <Text>Date: May 2023</Text>
              <Text mt={2} align={"justify"}>
              The Fullstack Web Development Bootcamp organized by Purwadhika Technology School was held for 3 months. During the bootcamp the material obtained is: programming basics, Javascript language, HTML, SQL, CSS, React.js framework, UI chakra styling, frontend, backend, REST API, fullstack web, exercises, mini projects, and others. Of course, the experience during the bootcamp helped me to increase my programming language skills for web development
              </Text>
            </CardBody>
          </Card>
          <Card
            bg={isDarkMode ? "blue.900" : "blue.100"}
            _hover={{
              borderColor: isDarkMode ? "white" : "black",
              borderWidth: 1,
              bg: isDarkMode ? "blue.800" : "blue.200",
            }}
          >
            <CardHeader>
              <Heading size={{ base: "md", md: "lg" }}>
                Remote Pilot Certificate
              </Heading>
            </CardHeader>
            <CardBody fontSize={{ base: "sm", md: "md" }}>
              <Text>
                Organized By Indonesian Drone Pilots Association (APDI)
              </Text>
              <Text>Date: June 2022</Text>
              <Text mt={2} align={"justify"}>
                The Remote Pilot Certificate held by Asosiasi Pilot Drone
                Indonesia (APDI) is an official recognition of competence and
                expertise in operating drones safely and effectively. This
                certification program is designed to provide training and
                assessment of individuals who wish to become skilled and
                professional drone pilots in accordance with flight safety
                standards set by civil aviation authorities.
              </Text>
            </CardBody>
          </Card>
          <Card
            bg={isDarkMode ? "blue.900" : "blue.100"}
            _hover={{
              borderColor: isDarkMode ? "white" : "black",
              borderWidth: 1,
              bg: isDarkMode ? "blue.800" : "blue.200",
            }}
          >
            <CardHeader>
              <Heading size={{ base: "md", md: "lg" }}>
                Presenter at the 33rd National Student Scientific Week (PIMNAS
                33)
              </Heading>
            </CardHeader>
            <CardBody fontSize={{ base: "sm", md: "md" }}>
              <Text>Organized by the Ministry of Education and Culture</Text>
              <Text>Date: December 2020</Text>
              <Text mt={2} align={"justify"}>
                The 33rd National Student Scientific Week (PIMNAS) is a
                prestigious event in Indonesia that is annually held to
                accommodate and showcase excellent research results from
                university students throughout Indonesia. The event encourages
                collaboration, innovation and competition among students from
                various disciplines.
              </Text>
            </CardBody>
          </Card>
          <Card
            bg={isDarkMode ? "blue.900" : "blue.100"}
            _hover={{
              borderColor: isDarkMode ? "white" : "black",
              borderWidth: 1,
              bg: isDarkMode ? "blue.800" : "blue.200",
            }}
          >
            <CardHeader>
              <Heading size={{ base: "md", md: "lg" }}>
                Finalist in the 2nd Geoinnovation PetaKita Geospatial
                Information Agency Competition
              </Heading>
            </CardHeader>
            <CardBody fontSize={{ base: "sm", md: "md" }}>
              <Text>
                Organized by by the Geospatial Information Agency (BIG)
              </Text>
              <Text>Date: October 2019</Text>
              <Text mt={2} align={"justify"}>
                The 2nd Geoinnovation PetaKita Geospatial Information Agency
                Competition is a competition held by the Geospatial Information
                Agency (BIG) to promote the use of geospatial technology in
                various innovative and impactful ways. The competition serves as
                a platform for students, researchers, and geospatial enthusiasts
                to showcase their creativity and problem-solving skills in
                utilizing geospatial data, tools, and technologies.
              </Text>
            </CardBody>
          </Card>
        </Stack>
      </Flex>
    </Box>
  );
};

export default CertificatesAwards;
