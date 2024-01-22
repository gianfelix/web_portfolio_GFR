// BarcodeGenerator.js

import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Barcode from "react-barcode";

import QRCode from "qrcode.react";


const generateRandomValue = () => {
  // Implement your logic to generate a random value for the QR code here
  // For simplicity, let's generate a random 6-digit alphanumeric value
  const randomValue = Math.random().toString(36).substr(2, 6).toUpperCase();
  return randomValue;
};

const generateRandomBarcode = () => {
  // Implement your logic to generate a random barcode value here
  // For simplicity, let's generate a random 12-digit numeric barcode
  const barcodeValue = Math.floor(Math.random() * 900000000000) + 100000000000 ;
  return barcodeValue.toString();
};

const BarcodeGenerator = () => {
  const qrCodeValue = "https://gianfelixr-portfolio.netlify.app/";
  const barcodeValue = generateRandomBarcode();

  return (
    <Box pt={10} px={150}>
      <>
        <h2>Random Barcode Generator</h2>
        <Barcode value={barcodeValue} />
        <Text> Scan the barcode! </Text>
      </>

      <Box mt={100}>
        <h2>Random QR Code Generator</h2>
        <QRCode value={qrCodeValue} />
        {/* <p>QR Code Value: {qrCodeValue}</p> */}
        <Text>Scan the QR code!</Text>

       
      </Box>
    </Box>
  );
};

export default BarcodeGenerator;
