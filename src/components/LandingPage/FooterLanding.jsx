import React from "react";
import { Box, Flex, Text, Link, Icon, useColorMode } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLanding = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  return (
    <Box bgColor={isDarkMode ? "blue.700" : "gray.800"} color="white" py={8}>
      <Flex justifyContent="space-between" alignItems="center" px={6}>
        <Text fontSize="lg" fontWeight="bold">
          Felix's Portfolio
        </Text>
        <Flex>
          <Link mx={2} href="#">
            <Icon as={FaTwitter} boxSize={6} />
          </Link>
          <Link mx={2} href="#">
            <Icon as={FaInstagram} boxSize={6} />
          </Link>
          <Link mx={2} href="#">
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
        </Flex>
      </Flex>
      <Box mt={6} textAlign="center">
        <Text fontSize="sm" opacity={0.7}>
          &copy; {new Date().getFullYear()} Gian Felix Ramadan. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default FooterLanding;
