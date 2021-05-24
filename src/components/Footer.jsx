import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => (
  <Box
    bg={useColorModeValue("gray.50", "gray.800")}
    color={useColorModeValue("gray.700", "gray.200")}
  >
    <Container maxW={"6xl"} py={4} spacing={4} justify="center" align="center">
      <Text>Copyright © 2021 Starry Network</Text>
    </Container>
  </Box>
);

export default Footer;
