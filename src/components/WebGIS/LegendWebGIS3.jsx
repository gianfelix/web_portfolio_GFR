import { Box, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";

export const LegendWebGIS3 = () => {
    const { colorMode } = useColorMode();
  const isDarkmode = colorMode === "dark";
  return (
    <>
      <Box
        position="absolute"
        bottom="30px"
        right="20px"
        backgroundColor= {isDarkmode ? "gray.600" : "white"}   
        
        padding="20px"
        opacity={0.9}
        borderRadius="5px"
        zIndex={400}
      >
        <Heading size={"md"} mb={1}>
          LEGENDA:
        </Heading>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <div
            style={{
              width: "17px",
              height: "17px",
              backgroundColor: "#fac8c5",
              borderRadius: "50%",
              marginRight: "8px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              color: "red",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            +
          </div>
          Health Facilities
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "5px",
              border: "3px dashed #b51b00",
              marginRight: "5px",
            }}
          ></div>
          Sub-District Boundary
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "2px",
              backgroundColor: "black",
              marginRight: "5px",
            }}
          ></div>
          Road
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#0acc00",
              marginRight: "5px",
            }}
          ></div>
          Very Affordable
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#aff58e",
              marginRight: "5px",
            }}
          ></div>
          Quite Affordable
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#fff75e",
              marginRight: "5px",
            }}
          ></div>
          Less Affordable
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#d9d5d4",
              marginRight: "5px",
            }}
          ></div>
          Not Affordable
        </div>
      </Box>
    </>
  );
};
