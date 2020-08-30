import React from "react";
import styles from "./Home.module.scss";
import { Title } from "../../components/Title/Title";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { Button } from "../../components/Button/Button";
import { ReactComponent as ChecksLogo } from "../../assets/checks.svg";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
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
    </div>
  );
};
