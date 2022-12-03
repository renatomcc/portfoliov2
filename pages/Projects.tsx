import styled from "@emotion/styled";
import {
  Title,
  Group,
  MediaQuery,
  ActionIcon,
  ActionIconProps,
  createPolymorphicComponent,
  keyframes,
} from "@mantine/core";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import ProjectItem from "../components/ProjectItem";

function Skills() {
  return (
    <MediaQuery largerThan={700} styles={{ width: "60vw", marginTop: "50px" }}>
      <MediaQuery
        smallerThan={700}
        styles={{ width: "100vw", marginTop: "50px" }}
      >
        <StyledContainer>
          <StyledGroup>
            <Title>&lt;projects&gt;</Title>
          </StyledGroup>
          <Carousel
            slideSize="70%"
            height='70vh'
            slideGap="xs"
            controlsOffset="xs"
            withIndicators
            loop
          >
            <Carousel.Slide>
              <ProjectItem />
            </Carousel.Slide>
            <Carousel.Slide>
              <ProjectItem />
            </Carousel.Slide>
            <Carousel.Slide>
              <ProjectItem />
            </Carousel.Slide>
            <Carousel.Slide>
              <ProjectItem />
            </Carousel.Slide>
            <Carousel.Slide>
              <ProjectItem />
            </Carousel.Slide>
            <Carousel.Slide>
              <ProjectItem />
            </Carousel.Slide>
          </Carousel>
        </StyledContainer>
      </MediaQuery>
    </MediaQuery>
  );
}

export default Skills;

const StyledContainer = styled(Group)`
  display: flex;
  flex-direction: column;
  color: white;
  background-color: yellow;
`;

const StyledGroup = styled(Group)`
  border-bottom: 2px solid white;
  width: 100%;
  background: blue;
`;
