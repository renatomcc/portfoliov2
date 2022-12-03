import styled from "@emotion/styled";
import { Button, Card, Group, Text, Title } from "@mantine/core";
import React from "react";

function ProjectItem() {
  return (
    <StyledCard className="carousel-item">
      <StyledGroup>
        <Group>
          <Button>WATCH LIVE</Button>
          <Button>CODE</Button>
        </Group>
        <Title order={4}>NextJS - Styled Components - Mantine</Title>
      </StyledGroup>
      <StyledDescription className="description-item">
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          consequatur quas placeat ipsa ipsam nobis iure laudantium architecto,
          aspernatur dolore minus eos nemo minima, error voluptatum repellendus
          suscipit atque reprehenderit. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit.
        </Text>
      </StyledDescription>
    </StyledCard>
  );
}

export default ProjectItem;

const StyledCard = styled.div`
  background-color: grey;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;

const StyledGroup = styled(Group)`
  display: flex;
  flex-direction: column;
`;

const StyledDescription = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 15px;
  padding: 10px 0px;
`;
