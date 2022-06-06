import React, { useState } from "react";
import styles from "../styles/MobileNavbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import ListItemLink from "./ListItemLink";

const MobileNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <div className={styles.container}>
      <div>
        {/* BARS */}
        <div
          className={`${styles.iconContiner} ${styles.bars}`}
          onClick={() => setNavOpen(true)}
        >
          <FaBars />
        </div>
        {/* NAV */}
        <nav className={navOpen ? styles.navActive : undefined}>
          <ul>
            <div
              className={`${styles.iconContainer} ${styles.times}`}
              onClick={() => setNavOpen(false)}
            >
              <FaTimes />
            </div>

            {/* HOME */}
            <ListItemLink
              url=""
              optionClass={styles.linkColor}
              clickHandler={closeNav}
            >
              <h3>Home</h3>
            </ListItemLink>

            {/* Add Expense */}
            <ListItemLink
              url="addExpense"
              optionClass={styles.linkColor}
              clickHandler={closeNav}
            >
              <h3>Expense</h3>
            </ListItemLink>

            {/* Add Income */}
            <ListItemLink
              url="addIncome"
              optionClass={styles.linkColor}
              clickHandler={closeNav}
            >
              <h3>Income</h3>
            </ListItemLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
