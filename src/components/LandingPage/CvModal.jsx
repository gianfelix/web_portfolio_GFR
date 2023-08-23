import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";

const CvModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <embed src="/CV_GianFelixRamadan.pdf" width="100%" height="700vh" />
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            colorScheme="brand"
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            variant="outline"
            colorScheme="brand"
            onClick={() => {
              const downloadLink = document.createElement("a");
              downloadLink.href = "/CV_GianFelixRamadan.pdf";
              downloadLink.download = "CV_GianFelixRamadan.pdf";
              downloadLink.click();
            }}
          >
            Download
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CvModal;
