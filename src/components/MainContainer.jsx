import React from "react";
import styles from "../styles/MainContainer.module.scss";

const MainContainer = ({ children, optionClass }) => {
  return <div className={`${styles.container} ${optionClass}`}>{children}</div>;
};

MainContainer.defaultProps = {
  optionClass: undefined,
};

export default MainContainer;
