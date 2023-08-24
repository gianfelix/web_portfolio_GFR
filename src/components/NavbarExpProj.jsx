import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const NavbarExpProj = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Menu>
        <MenuButton
          cursor="pointer"
          color={colorMode === "light" ? "black" : "white"}
          _hover={{ color: "brand.500" }}
        >
          Experiences & Projects
        </MenuButton>
        <MenuList zIndex={3}>
          <MenuItem onClick={() => navigate("/experiences")}>Experiences</MenuItem>
          <MenuItem onClick={() => navigate("/projects")}>Projects</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
