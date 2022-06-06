import React from "react";

import styles from "../styles/Navbar.module.scss";

import ListItemLink from "./ListItemLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <div>Tracker</div>
        </Link>
      </div>
      <nav>
        <ul>
          {/* HOME */}
          <ListItemLink url="">
            <h3>Home</h3>
          </ListItemLink>

          {/* Add Expense */}
          <ListItemLink url="addExpense">
            <h3>Add Expense</h3>
          </ListItemLink>

          {/* Add Income */}
          <ListItemLink url="addIncome">
            <h3>Add Income</h3>
          </ListItemLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
