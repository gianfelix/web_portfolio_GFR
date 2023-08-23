import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Divider,
  Spinner,
  VStack,
} from "@chakra-ui/react";

const Experience = () => {
  // Replace this state with your actual state logic for under maintenance
  const isUnderMaintenance = true;

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
    <Box p={4}>
      <Flex direction="column" align="center" mt={8}>
        <Heading size="xl">Experience</Heading>
        <Divider mt={4} mb={6} />
        <Stack spacing={6}>
          <Box>
            <Heading size="lg">Company Name 1</Heading>
            <Text fontSize="md">Position: GIS Analyst</Text>
            <Text fontSize="md">Duration: January 2020 - Present</Text>
            <Text>
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed et convallis libero. Maecenas nec faucibus eros.
              Curabitur pharetra velit ac tortor viverra, eu scelerisque erat
              fermentum.
            </Text>
          </Box>
          <Box>
            <Heading size="lg">Company Name 2</Heading>
            <Text fontSize="md">Position: Spatial Programmer</Text>
            <Text fontSize="md">Duration: June 2018 - December 2019</Text>
            <Text>
              Description: Nulla vitae lectus vel justo maximus tincidunt.
              Vivamus efficitur euismod mi, non lacinia ligula volutpat eu.
              Proin sit amet tellus libero. Integer mattis augue ut magna
              consectetur, vel fringilla libero dapibus.
            </Text>
          </Box>
          {/* Add more experience entries here */}
        </Stack>
      </Flex>
    </Box>
  );
};

export default Experience;
