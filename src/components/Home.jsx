import React from "react";
import styles from "../styles/Home.module.scss";

import MainContiner from "./MainContainer";
import Title from "./Title";
import CategoryCard from "./CategoryCard";

const Home = () => {
  return (
    <MainContiner optionClass={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <Title>Home</Title>
        </div>

        <div className={styles.categories}>
          <Title>Categories</Title>
          <div className={styles.content}>
            <CategoryCard category="Income" money={0} />
            <CategoryCard category="Product" money={0} />
            <CategoryCard category="Bills" money={0} />
            <CategoryCard category="Entertainment" money={0} />
            <CategoryCard category="Other" money={0} />
          </div>
        </div>
      </div>
    </MainContiner>
  );
};

export default Home;
