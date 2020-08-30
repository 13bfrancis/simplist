import React from "react";
import styles from "./Button.module.scss";

interface props {
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<props> = ({
  children,
  style,
  onClick,
  className,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${styles.button} ${className ? className : ""}`}
        style={{ ...style }}
      >
        {children}
      </button>
    </>
  );
};
