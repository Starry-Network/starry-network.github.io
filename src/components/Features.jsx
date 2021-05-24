import {
  Box,
  Stack,
  Text,
  useColorModeValue as mode,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import {
  FcScatterPlot,
  FcLike,
  FcMindMap,
  FcCollaboration,
} from "react-icons/fc";

const Feature = (props) => {
  const { title, children, icon } = props;
  return (
    <Stack
      spacing={{ base: "3", md: "6" }}
      direction={{ base: "column", md: "row" }}
    >
      <Box fontSize="6xl">{icon}</Box>
      <Stack spacing="1">
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
        </Text>
        <Box color={mode("gray.600", "gray.400")}>{children}</Box>
      </Stack>
    </Stack>
  );
};

const Features = () => (
  <>
    <Heading
      px={{ base: 6, md: 4 }}
      py="12"
      fontSize={{ base: "3xl", md: "5xl" }}
    >
      Features
    </Heading>
    <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: "6", md: "8" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacingX="10"
        spacingY={{ base: "8", md: "14" }}
      >
        <Feature title="Fragmentation" icon={<FcScatterPlot />}>
          Split your NFTs into smaller Non Fungible Tokens or Fungible Tokens,
          and then use them to do what you want.
        </Feature>
        <Feature title="Combinable" icon={<FcMindMap />}>
          Combine different tokens together to turn them into Graph Token. Then
          use your imagination, like creating a cat gentleman with an umbrella
          and 100 dots!
        </Feature>
        <Feature title="Social" icon={<FcLike />}>
          Turn a piece or group of your work into fragmentation tokens and
          distribute them to your followers.
        </Feature>
        <Feature title="DAO" icon={<FcCollaboration />}>
          Use DAO to manage some NFTs, and enjoy everything Starry has to offer.
          Just DAO it!
        </Feature>
      </SimpleGrid>
    </Box>
  </>
);

export default Features;
