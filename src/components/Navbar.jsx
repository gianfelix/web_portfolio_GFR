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
  Tooltip,
  Text,
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
      <Flex p={4} align="center" justifyContent="space-between">
        <HStack spacing={4} align="center">
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              color={colorMode === "light" ? "gray.600" : "white"}
              display={{ base: "block", md: "none" }}
            />
            <MenuList
              zIndex={20}
              bg={colorMode === "light" ? "white" : "gray.800"}
            >
              <MenuItem
                onClick={() => navigate("/")}
                _hover={ { color: "brand.500"}}
              >
                Home
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/about")}
                _hover={{ bg: "brand.100" }}
              >
                About
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/experience")}
                _hover={{ bg: "brand.100" }}
              >
                Experience
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/certificates")}
                _hover={{ bg: "brand.100" }}
              >
                Certificates & Awards
              </MenuItem>

              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={
                    <Text color={"black"} fontWeight={"normal"}>
                      WebGIS
                    </Text>
                  }
                  _hover={{ bg: "brand.100" }}
                  w={"100%"}
                  colorScheme="none"
                  borderRadius={"none"}
                ></MenuButton>
                <MenuList
                  bg={colorMode === "light" ? "white" : "gray.800"}
                  border="1px solid"
                  borderColor={colorMode === "light" ? "gray.200" : "gray.600"}
                >
                  <MenuItem
                    onClick={() => navigate("/webgis")}
                    _hover={{ bg: "brand.500" }}
                  >
                    WebGIS-1
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/webgis-2")}
                    _hover={{ bg: "brand.500" }}
                  >
                    WebGIS-2
                  </MenuItem>
                </MenuList>
              </Menu>
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
            _hover={{  transform: "scale(1.1)" }}
          >
            Felix's Portfolio
          </Heading>
        </HStack>
        {/* <Box display={{ base: "none", md: "flex" }}>
          
        </Box> */}
        <Box display={{ base: "none", md: "flex" }} w={{ base: "100vw", md: "auto"}} ml={{ base: "0", md: "auto"}}>
          
        </Box>
        
        <HStack  mr={10} spacing={4} display={{ base: "none", md: "flex" }}>
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
        </HStack>
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          color={colorMode === "light" ? "gray.600" : "white"}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
