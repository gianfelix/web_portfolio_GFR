import React from "react";
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
} from "@chakra-ui/react";

const Experience = () => {
  const { colorMode } = useColorMode();
  const isDarkmode = colorMode === "dark";

  // Replace this state with your actual state logic for under maintenance
  const isUnderMaintenance = false; // Set to false since you have provided experience entries

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
    <Box p={4} bg={isDarkmode ? "gray.800" : "white"} align={"center"}>
      <Box minW={"70%"} maxW={"85%"} align={"left"}>
        <Flex direction="column" align="center" mt={8}>
          <Heading size="xl" mb={10} color={isDarkmode ? "white" : "black"}>
            Experience
          </Heading>

          <Stack spacing={8}>
            {/* Experience Entry 0 */}
            <Box
              p={7}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="md"
              boxShadow={"md"}
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
              p={7}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="md"
              boxShadow={"md"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2022
              </Text>
              <Heading size="lg" mb={2}>
                Individual Consultant, Kantor Wilayah BPN Kalimantan Timur
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Facilitated the Implementation of Agrarian Reform at the
                  Provincial Level
                </ListItem>
                <ListItem>
                  Coordinated the Provision of TORA Land Data in the Context of
                  Asset Management for East Kalimantan Province
                </ListItem>
                <ListItem>
                  Responsible for Processing GIS-based Spatial Land Data
                </ListItem>
                <ListItem>
                  Developed a Spatial Land Model based on Agrarian Reform and
                  GIS
                </ListItem>
              </UnorderedList>
            </Box>
            {/* Experience Entry 2 */}
            <Box
              p={7}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="md"
              boxShadow={"md"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2021
              </Text>
              <Heading size="lg" mb={2}>
                Drone Operator, Enumerator of the Faculty of Forestry,
                Universitas Gadjah Mada
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Implementing Monitoring of Mangrove Rehabilitation Areas in
                  the Riau Archipelago through Aerial Mapping Using a Multirotor
                  Drone
                </ListItem>
                <ListItem>
                  Geotagging photo data processing survey results using ArcGIS
                  software
                </ListItem>
              </UnorderedList>
            </Box>
            {/* Experience Entry 3 */}
            <Box
              p={7}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="md"
              boxShadow={"md"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2021
              </Text>
              <Heading size="lg" mb={2}>
                Assistant Drone Mapping Trainer, SinauGIS Consultant
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Assisting lead trainers in delivering content and conducting
                  hands-on practice sessions using Mission Planner, multirotor
                  drones, and Agisoft software for both students and workers.
                </ListItem>
              </UnorderedList>
            </Box>
            {/* Experience Entry 4 */}
            <Box
              p={7}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="md"
              boxShadow={"md"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2021
              </Text>
              <Heading size="lg" mb={2}>
                GIS Operator, SinauGIS Consultant
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Responsible for extracting geographical features from remote
                  sensing imagery for the preparation of the Banjarasri Village
                  Land Use Plan Map in Kulonprogo Regency, DI Yogyakarta.
                </ListItem>
                <ListItem>
                  Implemented participatory mapping for the government of
                  Banjarasri Village during the Land Use Plan Map preparation.
                </ListItem>
              </UnorderedList>
            </Box>
            {/* Experience Entry 5 */}
            <Box
              p={7}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="md"
              boxShadow={"md"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2020 - 2021
              </Text>
              <Heading size="lg" mb={2}>
                Research Assistant, Master’s Program, IPB University
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Developed a model for land cover change and land use using
                  digital classification with the maximum likelihood algorithm.
                </ListItem>
                <ListItem>
                  Conducted accuracy testing for land cover and multi-temporal
                  land use mapping models.
                </ListItem>
              </UnorderedList>
            </Box>
            {/* Experience Entry 6 */}
            <Box
              p={7}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="md"
              boxShadow={"md"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2020 - 2021
              </Text>
              <Heading size="lg" mb={2}>
                Assistant for Cartography Practicum, Faculty of Geography,
                Universitas Gadjah Mada
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Delivered instructions and guided students in using mapping
                  instruments and software.
                </ListItem>
                <ListItem>
                  Collaborated with the team to formulate concepts and design
                  final exam questions.
                </ListItem>
              </UnorderedList>
            </Box>
            {/* Experience Entry 7 */}
            <Box
              p={7}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="md"
              boxShadow={"md"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2020 - 2021
              </Text>
              <Heading size="lg" mb={2}>
                Assistant for Remote Sensing Practicum, Universitas Gadjah Mada
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Coordinated the implementation of remote sensing practical
                  sessions.
                </ListItem>
                <ListItem>
                  Led material delivery, processed remote sensing data, and
                  supervised the practical use of multi-rotor drones.
                </ListItem>
                <ListItem>
                  Contributed to designing the implementation concept, as well
                  as creating final exam questions in collaboration with the
                  assistant team.
                </ListItem>
              </UnorderedList>
            </Box>
            {/* Experience Entry 8 */}
            <Box
              p={7}
              bg={isDarkmode ? "blue.700" : "blue.100"}
              borderRadius="md"
              boxShadow={"md"}
            >
              <Text
                fontSize="xl"
                fontWeight={"bold"}
                color={isDarkmode ? "gray.200" : "gray.600"}
              >
                2020 - 2021
              </Text>
              <Heading size="lg" mb={2}>
                Assistant for GIS Practicum, Universitas Gadjah Mada
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  Coordinated the execution of GIS practicum sessions.
                </ListItem>
                <ListItem>
                  Responsible for delivering instructional content and
                  processing GIS data using ArcGIS and QGIS.
                </ListItem>
                <ListItem>
                  Collaborated with the assistant team to formulate
                  implementation strategies and design final exam questions.
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Experience;
