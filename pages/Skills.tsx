import styled from "@emotion/styled";
import {
  Title,
  Text,
  Group,
  Flex,
  MediaQuery,
  ActionIcon,
  ActionIconProps,
  createPolymorphicComponent,
  keyframes,
} from "@mantine/core";
import Image from "next/image";

function Skills() {
  return (
    <MediaQuery largerThan={700} styles={{ width: "60vw" }}>
      <MediaQuery
        smallerThan={700}
        styles={{ width: "100vw", marginTop: "50px" }}
      >
        <StyledContainer>
          <StyledGroup>
            <Title>&lt;skills&gt;</Title>
          </StyledGroup>
          <StyledDiv>
            <StyledDiv>
              <MediaQuery
                smallerThan={500}
                styles={{
                  background: "rgba(255,255,255,0.4)",
                  width: "100%",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                <Title
                  order={3}
                  underline
                  style={{ width: "100%", textAlign: "right" }}
                  italic
                >
                  Building
                </Title>
              </MediaQuery>
              <StyledSkillGroup className="skill-group-building">
                <StyledSkill direction="column">
                  <Title order={4} align="center">
                    HTML
                  </Title>
                  <Image
                    src="/../public/images/html.png"
                    alt="a"
                    width={80}
                    height={80}
                  />
                </StyledSkill>
                <StyledSkill direction="column">
                  <Title order={4} align="center">
                    Javascript
                  </Title>
                  <Image
                    src="/../public/images/javascript.png"
                    alt="a"
                    width={80}
                    height={80}
                  />
                </StyledSkill>
                <StyledSkill direction="column">
                  <Title order={4} align="center">
                    Angular
                  </Title>
                  <Image
                    src="/../public/images/angular.png"
                    alt="a"
                    width={75}
                    height={80}
                  />
                </StyledSkill>
                <StyledSkill direction="column" style={{ gap: "20px" }}>
                  <Title order={4} align="center">
                    React
                  </Title>
                  <Image
                    src="/../public/images/react.png"
                    alt="a"
                    width={80}
                    height={75}
                  />
                </StyledSkill>
                <StyledSkill direction="column">
                  <Title order={4} align="center">
                    NextJS
                  </Title>
                  <Image
                    src="/../public/images/nextjs.png"
                    alt="a"
                    width={80}
                    height={80}
                  />
                </StyledSkill>
                <StyledSkill direction="column" align="center">
                  <Title order={4} align="center">
                    Typescript
                  </Title>
                  <Image
                    src="/../public/images/typescript.png"
                    alt="a"
                    width={80}
                    height={80}
                  />
                </StyledSkill>
              </StyledSkillGroup>
            </StyledDiv>
            <StyledDiv>
              <MediaQuery
                smallerThan={500}
                styles={{
                  background: "rgba(255,255,255,0.4)",
                  width: "100%",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                <Title order={3} underline italic>
                  Styling
                </Title>
              </MediaQuery>
              <StyledSkillGroup className="skill-group-styling">
                <StyledSkill direction="column" align="center">
                  <Title order={4} align="center">
                    CSS
                  </Title>
                  <Image
                    src="/../public/images/css.png"
                    alt="a"
                    width={80}
                    height={80}
                  />
                </StyledSkill>
                <StyledSkill direction="column" align="center">
                  <Title order={4} align="center">
                    Sass
                  </Title>
                  <Image
                    src="/../public/images/sass.png"
                    alt="a"
                    width={80}
                    height={80}
                  />
                </StyledSkill>
                <StyledSkill direction="column" align="center">
                  <Title order={4} align="center">
                    Bootstrap
                  </Title>
                  <Image
                    src="/../public/images/bootstrap.png"
                    alt="a"
                    width={80}
                    height={80}
                  />
                </StyledSkill>
                <StyledSkill direction="column" align="center">
                  <Title order={4} align="center">
                    Mantine
                  </Title>
                  <Image
                    src="/../public/images/mantine.png"
                    alt="a"
                    width={80}
                    height={80}
                  />
                </StyledSkill>
                <StyledSkill direction="column" align="center">
                  <Title order={4} align="center">
                    Styled
                    <br />
                    Components
                  </Title>
                  <Image
                    src="/../public/images/styled-components.png"
                    alt="a"
                    width={80}
                    height={80}
                  />
                </StyledSkill>
                <StyledSkill direction="column" align="center">
                  <Title order={4} align="center">
                    Photoshop
                  </Title>
                  <Image
                    src="/../public/images/photoshop.png"
                    alt="a"
                    width={80}
                    height={80}
                  />
                </StyledSkill>
              </StyledSkillGroup>
            </StyledDiv>
          </StyledDiv>
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

const StyledDiv = styled(Group)`
  width: 100%;
  display: flex;
  padding: 10px;
`;

const StyledGroup = styled(Group)`
  border-bottom: 2px solid white;
  width: 100%;
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
    transform: scale(1.2);
  }
  img {
    pointer-events: none;
  }
`;
