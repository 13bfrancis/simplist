import React from "react";
import styles from "./Button.module.scss";

interface props {
  style?: React.CSSProperties;
}

export const Button: React.FC<props> = ({ children, style }) => {
  return (
    <>
      <button className={styles.button} style={{ ...style }}>
        {children}
      </button>
    </>
  );
};
