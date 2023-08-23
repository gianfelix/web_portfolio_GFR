import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure,
  Link,
  VStack,
  HStack,
} from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";

export const BtnModalContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <>
      <Button
        mr={4}
        colorScheme={isDarkMode ? "gray" : "brand"}
        size={{ base: "sm", md: "lg" }}
        onClick={onOpen}
      >
        Contact Me
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent bg={isDarkMode ? "gray.700" : "gray.200"} boxShadow={"2xl"}> 
          <ModalHeader>Contact Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="start">
              <Text>
                If you have any inquiries or would like to get in touch, feel free to reach out to me using the contact information provided below:
              </Text>
              <HStack spacing={2}>
                <AiOutlineMail size={20} />
                <Link
                  href="mailto:gfelixramadan@gmail.com"
                  color={isDarkMode ? "blue.400" : "blue.600"}
                >
                  gfelixramadan@gmail.com
                </Link>
              </HStack>
              <HStack spacing={2}>
                <AiFillLinkedin size={20} />
                <Link
                  href="https://www.linkedin.com/in/gianfelixramadan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={isDarkMode ? "blue.400" : "blue.600"}
                >
                  https://www.linkedin.com/in/gianfelixramadan/
                </Link>
              </HStack>
              <HStack spacing={2}>
                <AiFillGithub size={20} />
                <Link
                  href="https://github.com/gianfelix"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={isDarkMode ? "blue.400" : "blue.600"}
                >
                  https://github.com/gianfelix
                </Link>
              </HStack>
              <HStack spacing={2}>
                <AiFillInstagram size={20} />
                <Link
                  href="https://www.instagram.com/gianfelixr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={isDarkMode ? "blue.400" : "blue.600"}
                >
                  https://www.instagram.com/gianfelixr/
                </Link>
              </HStack>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {/* You can add a secondary action button here */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
