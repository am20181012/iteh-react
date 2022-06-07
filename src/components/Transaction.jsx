import React from "react";
import styles from "../styles/Transaction.scss";
import MainContainer from "./MainContainer";
import Title from "./Title";

const Transaction = ({ title, formTitle, category, buttonTitle }) => {
  return (
    <MainContainer optionClass={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <Title>{title}</Title>
        </div>
        <div className="create">
          <h2>{formTitle}</h2>
          <form>
            <input type="text" required name="title" placeholder="title" />

            <input type="text" required name="money" placeholder="money" />

            <input type="text" required name="date" placeholder="dd/MM/yy" />

            <textarea required name="info" placeholder="description"></textarea>

            {category}

            <button>{buttonTitle}</button>
          </form>
        </div>
      </div>
    </MainContainer>
  );
};

export default Transaction;
