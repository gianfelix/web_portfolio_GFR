import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Spinner,
  useColorMode,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const ExpLanding = () => {
  const { colorMode } = useColorMode();
  const isDarkmode = colorMode === "dark";

  const navigate = useNavigate();

  const isUnderMaintenance = false;

  if (isUnderMaintenance) {
    return (
      <>
        <Flex justify="center" align="center" minH="80vh">
          <Text mr={5} fontSize="xl">
            Experiences Page is Under Maintenance
          </Text>
          <Spinner thickness="4px" size="xl" color="brand.500" />
        </Flex>
      </>
    );
  }

  return (
    <Box
      p={4}
      bgGradient={
        isDarkmode
          ? "linear(to-b, gray.800, blue.900)"
          : "linear(to-b, white, blue.300)"
      }
      align={"center"}
      pb={8}
    >
      <Box minW={"65%"} maxW={"70%"} align={"left"}>
        <Flex direction="column" align="center" mt={8}>
          <Heading
            size="xl"
            mb={5}
            color={isDarkmode ? "white" : "black"}
            _hover={{
              transform: "scale(1.1)",
            }}
            transition={"transform 0.3s ease-in-out"}
          >
            Experience
          </Heading>

          <Stack spacing={8}>
            {/* Experience Entry 0 */}
            <Box
              p={6}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="xl"
              boxShadow={"md"}
              border={"1px"}
              borderColor={isDarkmode ? "white" : "blue.300"}
              _hover={{
                transform: "translateY(-5px)",
                bg: isDarkmode ? "blue.800" : "blue.200",
              }}
              transition={"all 0.3s ease"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2025 - Now
              </Text>
              <Heading size="lg" mb={2}>
                Geodetic Officer, PT Kilang Pertamina Internasional
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Data collection using digital mapping, photogrammetry, and
                  remote sensing.
                </ListItem>
                <ListItem>
                  Mapping and monitoring of company land and building assets.
                </ListItem>
                <ListItem>
                  Evaluate and process the results of company land and building
                  asset mapping.
                </ListItem>
                <ListItem>
                  Monitor inventory and data updating activities for assets and
                  buildings.
                </ListItem>
                <ListItem>
                  Conduct physical checks of land and building asset data.
                </ListItem>
                <ListItem>
                  Monitor the procurement of buffer zone land.
                </ListItem>
                <ListItem>
                  Assist in developing and managing Company Archive Data.
                </ListItem>
                <ListItem>
                  Assisting with and monitoring the matching and research of
                  company archive data.
                </ListItem>
                <ListItem>
                  Assisting with the inventory of company archive data.
                </ListItem>
              </UnorderedList>
            </Box>

            {/* Experience Entry 0 */}
            <Box
              p={6}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="xl"
              boxShadow={"md"}
              border={"1px"}
              borderColor={isDarkmode ? "white" : "blue.300"}
              _hover={{
                transform: "translateY(-5px)",
                bg: isDarkmode ? "blue.800" : "blue.200",
              }}
              transition={"all 0.3s ease"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2024
              </Text>
              <Heading size="lg" mb={2}>
                Freelance GIS, Drone, and Developer, SinauGIS Consultant
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Provide hands-on training on the use of multi-rotor drones for
                  mapping and processing aerial drone data using Agisoft
                  Metashape
                </ListItem>
                <ListItem>
                  Provide training in the use of Geographic Information Systems
                  (GIS) at basic to advanced levels
                </ListItem>
                <ListItem>
                  Developing a disaster risk management system application,
                  namely the "SIPANDU MERAPI" application based on android
                  technology
                </ListItem>
                <ListItem>
                  Developing "SINTARA" application, Central Halmahera Regency
                  Infrastructure and Spatial Information System based on digital
                  map
                </ListItem>
                <ListItem>
                  Conducting disaster risk assessment (KRB) and spatial data
                  processing for the production of KRB maps in Kudus Regency
                </ListItem>
              </UnorderedList>
            </Box>
            {/* Experience Entry 0 */}
            <Box
              p={6}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="xl"
              boxShadow={"md"}
              border={"1px"}
              borderColor={isDarkmode ? "white" : "blue.300"}
              _hover={{
                transform: "translateY(-5px)",
                bg: isDarkmode ? "blue.800" : "blue.200",
              }}
              transition={"all 0.3s ease"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2023
              </Text>
              <Heading size="lg" mb={2}>
                GIS Specialist, Carbon Ethics
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Build and organize geodatabase of required spatial data
                </ListItem>
                <ListItem>
                  Analyze spatial data related to ecosystem rehabilitation
                </ListItem>
                <ListItem>
                  Support the implementation of ecosystem rehabilitation in
                  reducing carbon emissions in the field of GIS
                </ListItem>
              </UnorderedList>
            </Box>

            {/* Experience Entry 1 */}
            <Box
              p={6}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="xl"
              boxShadow={"md"}
              border={"1px"}
              borderColor={isDarkmode ? "white" : "blue.300"}
              _hover={{
                transform: "translateY(-5px)",
                bg: isDarkmode ? "blue.800" : "blue.200",
              }}
              transition={"all 0.3s ease"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2022
              </Text>
              <Heading size={{ base: "md", md: "lg" }} mb={2}>
                Individual Consultant, Kantor Wilayah BPN Kalimantan Timur
              </Heading>
              <UnorderedList pl={2} fontSize={{ base: "sm", md: "md" }}>
                <ListItem>
                  Facilitated the Implementation of Agrarian Reform at the
                  Provincial Level.
                </ListItem>
                <ListItem>
                  Coordinated the Provision of TORA Land Data in the Context of
                  Asset Management for East Kalimantan Province.
                </ListItem>
                <ListItem>
                  Responsible for Processing GIS-based Spatial Land Data.
                </ListItem>
                <ListItem>
                  Developed a Spatial Land Model based on Agrarian Reform and
                  GIS.
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
          <Button
            mt={5}
            onClick={() => navigate("/experiences")}
            colorScheme={colorMode === "light" ? "blue" : "blue"}
            // color={colorMode === "light" ? "gray.100" : "black"}
            fontSize={{ base: "md", md: "lg" }}
          >
            Show More My Experiences
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ExpLanding;
