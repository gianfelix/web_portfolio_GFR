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
      title:
        "Prediction and Simulation of Land Use and Land Cover Changes Using Open Source QGIS. A Case Study of Purwokerto, Central Java, Indonesia",
      imageSrc: "journal1.jpg",
      description:
        "The research entitled 'Prediction and Simulation of Land Use and Land Cover Changes Using Open Source QGIS. A Case Study of Purwokerto, Central Java, Indonesia' is a project on mapping land cover changes and predicting them in the future. This mapping uses the MOLUSCE plugin available in QGIS software. The mapping results show a fairly good accuracy, with a land change prediction accuracy of 75.26%.",
      demoLink: "https://journal.ugm.ac.id/ijg/article/view/68702",
      githubLink: "https://github.com/gianfelix/mypublication/blob/main/Gian%20Felix%20R_Prediction%20and%20Simulation%20of%20Land%20Use%20and%20Land%20Cover%20Changes%20Using%20Open%20Source%20QGIS.%20A%20Case%20Study%20of%20Purwokerto%2C%20Central%20Java%2C%20Indonesia.pdf",
    },
    {
      title: "Analysis Spatial Pattern of Urban Growth Using Remote Sensing Data: A Study in Purwokerto, Central Java, Indonesia",
      imageSrc: "journal2.jpg",
      description: "Research on mapping the urban growth of the city in the study area of Purwokerto City. This research uses maximum likelihood classification to classify the existing land cover. The classification results during 2008, 2013 and 2018 can be analyzed to determine the direction of urban growth that occurs by making quadrant directions.",
      demoLink: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12082/2616207/Analysis-spatial-pattern-of-urban-growth-using-remote-sensing-data/10.1117/12.2616207.short",
      githubLink: "https://github.com/gianfelix/mypublication/blob/main/ProceedingsofSPIE_Analysis%20Spatial%20Pattern%20of%20Urban%20Growth%20Using%20Remote%20Sensing%20Data%20a%20Study%20in%20Purwokerto%2C%20Central%20Java%2C%20Indonesia.pdf",
    },
    // Add more projects as needed
  ];

  return (
    <Box p={8} bg={isDarkMode ? "gray.800" : "white"}>
      <Heading fontSize="4xl" mb={4} textAlign="center">
        Projects
      </Heading>
      <SimpleGrid
        display={"flex"}
        // flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        columns={{ base: 1, xl: 2 }}
        spacing={4}
        // ml={20}
        // mr={20}
        maxH={"auto"}
      >
        {projectsData.map((project, index) => (
          <Box
            key={index}
            bg={isDarkMode ? "blue.700" : "blue.100"}
            borderRadius="3xl"
            boxShadow="md"
            p={5}
            minW={{ base: "450px", md: "600px", xl: "450px" }}
            // minH={"60%"}
            // maxH={"auto"}
          >
            <Image
              src={project.imageSrc}
              alt={`Project ${index + 1}`}
              objectFit="cover"
              borderRadius="3xl"
              mb={4}
              minW={"100%"}
              minH={"40%"}
              // maxH={"auto"}
            />
            <Heading
              fontSize={{ base: "lg", xl: "xl" }}
              fontWeight="bold"
              mb={2}
            >
              {project.title}
            </Heading>
            {/* Deskripsi projek */}
            <Text fontSize={{ base: "sm", xl: "md" }} textAlign={"justify"}>
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
            <Flex
              justifyContent="space-around"
              mt={1}
              pos={"relative"}
              bottom={0}
              pt={"auto"}
            >
              <Link
                href={project.demoLink}
                color={isDarkMode ? "blue.300" : "blue.600"}
                fontWeight="extrabold"
              >
                Demo / View details
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
