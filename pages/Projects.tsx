import styled from "@emotion/styled";
import { Title, Group, MediaQuery } from "@mantine/core";
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
          <MediaQuery largerThan={700} styles={{ maxWidth: "60vw" }}>
            <MediaQuery smallerThan={700} styles={{ maxWidth: "100vw" }}>
              <Carousel
                slideSize="80%"
                height="80vh"
                slideGap="xs"
                controlsOffset="xl"
                loop
                withIndicators
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
                <Carousel.Slide>
                  <ProjectItem />
                </Carousel.Slide>
              </Carousel>
            </MediaQuery>
          </MediaQuery>
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
