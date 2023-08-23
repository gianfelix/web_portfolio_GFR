import React from "react";
import { Box, Flex, Heading, Text, VStack, useColorMode } from "@chakra-ui/react";

export const Education = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "gray.800" : "gray.100";
  const textColor = colorMode === "dark" ? "white" : "black";

  return (
    <Box py={10} bg={bgColor}>
      <Flex
        direction="column"
        align="center"
        maxW={{ base: "100%", md: "80%", lg: "70%" }}
        mx="auto"
      >
        <Heading as="h2" size="xl" mb={4} color={textColor}>
          Education
        </Heading>
        <VStack spacing={6} align="start">
          {/* Education Item */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" color={textColor}>
              Master of Science in Geographic Information Science
            </Text>
            <Text fontSize="md" color={textColor}>
              University Name, Graduation Year
            </Text>
            <Text fontSize="md" color="gray.600">
              Description of your master's program and achievements.
            </Text>
          </Box>

          {/* Education Item */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" color={textColor}>
              Bachelor of Science in Geography
            </Text>
            <Text fontSize="md" color={textColor}>
              University Name, Graduation Year
            </Text>
            <Text fontSize="md" color="gray.600">
              Description of your bachelor's program and accomplishments.
            </Text>
          </Box>

          {/* You can add more education items here */}
        </VStack>
      </Flex>
    </Box>
  );
};

export default Education;
