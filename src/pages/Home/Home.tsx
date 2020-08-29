import React from "react";
import styles from "./Home.module.scss";
import { Title } from "../../components/Title/Title";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { Button } from "../../components/Button/Button";
import { ReactComponent as ChecksLogo } from "../../assets/checks.svg";

export const Home = () => {
  return (
    <div className={styles.container}>
      <Title style={{ marginBottom: ".25rem" }}>Simplist</Title>
      <Subtitle>Turn your life into a checklist</Subtitle>
      <Button>Get Started</Button>
      <ChecksLogo />
    </div>
  );
};
