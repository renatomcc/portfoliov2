import styled from "@emotion/styled";
import { Title, Group, MediaQuery } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import ProjectItem from "../components/ProjectItem";
import Background from "../components/Background";
import { motion } from "framer-motion";

function Skills() {
  return (
    <>
      <Background />
      <MediaQuery
        largerThan={900}
        styles={{ width: "60vw", marginTop: "50px" }}
      >
        <MediaQuery smallerThan={900} styles={{ width: "100vw" }}>
          <StyledContainer
            initial={{ opacity: 0, translateY: -90 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div className="page-group">
              <StyledTitle className="page-title">&lt;projects&gt;</StyledTitle>
            </motion.div>
            <MediaQuery largerThan={900} styles={{ maxWidth: "60vw" }}>
              <MediaQuery smallerThan={900} styles={{ maxWidth: "100vw" }}>
                <motion.div
                  initial={{ opacity: 0, translateX: -90 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
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
                        image="/static/img/domgames.png"
                        altImage="Dom Games"
                        mobileImage="/static/img/domgamesMobile.png"
                        skills={["Html", "CSS", "Javascript"]}
                        description="My first Javascritp project ever created, a compilation of 8 different games build with original idea."
                        livelink="https://domgames-renatomcc.netlify.app"
                        repolink="https://github.com/renatomcc/dom-games"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <ProjectItem
                        image="/static/img/pokedex.png"
                        altImage="Pokedex"
                        mobileImage="/static/img/pokedexMobile.png"
                        skills={["React", "Typescript", "Sass"]}
                        description="Pokedex created using the PokéAPI, you can sort by filters, set your favorites, see the shiny form of the pokemon and search it by name."
                        livelink="https://pokedex-renatomcc.netlify.app"
                        repolink="https://github.com/renatomcc/pokedex"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <ProjectItem
                        image="/static/img/countries.png"
                        altImage="Around The World"
                        mobileImage="/static/img/countriesMobile.png"
                        skills={["React", "Typescript", "Sass"]}
                        description="Website created with the CountriesAPI, it contain every country flag and a modal with more information about the country. It also has a filter by region and search by name feature."
                        livelink="https://countries-renatomcc.netlify.app"
                        repolink="https://github.com/renatomcc/countries"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <ProjectItem
                        image="/static/img/ecommerce.png"
                        altImage="E-commerce"
                        mobileImage="/static/img/ecommerceMobile.png"
                        skills={[
                          "React",
                          "Typescript",
                          "Redux Toolkit",
                          "Styled Components",
                          "Mantine UI",
                        ]}
                        description="E-commerce website created with the FakestoreAPI and Redux Toolkit to global state management."
                        livelink="https://ecommerce-renatomcc.vercel.app"
                        repolink="https://github.com/renatomcc/redux-ecommerce"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <ProjectItem
                        image="/static/img/pokedexv2.png"
                        altImage="Pokedex v2"
                        mobileImage="/static/img/pokedexv2Mobile.png"
                        skills={[
                          "React",
                          "Typescript",
                          "Styled Components",
                          "Mantine UI",
                        ]}
                        description="Newer version of the Pokedex, with a lot more filters, features and information about the pokemons."
                        livelink="https://pokedex-renatomcc.netlify.app"
                        repolink="https://github.com/renatomcc/pokedexv2"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <ProjectItem
                        image="/static/img/league.png"
                        altImage="League Champions"
                        mobileImage="/static/img/leagueMobile.png"
                        skills={[
                          "NextJS",
                          "Typescript",
                          "Styled Components",
                          "Mantine UI",
                          "Framer Motion",
                        ]}
                        description="Website with every League of Legends champion created with the RiotGamesAPI, with class, title, skills and lore information of the champ."
                        livelink="https://league-nextjs.vercel.app"
                        repolink="https://github.com/renatomcc/league-nextjs"
                      />
                    </Carousel.Slide>
                  </Carousel>
                </motion.div>
              </MediaQuery>
            </MediaQuery>
          </StyledContainer>
        </MediaQuery>
      </MediaQuery>
    </>
  );
}

export default Skills;

const StyledContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 20px;
`;

export interface IProject {
  image: string;
  altImage: string;
  mobileImage: string;
  skills: string[];
  description: string;
  livelink: string;
  repolink: string;
}

const StyledTitle = styled(Title)`
  padding-bottom: 10px;
`;
