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
    <Box
      p={6}
      bgGradient={isDarkMode ? 'linear(to-r, gray.700, blue.900)' : 'linear(to-r, gray.100, blue.200)'}
      borderRadius="lg"
    >
      <Heading fontSize="xl" mb={4} textAlign="center" fontWeight="bold">
      <Text
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="bold"
          letterSpacing="wide"
          textTransform="uppercase"
          bgGradient={isDarkMode ? 'linear(to-r, blue.300, blue.600)' : 'linear(to-r, blue.500, blue.700)'}
          bgClip="text"
        >
          SKILLS
        </Text>
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
            _hover={{
              transform: 'translateY(-5px)',
              // transition: 'transform 0.3s ease-in-out',
            }}
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

export default Skills;
