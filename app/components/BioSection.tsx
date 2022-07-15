import {
  Divider,
  Flex,
  HStack,
  Heading,
  Wrap,
  Badge,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export interface ISection {
  year: string;
  languages?: string[];
  comments?: string[];
  events?: string[];
}

export enum Position {
  LEFT,
  RIGHT,
}

interface Props {
  position: Position;
  section: ISection;
}

export const BioSection = ({
  section: { year, languages, comments, events },
  position,
}: Props) => {
  const textAlign = position === Position.LEFT ? "right" : "left";
  const justifyContent = position === Position.LEFT ? "flex-end" : "flex-start";
  return (
    <HStack direction="row" w="full">
      {position === Position.RIGHT && <Divider orientation="vertical" />}
      <Flex flex={1} flexDirection="column">
        <Heading size="xl" color="primary" textAlign={textAlign}>
          {year}
        </Heading>
        {languages && (
          <HStack
            flex={1}
            flexDirection="row"
            justifyContent={justifyContent}
            mt="s"
          >
            <Wrap>
              {languages.map((l) => (
                <Badge key={l}>{l}</Badge>
              ))}
            </Wrap>
          </HStack>
        )}
        {events && (
          <>
            <Heading size="sm" mt="s">
              Big steps
            </Heading>
            <UnorderedList my="s">
              {events.map((event, index) => (
                <ListItem key={index}>{event}</ListItem>
              ))}
            </UnorderedList>
          </>
        )}
        {comments && (
          <>
            <Heading size="sm" mt="s">
              Achievements
            </Heading>
            <UnorderedList my="s">
              {comments.map((comment, index) => (
                <ListItem key={index}>{comment}</ListItem>
              ))}
            </UnorderedList>
          </>
        )}
      </Flex>
      {position === Position.LEFT && <Divider orientation="vertical" />}
    </HStack>
  );
};
