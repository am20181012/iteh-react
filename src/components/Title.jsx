import React from "react";
import styles from "../styles/Title.module.scss";

const Title = ({ children }) => {
  return (
    <div className={styles.title}>
      <h2>{children}</h2>
    </div>
  );
};

export default Title;
