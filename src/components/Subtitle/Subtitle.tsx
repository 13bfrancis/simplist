import React from "react";
import styles from "./Subtitle.module.scss";

interface props {
  style?: React.CSSProperties;
}

export const Subtitle: React.FC<props> = ({ style, children }) => {
  return (
    <>
      <p className={styles.subtitle} style={{ ...style }}>
        {children}
      </p>
    </>
  );
};
