import React from "react";
import styles from "../styles/Home.module.scss";

import MainContiner from "./MainContainer";
import Title from "./Title";
import CategoryCard from "./CategoryCard";
import TransactionCard from "./TransactionCard";

const Home = ({
  transactions,
  income,
  productExpense,
  billsExpense,
  entertainmentExpense,
  otherExpense,
}) => {
  return (
    <MainContiner optionClass={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <Title>Home</Title>
        </div>

        <div className={styles.categories}>
          <Title>Categories</Title>
          <div className={styles.content}>
            <CategoryCard category="Income" money={income} />
            <CategoryCard category="Product" money={productExpense} />
            <CategoryCard category="Bills" money={billsExpense} />
            <CategoryCard
              category="Entertainment"
              money={entertainmentExpense}
            />
            <CategoryCard category="Other" money={otherExpense} />
          </div>
        </div>

        <div className={styles.transactions}>
          <Title>Transactions</Title>
          <div className={styles.content}>
            {transactions.map((transaction) => (
              <TransactionCard
                key={transaction.id}
                transaction={transaction}
              ></TransactionCard>
            ))}
          </div>
        </div>
      </div>
    </MainContiner>
  );
};

export default Home;
