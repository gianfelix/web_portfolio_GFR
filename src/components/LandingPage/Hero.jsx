import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  useColorMode,
  Button,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BtnModalContact } from "./BtnModalContact";
import CvModal from "./CvModal";

const MotionFlex = motion(Flex);
const MotionText = motion(Text);

export const Hero = ({ userLocation }) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const textOptions = [
    "GIS Analyst and Spatial Programmer   ",
    "Web Developer     ",
  ];
  const [textIndex, setTextIndex] = useState(0);
  const currentText = textOptions[textIndex];

  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showJogjaAlert, setShowJogjaAlert] = useState(false);
  const [showOtherAlert, setShowOtherAlert] = useState(false);

  useEffect(() => {
    const delay = isDeleting ? 65 : 90;
    const nextIndex = isDeleting ? currentIndex - 1 : currentIndex + 1;

    if (nextIndex <= currentText.length && nextIndex >= 0) {
      setTypedText(currentText.slice(0, nextIndex));
    }

    if (nextIndex > currentText.length) {
      setIsDeleting(true);
    }

    if (nextIndex < 0) {
      setIsDeleting(false);
      setCurrentIndex(0);
      setTextIndex((textIndex + 1) % textOptions.length);
    }

    const timeoutId = setTimeout(() => {
      setCurrentIndex(nextIndex);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [
    typedText,
    isDeleting,
    currentIndex,
    currentText,
    textIndex,
    textOptions,
  ]);

  useEffect(() => {
    if (userLocation === "Jogja") {
      setShowJogjaAlert(true);

      const hideJogjaAlertTimeout = setTimeout(() => {
        setShowJogjaAlert(false);
      }, 4000);

      return () => {
        clearTimeout(hideJogjaAlertTimeout);
      };
    } else if (userLocation === "Other") {
      setShowOtherAlert(true);

      const hideOtherAlertTimeout = setTimeout(() => {
        setShowOtherAlert(false);
      }, 6400);

      return () => {
        clearTimeout(hideOtherAlertTimeout);
      };
    }
  }, [userLocation]);

  return (
    <Box
      bgGradient={
        isDarkMode
          ? "linear(to-r, blue.700, purple.800)"
          : "linear(to-r, white , blue.500)"
      }
      color="white"
      p={8}
      minH="70vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={"10%"}
    >
      <MotionFlex
        direction="column"
        textAlign="center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {showJogjaAlert && (
          <Alert status="info" mb={4}>
            <AlertIcon />
            <AlertTitle color={colorMode === "light" ? "black" : "white"}>
              You are in Yogyakarta!
            </AlertTitle>
          </Alert>
        )}
        {showOtherAlert && (
          <Alert status="warning" mb={4}>
            <AlertIcon />
            <AlertTitle color={colorMode === "light" ? "black" : "white"}>
              You are not in Yogyakarta!
            </AlertTitle>
          </Alert>
        )}
        <Text
          fontSize={{ base: "xl", md: "4xl" }}
          mt={4}
          color={colorMode === "light" ? "black" : "white"}
          textAlign="left"
        >
          Welcome, I'm
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "5xl" }}
          fontWeight="bold"
          color={colorMode === "light" ? "black" : "white"}
          textAlign="left"
        >
          Gian Felix Ramadan
        </Text>
        <MotionText
          fontSize={{ base: "xl", md: "3xl" }}
          opacity={0.8}
          mt={2}
          color={colorMode === "light" ? "black" : "white"}
          textAlign="left"
        >
          A {typedText}
        </MotionText>
        <Box justifyItems="center">
          <Text
            fontSize={{ base: "sm", md: "lg" }}
            mt={8}
            color={colorMode === "light" ? "black" : "white"}
            style={{ textAlign: "justify" }}
          >
            I am a person who is passionate about crafting solutions through
            technology and creative problem solving. With a strong background in
            GIS, spatial programming, and web development, I have the ability to
            provide concrete solutions to real-world challenges using geospatial
            data and programming languages as key tools. I enjoy creating
            dynamic and user-friendly websites, with expertise in combining
            front-end and back-end elements. My work is a platform that combines
            the richness of geospatial data with web programming skills,
            resulting in innovative solutions that make a positive impact.
          </Text>
        </Box>
        <Flex mt={8} justify="center">
          <BtnModalContact />

          <Button
            variant="outline"
            borderWidth={2}
            borderColor={isDarkMode ? "white" : "brand.600"}
            color={isDarkMode ? "white" : "brand.700"}
            size={{ base: "sm", md: "lg" }}
            onClick={openModal}
          >
            Show My CV
          </Button>
          <CvModal isOpen={isModalOpen} onClose={closeModal} />
        </Flex>
      </MotionFlex>
      <Flex
        ml={{ base: "5%", lg: "13%" }}
        mr={"3%"}
        minW={{ base: "250px", lg: "450px" }}
        maxH={"550px"}
      >
        <MotionFlex
          minH="30vh"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            _hover={{ transform: "scale(1.05)" }}
            objectPosition="center top"
            src="fotoku.jpg"
            alt="Gian Felix Ramadan"
            borderRadius="full"
            boxSize="100%"
            objectFit="cover"
            boxShadow="2xl"
            height={"auto"}
            width={"400px"}
          />
        </MotionFlex>
      </Flex>
    </Box>
  );
};

export default Hero;
