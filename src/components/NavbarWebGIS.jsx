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
          <MenuItem onClick={() => navigate("/webgis")}>Admin Yogyakarta City</MenuItem>
          <MenuItem onClick={() => navigate("/webgis-2")}>Admin Regency/City in Indonesia</MenuItem>
          <MenuItem onClick={() => navigate("/webgis-3")}>Affordability of Health Facilities</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
