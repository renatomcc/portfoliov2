import styled from "@emotion/styled";
import {
  Button,
  Group,
  MediaQuery,
  Text,
  Title,
  Badge,
  Flex,
  createPolymorphicComponent,
  TextProps,
} from "@mantine/core";
import React from "react";
import { IProject } from "../pages/Projects";
import Image from "next/image";

function ProjectItem(props: IProject) {
  return (
    <StyledCard className="carousel-item">
      <MediaQuery smallerThan={1100} styles={{ display: "none" }}>
        <Image
          src={props.image}
          fill
          alt={props.altImage}
          style={{ opacity: "0.5", borderRadius: "10px" }}
        />
      </MediaQuery>
      <MediaQuery largerThan={1100} styles={{ display: "none" }}>
        <Image
          src={props.mobileImage}
          fill
          alt={props.altImage}
          style={{ opacity: "0.5", borderRadius: "10px" }}
        />
      </MediaQuery>

      <StyledGroup>
        <Flex gap="xs" wrap="wrap" justify="center" align="center">
          <Button
            color="grape"
            radius="xs"
            style={{ boxShadow: "2px 2px 2px rgba(0,0,0,0.4)" }}
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href={props.livelink}
          >
            WATCH LIVE
          </Button>
          <Button
            color="grape"
            radius="xs"
            style={{ boxShadow: "2px 2px 2px rgba(0,0,0,0.4)" }}
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href={props.repolink}
          >
            CODE
          </Button>
        </Flex>
        <Flex gap="xs" wrap="wrap" justify="center" align="center">
          {props.skills.map((skill: any) => (
            <Badge
              color="violet"
              size="lg"
              radius="sm"
              variant="filled"
              key={skill}
              style={{ boxShadow: "2px 2px 2px rgba(0,0,0,0.4)" }}
            >
              {skill}
            </Badge>
          ))}
        </Flex>
      </StyledGroup>
      <StyledDescription className="description-item">
        <Title order={4}>{props.altImage} </Title>
        <StyledText>{props.description}</StyledText>
      </StyledDescription>
    </StyledCard>
  );
}

export default ProjectItem;

const StyledCard = styled.div`
  background-color: transparent;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;

const StyledGroup = styled(Group)`
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
`;

const StyledDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  padding: 10px 0px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.6);
`;

const _StyledText = styled(Text)`
  font-family: Gudea;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0);
  font-weight: 500;
`;

const StyledText = createPolymorphicComponent<"text", TextProps>(_StyledText);
