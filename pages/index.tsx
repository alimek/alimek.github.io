import type { NextPage } from "next";
import {
  Box,
  Flex,
  useTheme,
  VStack,
  Heading,
  ScaleFade,
  Link,
  Text,
  Badge,
  HStack,
  useBreakpointValue,
  Wrap,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

const languages: string[] = ["javascript", "typescript"];
const frameworksLibraries: string[] = ["react.js", "reactnative", "next.js"];
const cloudProviders: string[] = ["aws"];
const otherThings: string[] = [
  "php",
  "clean code",
  "infrastructure as code",
  "design",
  "apple",
  "ios",
  "android",
];

const Home: NextPage = () => {
  const { colors } = useTheme();
  const imageScale = useBreakpointValue([0.15, 0.2, 0.25, 0.3]) ?? 0.3;
  const imageBackgroundSize = useBreakpointValue([280, 200, 400, 500]) ?? 500;

  return (
    <Flex flex={1} flexDirection={["column", "column", "row"]}>
      <Flex flex={1} flexDirection="column" justifyContent="center">
        <Flex flexDirection="column">
          <VStack spacing="2xl" alignItems="flex-start">
            <ScaleFade in delay={0.2}>
              <Heading size="xl" color="primary" variant="bold">
                Heya 👋
              </Heading>
            </ScaleFade>
            <ScaleFade in delay={0.5}>
              <Heading size="3xl" color="primary" variant="bold">
                {`I'm Greg`}
              </Heading>
            </ScaleFade>
            <ScaleFade in delay={0.8}>
              <Heading size="xl" color="primary" variant="bold">
                Software Developer
              </Heading>
            </ScaleFade>
          </VStack>
        </Flex>
        <ScaleFade in delay={1}>
          <Box mt={50}>
            <Text>
              I started my first work on last year of University (2013), since
              then I touched lots of different languages and tools.
            </Text>
            <Text>
              Some of them I just loved, some I just don&apos;t bother to
              remember as they may not even be still maintained.
            </Text>
            <Text mt="xs">
              At the end, what I really love to do is UI based stuff. Mainly web
              and mobile apps, but I do also backend and devops.
            </Text>
            <NextLink href="/bio" passHref>
              <Link>
                <Text fontWeight="bold" color="primary" mt="m">
                  Read my bio
                </Text>
              </Link>
            </NextLink>
            <Box mt="m">
              <Text fontWeight="light">Preferred languages:</Text>
              <HStack mt="xs" spacing={2}>
                <Wrap>
                  {languages.map((value) => (
                    <Badge key={value}>{value}</Badge>
                  ))}
                </Wrap>
              </HStack>
            </Box>
            <Box mt="m">
              <Text fontWeight="light">Preferred frameworks/libraries:</Text>
              <HStack mt="xs" spacing={2}>
                <Wrap>
                  {frameworksLibraries.map((value) => (
                    <Badge key={value}>{value}</Badge>
                  ))}
                </Wrap>
              </HStack>
            </Box>
            <Box mt="m">
              <Text fontWeight="light">Preferred cloud provider:</Text>
              <HStack mt="xs" spacing={2}>
                <Wrap>
                  {cloudProviders.map((value) => (
                    <Badge key={value}>{value}</Badge>
                  ))}
                </Wrap>
              </HStack>
            </Box>
            <Box mt="xl">
              <Text fontWeight="light" fontSize="small">
                Other things:
              </Text>
              <HStack mt="xs" spacing={2}>
                <Wrap>
                  {otherThings.map((value) => (
                    <Badge key={value}>{value}</Badge>
                  ))}
                </Wrap>
              </HStack>
            </Box>
          </Box>
        </ScaleFade>
      </Flex>
      <Flex
        width={imageBackgroundSize}
        alignItems="center"
        justifyContent="flex-end"
        py={"xl"}
        position="relative"
        alignSelf="center"
      >
        <Box
          position="absolute"
          right={0}
          left={0}
          top={"50%"}
          marginTop={-imageBackgroundSize / 2}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1497 1541"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M432.422 1456.26C-359.738 1083.84 56.9492 261.901 718.606 38.721C1099.02 -104.284 1026.91 185.343 1291.93 315.337C1785.38 557.379 1345.19 1885.38 432.422 1456.26Z"
              fill={colors.primary}
            />
          </svg>
        </Box>
        <Flex
          flex={1}
          justifyContent="space-between"
          alignItems={"center"}
          zIndex={2}
          fontSize={["small", "small", "medium", "x-large"]}
        >
          <Box mt={["m", "m", "xl", "3xl"]} ml={["l", "l", "l", 10]}>
            <Text
              textAlign="center"
              fontWeight="bold"
              color="white"
              textTransform="uppercase"
            >
              Everything
            </Text>
            <Text
              fontWeight="bold"
              textAlign="center"
              color="white"
              textTransform="uppercase"
            >
              is
            </Text>
            <Text
              textAlign="center"
              fontWeight="bold"
              color="white"
              textTransform="uppercase"
            >
              possible
            </Text>
          </Box>
          <Image
            style={{ alignSelf: "flex-end" }}
            width={961 * imageScale}
            height={1706 * imageScale}
            src={require("@/assets/me.png")}
            alt="alimek"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
