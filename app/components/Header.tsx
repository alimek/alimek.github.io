import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const Header = () => (
  <Flex
    id="header"
    flexDirection="row"
    px="m"
    py="m"
    borderBottomWidth={0.5}
    borderColor="borderLight"
  >
    <Box flex={1}>
      <NextLink href="/" passHref>
        <Link variant="menu">Home</Link>
      </NextLink>
    </Box>
    <HStack spacing="m">
      <NextLink href="/bio" passHref>
        <Link variant="menu">Bio</Link>
      </NextLink>
      <NextLink href="/contact" passHref>
        <Link variant="menu">Contact</Link>
      </NextLink>
    </HStack>
  </Flex>
);
