import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  useColorMode,
  Avatar,
  Link,
  Flex,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

const About = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <Box
      bgGradient={
        isDarkMode
          ? "linear(to-r, gray.700, blue.900)"
          : "linear(to-r, gray.100, blue.200)"
      }
      minH={"92vh"}
      py={10}
    >
      <Container
        maxW="container.lg"
        p={4}
        rounded="xl"
        boxShadow="xl"
        bg={isDarkMode ? "gray.800" : "gray.100"}
      >
        <Flex direction="column" alignItems="center" px={7} py={4}>
          <Image 
          boxSize="30%"
          rounded="full" 
          alt="Gian Felix Ramadan" 
          src="/fotoku1.jpg"/>
          <Heading mt={4} mb={2} textAlign="center" fontSize="3xl">
            About Me
          </Heading>
          <Text fontSize="lg" textAlign="justify">
            Welcome to my portfolio website! I am a person who is passionate
            about crafting solutions through technology and creative problem
            solving. With a strong background in GIS, spatial programming, and
            web development, I have the ability to provide concrete solutions to
            real-world challenges using geospatial data and programming
            languages as key tools. I enjoy creating dynamic and user-friendly
            websites, with expertise in combining front-end and back-end
            elements. My work is a platform that combines the richness of
            geospatial data with web programming skills, resulting in innovative
            solutions that make a positive impact.
          </Text>
          {/* <Text mt={4} fontSize="lg" textAlign="justify">
            When I'm not coding, you can find me exploring the great outdoors,
            reading, or experimenting with new cooking recipes.
          </Text> */}
          <VStack spacing={4} align="start" mt={4}>
            <Text textAlign="justify">
              If you have any inquiries or would like to get in touch, feel free
              to reach out to me using the contact information provided below:
            </Text>
            <HStack spacing={2}>
              <AiOutlineMail size={20} />
              <Link
                href="mailto:gfelixramadan@gmail.com"
                color={isDarkMode ? "blue.400" : "blue.600"}
              >
                gfelixramadan@gmail.com
              </Link>
            </HStack>
            <HStack spacing={2}>
              <AiFillLinkedin size={20} />
              <Link
                href="https://www.linkedin.com/in/gianfelixramadan/"
                target="_blank"
                rel="noopener noreferrer"
                color={isDarkMode ? "blue.400" : "blue.600"}
              >
                https://www.linkedin.com/in/gianfelixramadan/
              </Link>
            </HStack>
            <HStack spacing={2}>
              <AiFillGithub size={20} />
              <Link
                href="https://github.com/gianfelix"
                target="_blank"
                rel="noopener noreferrer"
                color={isDarkMode ? "blue.400" : "blue.600"}
              >
                https://github.com/gianfelix
              </Link>
            </HStack>
            <HStack spacing={2}>
              <AiFillInstagram size={20} />
              <Link
                href="https://www.instagram.com/gianfelixr/"
                target="_blank"
                rel="noopener noreferrer"
                color={isDarkMode ? "blue.400" : "blue.600"}
              >
                https://www.instagram.com/gianfelixr/
              </Link>
            </HStack>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
