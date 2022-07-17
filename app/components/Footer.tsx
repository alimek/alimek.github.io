import { Flex, HStack, Icon, Link, Spacer, Text } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import NextLink from "next/link";

export const Footer = () => {
  return (
    <Flex
      px="m"
      py="m"
      flexDirection={["column", "row"]}
      alignItems="center"
      id="footer"
    >
      <HStack spacing={4}>
        <NextLink href="https://twitter.com/alimek_" passHref>
          <Link>
            <Icon
              as={FaTwitter}
              color="borderLight"
              _hover={{ color: "border" }}
              fontSize="x-large"
            />
          </Link>
        </NextLink>
        <NextLink href="https://www.linkedin.com/in/gmandziak" passHref>
          <Link>
            <Icon
              as={FaLinkedin}
              color="borderLight"
              _hover={{ color: "border" }}
              fontSize="x-large"
            />
          </Link>
        </NextLink>
        <NextLink href="https://github.com/alimek" passHref>
          <Link>
            <Icon
              as={FaGithub}
              color="borderLight"
              _hover={{ color: "border" }}
              fontSize="x-large"
            />
          </Link>
        </NextLink>
      </HStack>
      <Spacer />
      <HStack>
        <Text color="border" fontSize="small">
          &copy; {new Date().getFullYear()} - Grzegorz Mandziak
        </Text>
        <Text color="borderLight" fontSize="small">
          aka
        </Text>
        <Text color="border" fontSize="small">
          alimek
        </Text>
      </HStack>
    </Flex>
  );
};
