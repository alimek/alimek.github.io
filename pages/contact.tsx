import {
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => (
  <Flex
    flex={1}
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <TableContainer mb="l">
      <Table size="lg">
        <Tbody>
          <Tr>
            <Td>
              <Text fontWeight="bold">e-mail</Text>
            </Td>
            <Td>
              <Link href="mailto:info@alimek.pl">info@alimek.pl</Link>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text fontWeight="bold">company info</Text>
            </Td>
            <Td>
              <Text>Usługi informatyczne Grzegorz Mandziak</Text>
              <Text>NIP: PL612-182-01-94</Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
    <Heading size="m" color="primary">
      Check my social media:
    </Heading>
    <HStack spacing={4} mt="m">
      <NextLink href="https://twitter.com/alimek_" passHref>
        <Link>
          <Icon
            as={FaTwitter}
            color="borderLight"
            _hover={{ color: "border" }}
            fontSize={50}
          />
        </Link>
      </NextLink>
      <NextLink href="https://www.linkedin.com/in/gmandziak" passHref>
        <Link>
          <Icon
            as={FaLinkedin}
            color="borderLight"
            _hover={{ color: "border" }}
            fontSize={50}
          />
        </Link>
      </NextLink>
      <NextLink href="https://github.com/alimek" passHref>
        <Link>
          <Icon
            as={FaGithub}
            color="borderLight"
            _hover={{ color: "border" }}
            fontSize={50}
          />
        </Link>
      </NextLink>
    </HStack>
  </Flex>
);

export default Contact;
