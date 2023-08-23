import React from 'react';
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FaCode, FaDatabase, FaServer, FaDesktop } from 'react-icons/fa';

export const Skills = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const skillsData = [
    { icon: FaCode, title: 'Front-end Development', description: 'HTML, CSS, JavaScript, React' },
    { icon: FaDatabase, title: 'Back-end Development', description: 'Node.js, Express, REST API' },
    { icon: FaServer, title: 'Database', description: 'MongoDB, MySQL' },
    { icon: FaDesktop, title: 'GIS & Spatial Analysis', description: 'ArcGIS, QGIS, PostGIS' },
    // Add more skills as needed
  ];

  return (
    <Box p={8} bg={isDarkMode ? 'gray.800' : 'gray.100'}>
      <Heading fontSize="xl" mb={4} textAlign="center">
        Skills
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {skillsData.map((skill, index) => (
          <Flex
            key={index}
            p={4}
            bg={isDarkMode ? 'gray.700' : 'white'}
            borderRadius="lg"
            boxShadow="md"
            flexDirection="column"
            align="center"
            justify="center"
          >
            <Box as={skill.icon} fontSize="3xl" color={isDarkMode ? 'blue.300' : 'blue.600'} mb={2} />
            <Heading fontSize="md" fontWeight="bold">
              {skill.title}
            </Heading>
            <Text mt={2} textAlign="center">
              {skill.description}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};
