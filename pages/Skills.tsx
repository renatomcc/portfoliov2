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
          styles={{ width: "100vw", marginTop: "30px" }}
        >
          <StyledContainer>
            <motion.div
              initial={{ opacity: 0, translateY: -60 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="page-group"
            >
              <Title className="page-title">&lt;skills&gt;</Title>
            </motion.div>
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
                    marginBottom: "10px",
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
                    <StyledSkillTitle order={4}>HTML</StyledSkillTitle>
                    <div className="item">
                      <Image src="/static/img/html.png" alt="Html" fill />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column">
                    <StyledSkillTitle order={4}>
                      Javascript
                    </StyledSkillTitle>
                    <div className="item">
                      <Image
                        src="/static/img/javascript.png"
                        alt="a"
                        fill
                      />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column">
                    <StyledSkillTitle order={4}>
                      Angular
                    </StyledSkillTitle>
                    <div className="item">
                      <Image
                        src="/static/img/angular.png"
                        alt="Angular"
                        fill
                      />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column" style={{ gap: "20px" }}>
                    <StyledSkillTitle order={4}>
                      React
                    </StyledSkillTitle>
                    <div className="item">
                      <Image
                        src="/static/img/react.png"
                        alt="React"
                        fill
                      />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column">
                    <StyledSkillTitle order={4}>
                      NextJS
                    </StyledSkillTitle>
                    <div className="item">
                      <Image
                        src="/static/img/NextJs.png"
                        alt="NextJS"
                        fill
                      />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column" align="center">
                    <StyledSkillTitle order={4}>
                      Typescript
                    </StyledSkillTitle>
                    <div className="item">
                      <Image
                        src="/static/img/Typescript.png"
                        alt="Typescript"
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
                    marginBottom: "10px",
                  }}
                >
                  <StyledTitle order={3} underline italic>
                    Styling
                  </StyledTitle>
                </MediaQuery>
                <StyledSkillGroup className="skill-group-styling">
                  <StyledSkill direction="column" align="center">
                    <StyledSkillTitle order={4}>
                      CSS
                    </StyledSkillTitle>
                    <div className="item">
                      <Image src="/static/img/css.png" alt="Css" fill />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column" align="center">
                    <StyledSkillTitle order={4}>
                      Sass
                    </StyledSkillTitle>
                    <div className="item">
                      <Image src="/static/img/sass.png" alt="Sass" fill />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column" align="center">
                    <StyledSkillTitle order={4}>
                      Bootstrap
                    </StyledSkillTitle>
                    <div className="item">
                      <Image
                        src="/static/img/bootstrap.png"
                        alt="Bootstrap"
                        fill
                      />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column" align="center">
                    <StyledSkillTitle order={4}>
                      Mantine
                    </StyledSkillTitle>
                    <div className="item">
                      <Image
                        src="/static/img/mantine.png"
                        alt="Mantine"
                        fill
                      />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column" align="center">
                    <StyledSkillTitle order={4}>
                      Styled
                      <br />
                      Components
                    </StyledSkillTitle>
                    <div className="item">
                      <Image
                        src="/static/img/styled-components.png"
                        alt="Styled Components"
                        fill
                      />
                    </div>
                  </StyledSkill>
                  <StyledSkill direction="column" align="center">
                    <StyledSkillTitle order={4}>
                      Photoshop
                    </StyledSkillTitle>
                    <div className="item">
                      <Image
                        src="/static/img/photoshop.png"
                        alt="Photoshop"
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
`;

const StyledDiv = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
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
  padding-bottom: 5px;
`;

const StyledSkillTitle = styled(Title)`
  text-align: center;
  color: #734bd1;
`;
