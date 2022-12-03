import styled from "@emotion/styled";
import { Title, Text, Group, Flex, Grid, MediaQuery } from "@mantine/core";
import Image from "next/image";
import "../styles/Home.module.scss";

function AboutMe() {
  return (
    <MediaQuery largerThan={700} styles={{ width: "60vw" }}>
      <MediaQuery smallerThan={700} styles={{ width: "90vw" }}>
        <StyledGroup>
          <>
            <Group>
              <div className="image-home">
                <Image
                  src="https://i.redd.it/bs5r0f28sxh51.jpg"
                  fill
                  alt="cinthya"
                  style={{
                    borderRadius: "8px",
                    margin: "15px 0px 0px 15px",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </Group>
            <TextGroup className="text-home">
              <StyledText>
                I&apos;m a front-end developer that loves to create and learn
                new things everyday. <br />I had my first blog when i was 11yo
                and since them i never lost interest in this beautiful area, i
                hope you like what i have to show and maybe we can work together
                in the future!
              </StyledText>
            </TextGroup>
          </>
        </StyledGroup>
      </MediaQuery>
    </MediaQuery>
  );
}

export default AboutMe;

const StyledGroup = styled(Group)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 500px;
`;

const TextGroup = styled(Group)`
  position: absolute;
  z-index: 1;
  text-align: center;
`;

const StyledText = styled.div`
  font-family: Signita;
  font-weight: 500;
  color: white;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);
`;
