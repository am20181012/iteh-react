import React, { useState } from "react";
import styles from "../styles/Transaction.scss";
import MainContainer from "./MainContainer";
import Title from "./Title";

const Transaction = ({
  title,
  formTitle,
  category,
  buttonTitle,
  getTransaction,
}) => {
  const [transaction, setTransaction] = useState({
    title: "",
    money: 0,
    date: "",
    category: "",
    description: "",
  });

  const getTitle = (event) => {
    event.preventDefault();
    transaction.title = event.target.value;
    setTransaction(transaction);
  };

  const getMoney = (event) => {
    event.preventDefault();
    transaction.money = event.target.value;
    setTransaction(transaction);
  };

  const getDate = (event) => {
    event.preventDefault();
    transaction.date = event.target.value;
    setTransaction(transaction);
  };

  const getDescription = (event) => {
    event.preventDefault();
    transaction.description = event.target.value;
    setTransaction(transaction);
  };
  return (
    <MainContainer optionClass={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <Title>{title}</Title>
        </div>
        <div className="create">
          <h2>{formTitle}</h2>
          <form
            onSubmit={(event) => {
              getTransaction(transaction, event);
            }}
          >
            <input
              type="text"
              required
              name="title"
              placeholder="title"
              onChange={getTitle}
            />

            <input
              type="text"
              required
              name="money"
              placeholder="money"
              onChange={getMoney}
            />

            <input
              type="text"
              required
              name="date"
              placeholder="dd/MM/yy"
              onChange={getDate}
            />

            <textarea
              required
              name="description"
              placeholder="description"
              onChange={getDescription}
            ></textarea>

            {category}

            <button>{buttonTitle}</button>
          </form>
        </div>
      </div>
    </MainContainer>
  );
};

export default Transaction;
