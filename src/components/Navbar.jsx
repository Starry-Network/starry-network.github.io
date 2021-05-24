import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  Image,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Icon,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaMoon, FaSun, FaGithub } from "react-icons/fa";
import Logo from './logo.png'
// from simple-icons
const SubstackIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Substack icon</title>
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  </Icon>
);

const NAV_ITEMS = [
  {
    label: "Github",
    icon: FaGithub,
    href: "https://github.com/Starry-Network",
  },
  {
    label: "Substack",
    icon: SubstackIcon,
    href: "https://starry.substack.com",
  },
];

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.600", "white")}
      minH={"60px"}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
      align={"center"}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Link
        py={2}
        href={href ?? "#"}
        onClick={(e) => {
          if (children) {
            e.preventDefault();
          }
        }}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Link>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const DesktopNavItem = ({ href, icon, color }) => {
  return (
    <Link href={href} p="2" mr="2" fontSize="lg" color={color}>
      <Icon fill={color} as={icon} />
    </Link>
  );
};
function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const navTextColor = useColorModeValue("gray.900", "white");
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Box>
      <Flex
        as="header"
        bg={useColorModeValue("white", "gray.800")}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4, md: 20 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link
            href="/"
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily="heading"
            color={navTextColor}
            _hover={{
              textDecoration: "none",
            }}
          >
            {/* Starry */}
            <Image src={Logo} height="35px" />
          </Link>
        </Flex>
        <Spacer />
        <Flex
          flex={{ base: 0, md: 1 }}
          justify={{ base: "none", md: "flex-end" }}
        >
          <Flex display={{ base: "none", md: "flex" }}>
            {NAV_ITEMS.map((navItem) => (
              <DesktopNavItem
                color={navTextColor}
                key={navItem.label}
                {...navItem}
              />
            ))}
          </Flex>
        </Flex>

        <Link
          p={2}
          fontSize="lg"
          color={navTextColor}
          onClick={toggleColorMode}
        >
          <Icon as={SwitchIcon} />
        </Link>
      </Flex>

      <Collapse in={isOpen} animateOpacity={false}>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

export default Navbar;
