import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Spinner,
  Text,
  useColorMode,
} from '@chakra-ui/react';

export const Projects = () => {
  
  
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const isUnderMaintenance = true;
  if (isUnderMaintenance) {
    return (
      <>
        <Flex justify="center" align="center" minH="80vh">
          <Text mr={5} fontSize="xl">
           Projects Page is Under Maintenance
          </Text>
          <Spinner thickness="4px" size="xl" color="brand.500" />
        </Flex>
      </>
    );
  }

  const projectsData = [
    {
      title: 'Project 1',
      imageSrc: 'project1.jpg', // Replace with actual image source
      description: 'Description of Project 1',
      demoLink: 'https://example.com/demo1',
      githubLink: 'https://github.com/user/project1',
    },
    {
      title: 'Project 2',
      imageSrc: 'project2.jpg', // Replace with actual image source
      description: 'Description of Project 2',
      demoLink: 'https://example.com/demo2',
      githubLink: 'https://github.com/user/project2',
    },
    // Add more projects as needed
  ];

  return (
    <Box p={8} bg={isDarkMode ? 'gray.800' : 'gray.100'}>
      <Heading fontSize="xl" mb={4} textAlign="center">
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {projectsData.map((project, index) => (
          <Box
            key={index}
            bg={isDarkMode ? 'gray.700' : 'white'}
            borderRadius="lg"
            boxShadow="md"
            p={4}
          >
            <Image
              src={project.imageSrc}
              alt={`Project ${index + 1}`}
              objectFit="cover"
              borderRadius="md"
              mb={4}
            />
            <Heading fontSize="md" fontWeight="bold" mb={2}>
              {project.title}
            </Heading>
            <Text mb={2}>{project.description}</Text>
            <Flex justifyContent="space-between">
              <Link href={project.demoLink} color={isDarkMode ? 'blue.300' : 'blue.600'}>Demo</Link>
              <Link href={project.githubLink} color={isDarkMode ? 'blue.300' : 'blue.600'}>GitHub</Link>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
