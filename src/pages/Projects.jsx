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
import { useState } from "react";

export const Projects = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const [showFullDescription, setShowFullDescription] = useState([]);

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
        "Blogging website called Earth Wall is a blog for sharing knowledge, articles, and opinions with anyone about everything that exists on our earth. Through this blog you can read, write, and expand your world for everyone. This project is part of a mini project organized by Bootcamp Purwadhika.",
      demoLink: "https://earthwall.netlify.app/",
      githubLink:
        "https://github.com/gianfelix/Front-End_JCWD_Purwadhika/tree/mini-project",
    },
    {
      title: "Cashier Application - Caishen App",
      imageSrc: "cashierapp1.jpg",
      description:
        "Caishen App is a cashier app designed specifically for use in restaurants. The app presents a complete list of food products offered by the restaurant. The main purpose of this app is to simplify the transaction process for cashiers and help admins or restaurant owners manage their products. With an intuitive interface, Caishen App allows cashiers to easily perform sales transactions, while admins can manage product inventory more efficiently.",
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
      <Heading fontSize="4xl" mb={4} textAlign="center">
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {projectsData.map((project, index) => (
          <Box
            key={index}
            bg={isDarkMode ? "blue.700" : "blue.100"}
            borderRadius="3xl"
            boxShadow="md"
            p={4}
            // maxH={"95%"}
          >
            <Image
              src={project.imageSrc}
              alt={`Project ${index + 1}`}
              objectFit="cover"
              borderRadius="3xl"
              mb={4}
              minW={"100%"}
              maxH={"65%"}
            />
            <Heading
              fontSize={{ base: "lg", xl: "xl" }}
              fontWeight="bold"
              mb={2}
            >
              {project.title}
            </Heading>
            {/* Deskripsi projek */}
            <Text fontSize={{ base: "sm", xl: "md" }}>
              {showFullDescription[index]
                ? project.description
                : project.description.slice(0, 210) + "..."}
            </Text>
            {/* Tombol "Read More" */}
            {!showFullDescription[index] && (
              <Link
                display="block"
                color={isDarkMode ? "blue.300" : "blue.600"}
                fontWeight="semibold"
                onClick={() => {
                  setShowFullDescription((prevState) => {
                    const newState = [...prevState];
                    newState[index] = true;
                    return newState;
                  });
                }}
              >
                Read More
              </Link>
            )}
            <Flex justifyContent="space-between" mt={1}>
              <Link
                href={project.demoLink}
                color={isDarkMode ? "blue.300" : "blue.600"}
                fontWeight="extrabold"
              >
                Demo
              </Link>
              <Link
                href={project.githubLink}
                color={isDarkMode ? "blue.300" : "blue.600"}
                fontWeight="extrabold"
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
