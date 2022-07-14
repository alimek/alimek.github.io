import { Flex } from "@chakra-ui/react";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const Layout = ({ children }: PropsWithChildren) => {
  const [minHeight, setMinHeight] = useState(0);

  const handleResize = useCallback(() => {
    const headerHeight = document.getElementById("header")?.clientHeight ?? 0;
    const footerHeight = document.getElementById("footer")?.clientHeight ?? 0;
    setMinHeight(window.innerHeight - headerHeight - footerHeight - 2 * 45);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Flex flex={1} bgGradient="linear(to-b, gray.100, white)">
      <Flex
        flexDirection="column"
        flex={1}
        m={["xs", "m", "xl"]}
        border="solid"
        borderColor="borderLight"
        borderWidth={1}
        rounded={8}
        shadow="xl"
        overflow="hidden"
        backgroundColor="white"
      >
        <Header />
        <Flex
          flexDirection="column"
          flex={1}
          overflowY="auto"
          px={["m", "m", "l", "xl"]}
          py="m"
          sx={{ minHeight }}
        >
          {children}
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
};
