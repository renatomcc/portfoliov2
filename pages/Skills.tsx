import styled from "@emotion/styled";
import { Title, Group, Flex, MediaQuery } from "@mantine/core";
import Image from "next/image";
import Background from "../components/Background";
import { motion } from "framer-motion";

function Skills() {
  return (
    <>
      <Background />
      <MediaQuery largerThan={700} styles={{ width: "60vw" }}>
        <MediaQuery
          smallerThan={700}
          styles={{ width: "100vw", marginTop: "50px" }}
        >
          <StyledContainer>
            <StyledGroup
              initial={{ opacity: 0, translateY: -60 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Title>&lt;skills&gt;</Title>
            </StyledGroup>
            <StyledDiv>
              <StyledDiv
                initial={{ opacity: 0, translateY: 150 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <MediaQuery
                  smallerThan={500}
                  styles={{
                    background: "#734bd1",
                    width: "100%",
                    borderRadius: "5px",
                    padding: "0px 5px",
                    margin: "5px",
                  }}
                >
                  <StyledTitle
                    order={3}
                    underline
                    style={{ width: "100%", textAlign: "right" }}
                    italic
                  >
                    Building
                  </StyledTitle>
                </MediaQuery>
                <StyledSkillGroup className="skill-group-building">
                  <StyledSkill direction="column">
                    <Title order={4} align="center">
                      HTML
                    </Title>
                    <div className="item">
                      <Image src="/../public/images/html.png" alt="a" fill />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column">
                    <Title order={4} align="center">
                      Javascript
                    </Title>
                    <div className="item">
                      <Image
                        src="/../public/images/javascript.png"
                        alt="a"
                        fill
                      />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column">
                    <Title order={4} align="center">
                      Angular
                    </Title>
                    <div className="item">
                      <Image src="/../public/images/angular.png" alt="a" fill />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column" style={{ gap: "20px" }}>
                    <Title order={4} align="center">
                      React
                    </Title>
                    <div className="item">
                      <Image src="/../public/images/react.png" alt="a" fill />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column">
                    <Title order={4} align="center">
                      NextJS
                    </Title>
                    <div className="item">
                      <Image src="/../public/images/NextJs.png" alt="a" fill />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column" align="center">
                    <Title order={4} align="center">
                      Typescript
                    </Title>
                    <div className="item">
                      <Image
                        src="/../public/images/Typescript.png"
                        alt="a"
                        fill
                      />
                    </div>
                  </StyledSkill>
                </StyledSkillGroup>
              </StyledDiv>
              <StyledDiv
                initial={{ opacity: 0, translateY: 150 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <MediaQuery
                  smallerThan={500}
                  styles={{
                    background: "#734bd1",
                    width: "100%",
                    borderRadius: "5px",
                    padding: "0px 5px",
                    margin: "5px",
                  }}
                >
                  <StyledTitle order={3} underline italic>
                    Styling
                  </StyledTitle>
                </MediaQuery>
                <StyledSkillGroup className="skill-group-styling">
                  <StyledSkill direction="column" align="center">
                    <Title order={4} align="center">
                      CSS
                    </Title>
                    <div className="item">
                      <Image src="/../public/images/css.png" alt="a" fill />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column" align="center">
                    <Title order={4} align="center">
                      Sass
                    </Title>
                    <div className="item">
                      <Image src="/../public/images/sass.png" alt="a" fill />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column" align="center">
                    <Title order={4} align="center">
                      Bootstrap
                    </Title>
                    <div className="item">
                      <Image
                        src="/../public/images/bootstrap.png"
                        alt="a"
                        fill
                      />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column" align="center">
                    <Title order={4} align="center">
                      Mantine
                    </Title>
                    <div className="item">
                      <Image src="/../public/images/mantine.png" alt="a" fill />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column" align="center">
                    <Title order={4} align="center">
                      Styled
                      <br />
                      Components
                    </Title>
                    <div className="item">
                      <Image
                        src="/../public/images/styled-components.png"
                        alt="a"
                        fill
                      />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column" align="center">
                    <Title order={4} align="center">
                      Photoshop
                    </Title>
                    <div className="item">
                      <Image
                        src="/../public/images/photoshop.png"
                        alt="a"
                        fill
                      />
                    </div>
                  </StyledSkill>
                </StyledSkillGroup>
              </StyledDiv>
            </StyledDiv>
          </StyledContainer>
        </MediaQuery>
      </MediaQuery>
    </>
  );
}

export default Skills;

const StyledContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  color: white;
`;

const StyledDiv = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const StyledGroup = styled(motion.div)`
  border-bottom: 2px solid white;
  width: 100%;
  padding-bottom: 15px;
`;

const StyledSkillGroup = styled(Group)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const StyledSkill = styled(Flex)`
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
  user-select: none;
  transition: all linear 0.2s;
  &:hover {
    transform: translateY(-8px);
  }
  img {
    pointer-events: none;
  }
`;

const StyledTitle = styled(Title)`
  padding-bottom: 10px;
`;
