import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  Flex,
  Text,
  Button,
  Title,
  createPolymorphicComponent,
  TextProps,
  ButtonProps,
  Group,
  MediaQuery,
} from "@mantine/core";

function Home() {
  return (
    <StyledFlex
      initial={{ opacity: 0, translateX: -60 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <StyledGroup>
        <StyledText>Hello and welcome to my portfolio, my name is</StyledText>
        <MediaQuery smallerThan={700} styles={{ fontSize: "70px" }}>
          <MediaQuery largerThan={700} styles={{ fontSize: "120px" }}>
            <StyledTitle>Renato Castro</StyledTitle>
          </MediaQuery>
        </MediaQuery>

        <StyledText>
          And i&#8217;ll be happy to show you some of my works :&#41;
        </StyledText>

        <StyledButton
          variant="outline"
          size="xl"
          color="violet"
          component="a"
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=renattocasttro@gmail.com"
          target="_blank"
        >
          Get in touch!
        </StyledButton>
      </StyledGroup>
    </StyledFlex>
  );
}

export default Home;

const StyledTitle = styled(Title)`
  font-family: Gudea, sans-serif;
  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.4);
  color: #734bd1;
`;

const _StyledText = styled(Text)`
  font-size: 25px;
  font-family: Signita;
  color: #e9e9e9;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);
`;

const StyledText = createPolymorphicComponent<"text", TextProps>(_StyledText);

const _StyledButton = styled(Button)`
  font-family: Gudea;
  color: #e9e9e9;
  &:hover {
    background-color: #734bd1;
  }
  width: 200px;
`;

const StyledButton = createPolymorphicComponent<"button", ButtonProps>(
  _StyledButton
);

const StyledFlex = styled(motion.div)`
  display: flex;
  flex-diretion: column;
  width: 60vw;
  margin-top: 20px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledGroup = styled(Group)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
