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
      minH={"100vh"}
      py={20}
    >
      <Container
        maxW="container.lg"
        p={4}
        rounded="xl"
        boxShadow="xl"
        bg={isDarkMode ? "gray.800" : "gray.100"}
      >
        <Flex direction="column" alignItems="center" px={7} py={4}>
          <Avatar size="2xl" name="Gian Felix Ramadan" src="/fotoku.jpg" />
          <Heading mt={4} mb={2} textAlign="center" fontSize="3xl">
            About Me
          </Heading>
          <Text fontSize="lg">
            Welcome to my portfolio website! I'm passionate about web
            development and creating user-friendly experiences. With several
            years of experience in the field, I've had the opportunity to work
            on various projects that have enriched my skills and knowledge.
          </Text>
          <Text mt={4} fontSize="lg">
            When I'm not coding, you can find me exploring the great outdoors,
            reading, or experimenting with new cooking recipes.
          </Text>
          <VStack spacing={4} align="start" mt={4}>
            <Text>
              If you have any inquiries or would like to get in touch, feel free to reach out to me using the contact information provided below:
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
