import styled from "@emotion/styled";
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
import "../styles/Home.module.scss";

function Home() {
  return (
    <StyledFlex
      gap="xs"
      justify="center"
      align="left"
      direction="column"
      wrap="wrap"
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

        <StyledButton variant="outline" size="xl" color="violet">
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
  color: #e9e9e9;
  &:hover {
    background-color: #734bd1;
  }
  width: 200px;
`;

const StyledButton = createPolymorphicComponent<"button", ButtonProps>(
  _StyledButton
);

const StyledFlex = styled(Flex)`
  width: 60vw;
  margin-top: 20px;
  height: 100vh;
`;

const StyledGroup = styled(Group)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
