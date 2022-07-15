import {
  Divider,
  Flex,
  Heading,
  VStack,
  ScaleFade,
  Text,
} from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import { BioSection, ISection, Position } from "@/components/BioSection";

interface Props {
  data: ISection[];
}

const Bio: NextPage<Props> = ({ data }) => {
  return (
    <Flex flexDirection="column">
      <VStack spacing={2} mb="s">
        <Heading size="lg" textAlign="center">
          This is how things started
        </Heading>
        <Text textAlign="center">⬇️</Text>
      </VStack>
      {data.map((section, index) => {
        const isOdd = index % 2 === 0;

        return (
          <ScaleFade key={section.year} in delay={(index + 1) * 0.2}>
            <Flex flexDirection="column">
              <Flex flex={1}>
                <Flex flex={1} sx={{ mr: "-1px" }}>
                  {isOdd && (
                    <BioSection position={Position.LEFT} section={section} />
                  )}
                </Flex>
                <Flex flex={1}>
                  {!isOdd && (
                    <BioSection position={Position.RIGHT} section={section} />
                  )}
                </Flex>
              </Flex>
              {index !== data.length - 1 && (
                <Divider
                  color="borderLight"
                  variant="dashed"
                  alignSelf="center"
                  my="m"
                />
              )}
            </Flex>
          </ScaleFade>
        );
      })}
    </Flex>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => ({
  props: {
    data: [
      {
        year: "2008",
        languages: ["lua", "c++", "php", "html", "js", "xml"],
        comments: [
          "I was in high school, where journey started with OpenTibia Servers.",
          "I had opportunity to create and maintain our private game server from code, support as well as a player.",
        ],
      },
      {
        year: "2009",
        languages: ["php", "java", "c++", "android"],
        comments: [
          "I started studying",
          "Lots of project, from small to big ones, more or less interesting, but most of them web based.",
        ],
      },
      {
        year: "2013",
        languages: ["php", "js", "html", "css"],
        comments: [
          "Graduated, Bachelor of Engineering, Systems and computer networks, Wrocław University of Science of Technology.",
        ],
        events: [
          "First internship work, IT Service. Here I realised it's not for me. I wanted to be more challenged, more often than just develop network in IT offices.",
        ],
      },
      {
        year: "2014",
        languages: ["php", "html", "css", "symfony", "mysql"],
        events: [
          "Second internship work, PHP Developer.",
          "Got employed on perm contract after 3 month.",
          "Created my own company, I am freelancer now.",
        ],
      },
      {
        year: "2015",
        languages: ["angularjs", "js", "php", "html", "css", "bootstrap"],
        comments: [
          "Graduated, Master's degree, Systems and computer networks, Wrocław University of Science of Technology.",
          "1st project delivered, 1nd project failed, another started.",
        ],
      },
      {
        year: "2016",
        languages: ["angular 2", "react.js", "design systems", "node.js"],
        comments: [
          "Started migration from php developer, to front-end developer.",
          "Lots of never finished side project using new frameworks. Can't see better way to lean new stuff, just keep learning.",
        ],
      },
      {
        year: "2017",
        languages: [
          "terraform",
          "architecture as code",
          "aws",
          "ionic",
          "mongodb",
        ],
        comments: ["Tried first time ReactNative."],
      },
      {
        year: "2018",
        languages: [
          "ionic",
          "ios",
          "android",
          "cross platform app",
          "reactnative",
        ],
        comments: [
          "First mobile app using Cordova and Ionic framework. Mobile journey started.",
          "Migrated Ionic app to React Native.",
        ],
      },
      {
        year: "2019",
        languages: [
          "react native",
          "php",
          "angularjs",
          "nodejs",
          "aws",
          "ios",
          "android",
        ],
        events: [
          "Migrated to England (UK) for a year. It was great experience, nice english lesson.",
        ],
        comments: [
          "Less backend work, still lots of frontend, but even more hours with mobile.",
        ],
      },
      {
        year: "2020",
        languages: ["react native", "php", "angularjs", "react.js"],
        events: ["Migrated back Poland."],
      },
      {
        year: "2021",
        languages: [
          "react native",
          "php",
          "angularjs",
          "react.js",
          "AWS Lambda",
          "AWS SQS",
          "aws apigateway",
          "aws dynamodb",
        ],
        comments: [
          "Contributed to create my first serverless enterprise project on AWS.",
        ],
      },
      {
        year: "2022",
        languages: [
          "react.js",
          "react native",
          "php",
          "typescript",
          "node.js",
          "graphql",
          "prisma",
          "next.js",
        ],
      },
    ],
  },
});

export default Bio;
