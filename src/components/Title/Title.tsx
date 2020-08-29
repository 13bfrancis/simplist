import React from "react";
import styles from "./Title.module.scss";

interface props {
  style?: React.CSSProperties;
}

export const Title: React.FC<props> = ({ children, style }) => {
  return (
    <>
      <h2 className={styles.title} style={{ ...style }}>
        {children}
      </h2>
    </>
  );
};
