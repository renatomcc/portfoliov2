import styled from "@emotion/styled";
import { Title, Group, MediaQuery } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import ProjectItem from "../components/ProjectItem";

function Skills() {
  return (
    <MediaQuery largerThan={900} styles={{ width: "60vw", marginTop: "50px" }}>
      <MediaQuery
        smallerThan={900}
        styles={{ width: "100vw", marginTop: "50px" }}
      >
        <StyledContainer>
          <StyledGroup>
            <Title>&lt;projects&gt;</Title>
          </StyledGroup>
          <MediaQuery largerThan={900} styles={{ maxWidth: "60vw" }}>
            <MediaQuery smallerThan={900} styles={{ maxWidth: "100vw" }}>
              <Carousel
                slideSize="80%"
                height="70vh"
                slideGap="xs"
                controlsOffset="xl"
                loop
                withIndicators
                speed={2.5}
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
`;

const StyledGroup = styled(Group)`
  border-bottom: 2px solid white;
  width: 100%;
`;
