import styled from "@emotion/styled";
import { Title, Group, MediaQuery } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import ProjectItem from "../components/ProjectItem";
import Background from "../components/Background";

function Skills() {
  return (
    <>
      <Background />
      <MediaQuery
        largerThan={900}
        styles={{ width: "60vw", marginTop: "50px" }}
      >
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
                  slideGap="xl"
                  controlsOffset="xl"
                  loop
                  withIndicators
                  speed={3}
                >
                  <Carousel.Slide>
                    <ProjectItem
                      image="/../public/images/projects/domgames.png"
                      mobileImage="/../public/images/projects/domgamesMobile.png"
                      skills={["Html", "CSS", "Javascript"]}
                      description="a"
                      livelink="https://domgames-renatomcc.netlify.app"
                      repolink="https://github.com/renatomcc/dom-games"
                    />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <ProjectItem
                      image="/../public/images/projects/pokedex.png"
                      mobileImage="/../public/images/projects/pokedexMobile.png"
                      skills={["React", "Typescript", "Sass"]}
                      description="a"
                      livelink="https://pokedex-renatomcc.netlify.app"
                      repolink="https://github.com/renatomcc/pokedex"
                    />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <ProjectItem
                      image="/../public/images/projects/countries.png"
                      mobileImage="/../public/images/projects/countriesMobile.png"
                      skills={["React", "Typescript", "Sass"]}
                      description="a"
                      livelink="https://countries-renatomcc.netlify.app"
                      repolink="https://github.com/renatomcc/countries"
                    />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <ProjectItem
                      image="/../public/images/projects/ecommerce.png"
                      mobileImage="/../public/images/projects/ecommerceMobile.png"
                      skills={[
                        "React",
                        "Typescript",
                        "Redux Toolkit",
                        "Styled Components",
                        "Mantine UI",
                      ]}
                      description="a"
                      livelink="https://ecommerce-renatomcc.vercel.app"
                      repolink="https://github.com/renatomcc/redux-ecommerce"
                    />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <ProjectItem
                      image="/../public/images/projects/pokedexv2.png"
                      mobileImage="/../public/images/projects/pokedexv2Mobile.png"
                      skills={[
                        "React",
                        "Typescript",
                        "Styled Components",
                        "Mantine UI",
                      ]}
                      description="a"
                      livelink="https://pokedex-renatomcc.netlify.app"
                      repolink="https://github.com/renatomcc/pokedexv2"
                    />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <ProjectItem
                      image="/../public/images/projects/league.png"
                      mobileImage="/../public/images/projects/leagueMobile.png"
                      skills={[
                        "NextJS",
                        "Typescript",
                        "Styled Components",
                        "Mantine UI",
                        "Framer Motion",
                      ]}
                      description="a"
                      livelink="https://league-nextjs.vercel.app"
                      repolink="https://github.com/renatomcc"
                    />
                  </Carousel.Slide>
                </Carousel>
              </MediaQuery>
            </MediaQuery>
          </StyledContainer>
        </MediaQuery>
      </MediaQuery>
    </>
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

export interface IProject {
  image: string;
  mobileImage: string;
  skills: string[];
  description: string;
  livelink: string;
  repolink: string;
}
