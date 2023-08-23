import React from "react";
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { NavbarWebGIS } from "./NavbarWebGIS";

const Navbar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "white" : "gray.800"}
      boxShadow="xl"
      zIndex={3}
      position="fixed"
      width="100%"
      maxH={"72px"}
      top={0}
      px={6}
    >
      <Flex p={4} align="center" justifyContent={"space-between"}>
        <HStack spacing={4} align="center">
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              color={colorMode === "light" ? "gray.600" : "white"}
              display={{ base: "block", md: "none" }}
            />
            <MenuList zIndex={20}>
              <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
              <MenuItem onClick={() => navigate("/about")}>About</MenuItem>
              <MenuItem onClick={() => navigate("/experience")}>
                Experience
              </MenuItem>
              <MenuItem onClick={() => navigate("/certificates")}>
                Certificates & Awards
              </MenuItem>
              <MenuItem>
                
              </MenuItem>
            </MenuList>
          </Menu>
          <Image
            src="LOGO GFR.png"
            alt="Logo GFR"
            boxSize="40px"
            onClick={() => {
              navigate("/");
            }}
            cursor="pointer"
            _hover={{ transform: "scale(1.1)" }}
          />
          <Heading
            size="md"
            color={colorMode === "light" ? "black" : "white"}
            onClick={() => {
              navigate("/");
            }}
            cursor="pointer"
            _hover={{ color: "brand.600", transform: "scale(1.1)" }}
          >
            Felix's Portfolio
          </Heading>
        </HStack>
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Box
            onClick={() => navigate("/")}
            cursor="pointer"
            color={colorMode === "light" ? "black" : "white"}
            _hover={{ color: "brand.500" }}
          >
            Home
          </Box>
          <Box
            onClick={() => navigate("/about")}
            cursor="pointer"
            color={colorMode === "light" ? "black" : "white"}
            _hover={{ color: "brand.500" }}
          >
            About
          </Box>
          <Box
            onClick={() => navigate("/experience")}
            cursor="pointer"
            color={colorMode === "light" ? "black" : "white"}
            _hover={{ color: "brand.500" }}
          >
            Experience
          </Box>
          <Box
            onClick={() => navigate("/certificates")}
            cursor="pointer"
            color={colorMode === "light" ? "black" : "white"}
            _hover={{ color: "brand.500" }}
          >
            Certificates & Awards
          </Box>

          <Box>
            <NavbarWebGIS />
          </Box>

          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            color={colorMode === "light" ? "gray.600" : "white"}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
