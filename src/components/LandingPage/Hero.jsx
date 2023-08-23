import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image, useColorMode, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BtnModalContact } from "./BtnModalContact";
import CvModal from "./CvModal";

const MotionFlex = motion(Flex);
const MotionText = motion(Text);

export const Hero = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fullText = "Analyst and Spatial Programmer   ";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const delay = isDeleting ? 65 : 90;
    const nextIndex = isDeleting ? currentIndex - 1 : currentIndex + 1;

    if (nextIndex <= fullText.length && nextIndex >= 0) {
      setTypedText(fullText.slice(0, nextIndex));
    }

    if (nextIndex > fullText.length) {
      setIsDeleting(true);
    }

    if (nextIndex < 0) {
      setIsDeleting(false);
      setCurrentIndex(0);
    }

    const timeoutId = setTimeout(() => {
      setCurrentIndex(nextIndex);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [typedText, isDeleting, currentIndex]);

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
          A GIS {typedText}
        </MotionText>
        <Box justifyItems="center">
          <Text
            fontSize={{ base: "md", md: "xl" }}
            mt={8}
            color={colorMode === "light" ? "black" : "white"}
            style={{ textAlign: "justify" }}
          >
            I am a passionate GIS Analyst and Spatial Programmer with a keen
            interest in utilizing geospatial data to solve real-world problems.
            With a strong background in geographic information systems (GIS) and
            programming, I have successfully contributed to various projects
            that involve spatial analysis, data visualization, and geospatial
            application development.
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
      <Flex ml="13%" mr={"4%"} maxW="375px" maxH="50%">
        <MotionFlex
          minH="30vh"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            _hover={{ transform: "scale(1.05)" }}
            src="fotoku.jpg"
            alt="Gian Felix Ramadan"
            borderRadius="full"
            boxSize="100%"
            objectFit="cover"
            boxShadow="2xl"
          />
        </MotionFlex>
      </Flex>
    </Box>
  );
};

export default Hero;
