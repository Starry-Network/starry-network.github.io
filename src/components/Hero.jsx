import {
  Image,
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import mindImage from "./mind.jpg";

const Hero = () => (
  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py="12">
    <Stack
      as={Box}
      textAlign={"center"}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
    >
      <Heading lineHeight={1.1}>
        <Text
          as={"span"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "teal.300",
            zIndex: -1,
          }}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          Use NFT and DAO
        </Text>
        <br />
        <Text
          as={"span"}
          color={"teal.300"}
          fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
        >
          to enter Web3.0 smoothly!
        </Text>
      </Heading>
    </Stack>
    <Flex>
      <Image rounded={"md"} alt={"feature image"} src={mindImage} />
    </Flex>
  </SimpleGrid>
);

export default Hero;
