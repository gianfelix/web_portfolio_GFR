import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Heading mb={4}>About Me</Heading>
      <Text>
        Welcome to my portfolio website! I'm passionate about web development and creating user-friendly experiences. With several years of experience in the field, I've had the opportunity to work on various projects that have enriched my skills and knowledge. 
      </Text>
      <Text mt={4}>
        When I'm not coding, you can find me exploring the great outdoors, reading, or experimenting with new cooking recipes.
      </Text>
    </Container>
  );
};

export default About;
