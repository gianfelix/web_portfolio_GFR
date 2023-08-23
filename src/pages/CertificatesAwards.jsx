import React from "react";
import { Box, Flex, Heading, Text, Stack, Divider, Spinner } from "@chakra-ui/react";

const CertificatesAwards = () => {
  const isUnderMaintenance = true;

  if (isUnderMaintenance) {
    return (
      <>
        <Flex justify="center" align="center" minH="80vh">
          <Text mr={5} fontSize="xl">
           Certificate & Awards Page is Under Maintenance
          </Text>
          <Spinner thickness="4px" size="xl" color="brand.500" />
        </Flex>
      </>
    );
  }

  return (
    <Box p={4}>
      <Flex direction="column" align="center" mt={8}>
        <Heading size="xl">Certificates & Awards</Heading>
        <Divider mt={4} mb={6} />
        <Stack spacing={6}>
          <Box>
            <Heading size="lg">Certificate in GIS Fundamentals</Heading>
            <Text fontSize="md">Issuing Institution: XYZ University</Text>
            <Text fontSize="md">Date: August 2022</Text>
            <Text>
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed et convallis libero. Maecenas nec faucibus eros.
              Curabitur pharetra velit ac tortor viverra, eu scelerisque erat
              fermentum.
            </Text>
          </Box>
          <Box>
            <Heading size="lg">Employee of the Month Award</Heading>
            <Text fontSize="md">Company: ABC Corporation</Text>
            <Text fontSize="md">Date: November 2021</Text>
            <Text>
              Description: Nulla vitae lectus vel justo maximus tincidunt.
              Vivamus efficitur euismod mi, non lacinia ligula volutpat eu.
              Proin sit amet tellus libero. Integer mattis augue ut magna
              consectetur, vel fringilla libero dapibus.
            </Text>
          </Box>
          {/* Add more certificate and award entries here */}
        </Stack>
      </Flex>
    </Box>
  );
};

export default CertificatesAwards;
