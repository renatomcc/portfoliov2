import styled from "@emotion/styled";
import {
  Button,
  Card,
  Group,
  MediaQuery,
  Text,
  Title,
  Badge,
  Flex,
} from "@mantine/core";
import React from "react";
import { IProject } from "../pages/Projects";
import Image from "next/image";

function ProjectItem(props: IProject) {
  return (
    <StyledCard className="carousel-item">
      <MediaQuery smallerThan={1100} styles={{ display: "none" }}>
        <Image src={props.image} fill alt="a" style={{ opacity: "0.5" }} />
      </MediaQuery>
      <MediaQuery largerThan={1100} styles={{ display: "none" }}>
        <Image
          src={props.mobileImage}
          fill
          alt="a"
          style={{ opacity: "0.5" }}
        />
      </MediaQuery>

      <StyledGroup>
        <Flex gap="xs" wrap="wrap" justify="center" align="center">
          <Button color="grape" radius="xs" size="lg">
            WATCH LIVE
          </Button>
          <Button color="grape" radius="xs" size="lg">
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
            >
              {skill}
            </Badge>
          ))}
        </Flex>
      </StyledGroup>
      <StyledDescription className="description-item">
        <Text>{props.description}</Text>
      </StyledDescription>
    </StyledCard>
  );
}

export default ProjectItem;

const StyledCard = styled.div`
  background-color: black;
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
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 15px;
  padding: 10px 0px;
`;
