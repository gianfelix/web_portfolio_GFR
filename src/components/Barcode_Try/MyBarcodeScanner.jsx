import React, { useState } from "react";
import { useZxing } from "react-zxing";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const MyBarcodeScanner = () => {
  const [scan, setScan] = useState(null);
  const { deviceId } = useParams();

  const { ref } = useZxing({
    onResult: (newScan) => {
      setScan(newScan);
    },
    deviceId,
  });

  return (
    <Box pt={10} px={150}>
      <h2>Barcode Scanner</h2>
      <video width="300" ref={ref} />

      {scan && (
        <Box mt={4}>
          <p>
            <strong>Scanned Data:</strong> {scan}
          </p>
        </Box>
      )}
    </Box>
  );
};

export default MyBarcodeScanner;
