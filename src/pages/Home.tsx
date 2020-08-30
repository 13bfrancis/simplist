import React from "react";
import { Title } from "components/Title";
import { Subtitle } from "components/Subtitle";
import { Button } from "components/Button";
import { ReactComponent as ChecksLogo } from "assets/checks.svg";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <Title style={{ marginBottom: ".25rem" }}>Simplist</Title>
      <Subtitle>Turn your life into a checklist</Subtitle>
      <ChecksLogo style={{ margin: "3rem 0" }} />
      <Button
        onClick={() => {
          history.push("/sign-in");
          //throw new Error("Broken Code Test");
        }}
      >
        Get Started
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
