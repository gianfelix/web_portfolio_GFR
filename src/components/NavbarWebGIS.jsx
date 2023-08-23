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

export const NavbarWebGIS = () => {
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
          WebGIS
        </MenuButton>
        <MenuList zIndex={3}>
          <MenuItem onClick={() => navigate("/webgis")}>WebGIS-1</MenuItem>
          <MenuItem onClick={() => navigate("/webgis-2")}>WebGIS-2</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
