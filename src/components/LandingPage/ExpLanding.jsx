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
    <Box p={4} bgGradient={isDarkmode ? "linear(to-b, gray.800, blue.900)" : "linear(to-b, white, blue.300)"} align={"center"} pb={8}>
      <Box
        minW={"65%"}
        maxW={"70%"}
        align={"left"}
        
      >
        <Flex direction="column" align="center" mt={8} >
          <Heading size="xl" mb={5} color={isDarkmode ? "white" : "black"}
          _hover={{
            transform: "scale(1.1)",
          }}
          transition={"transform 0.3s ease-in-out"}
          >
            Experience
          </Heading>

          <Stack spacing={8} >
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
            {/* Experience Entry 2 */}
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
                2021
              </Text>
              <Heading size={{ base: "md", md: "lg" }} mb={2}>
                Drone Operator, Enumerator of the Faculty of Forestry,
                Universitas Gadjah Mada
              </Heading>
              <UnorderedList pl={2} fontSize={{ base: "sm", md: "md" }}>
                <ListItem>
                  Implementing Monitoring of Mangrove Rehabilitation Areas in
                  the Riau Archipelago through Aerial Mapping Using a Multirotor
                  Drone.
                </ListItem>
                <ListItem>
                  Geotagging photo data processing survey results using ArcGIS
                  software.
                </ListItem>
              </UnorderedList>
            </Box>
            {/* Experience Entry 3 */}
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
                2021
              </Text>
              <Heading size={{ base: "md", md: "lg" }} mb={2}>
                GIS Operator, SinauGIS Consultant
              </Heading>
              <UnorderedList pl={2} fontSize={{ base: "sm", md: "md" }}>
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
