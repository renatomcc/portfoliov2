import styled from "@emotion/styled";
import { Group, MediaQuery } from "@mantine/core";
import Link from "next/link";

export const Navbar = () => {
  return (
    <MediaQuery largerThan={700} styles={{ fontSize: "25px", gap: "50px" }}>
      <StyledGroup position="center">
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
      </StyledGroup>
    </MediaQuery>
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

const StyledGroup = styled(Group)`
  position: fixed;
  top: 0;
`;
