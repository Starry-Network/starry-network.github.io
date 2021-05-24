import { Center, Heading, Text, Flex, Stack, Icon,   useColorModeValue,
} from "@chakra-ui/react";
import { SiParitysubstrate } from "react-icons/si";

const More = () => (
  <Flex
    w="full"
    minH="200px"
    alignItems="center"
    justifyContent="center"
    py="20"
    bg={useColorModeValue("teal.300", "gray.800")}
  >
    <Stack spacing="6">
      <Center>
        <Icon fontSize="7xl" as={SiParitysubstrate} />
      </Center>
      <Heading lineHeight={1.1}>
        <Text as={"span"} fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}>
          Starry is based on Substrate
        </Text>
      </Heading>
    </Stack>
  </Flex>
);

export default More;
