import React from "react";
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
} from "@chakra-ui/react";

export const Projects = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const isUnderMaintenance = false;
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
      title: "Blogging Website - Earh Wall",
      imageSrc: "blogging.jpg",
      description:
        "Blogging website called Earth Wall is a blog that contains a collection of articles with various categories available. This project is part of a mini project organized by Bootcamp Purwadhika.",
      demoLink: "https://earthwall.netlify.app/",
      githubLink:
        "https://github.com/gianfelix/Front-End_JCWD_Purwadhika/tree/mini-project",
    },
    {
      title: "Cashier Application - Caishen App",
      imageSrc: "cashierapp.jpg",
      description: "Description of Project 2",
      demoLink: "https://example.com/caishen",
      githubLink: "https://github.com/gifariarsal/group1",
    },
    {
      title: "Mapping Land Cover Change",
      imageSrc: "project2image.jpg",
      description: "Description of Project 2",
      // demoLink: "https://example.com/caishen",
      // githubLink: "https://github.com/gifariarsal/group1",
    },
    {
      title: "Mapping ...",
      imageSrc: "project2image.jpg",
      description: "Description of Project 2",
      demoLink: "https://example.com/caishen",
      githubLink: "https://github.com/gifariarsal/group1",
    },
    // Add more projects as needed
  ];

  return (
    <Box p={8} bg={isDarkMode ? "gray.800" : "white"}>
      <Heading fontSize="xl" mb={4} textAlign="center">
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {projectsData.map((project, index) => (
          <Box
            key={index}
            bg={isDarkMode ? "blue.700" : "blue.100"}
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
              <Link
                href={project.demoLink}
                color={isDarkMode ? "blue.300" : "blue.600"}
              >
                Demo
              </Link>
              <Link
                href={project.githubLink}
                color={isDarkMode ? "blue.300" : "blue.600"}
              >
                GitHub
              </Link>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
