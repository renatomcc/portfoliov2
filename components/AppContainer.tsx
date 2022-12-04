import styled from "@emotion/styled";
import { AppShell, Group, Header, MediaQuery } from "@mantine/core";
import Link from "next/link";

export const AppContainer = ({ children }: any) => {
  return (
    <AppShell
      styles={{
        main: {
          width: "100vw",
          height: "auto",
          padding: "0px",
          margin: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#020c19",
        },
      }}
      fixed
      header={
        <Header
          height={60}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "none",
          }}
        >
          <MediaQuery
            largerThan={700}
            styles={{ fontSize: "25px", gap: "50px" }}
          >
            <Group position="center">
              <Link href="/AboutMe">
                <StyledButton>About Me</StyledButton>
              </Link>
              <Link href="/Skills">
                <StyledButton>Skills</StyledButton>
              </Link>
              <Link href="/Projects">
                <StyledButton>Projects</StyledButton>
              </Link>
              <Link href="/Links">
                <StyledButton>Links</StyledButton>
              </Link>
            </Group>
          </MediaQuery>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

const StyledButton = styled.div`
  color: #734bd1;
  font-weight: 600;
  font-family: Source;
  transition: all ease-in-out 0.2s;
  &:hover {
    transition: all ease-in-out 0.2s;
    transform: scale(1.2);
  }
`;
