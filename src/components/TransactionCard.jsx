import styles from "../styles/TransactionCard.module.scss";
import { FiBox } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { BsHouseDoor } from "react-icons/bs";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { HiOutlineFire } from "react-icons/hi";
import { GiReceiveMoney } from "react-icons/gi";

import { useEffect, useState } from "react";

const CategoryIcon = ({ category }) => {
  const [style, setStyle] = useState({});
  const categoryStyle = () => {
    switch (category) {
      default: {
        return {
          background: "#ee27b9",
          icon: <GiReceiveMoney />,
          color: "#f4c4e7",
          sign: "+",
        };
      }
      case "Product": {
        return {
          background: "#fdeacc",
          icon: <FiBox />,
          color: "#f8aa35",
          sign: "-",
        };
      }

      case "Entertainment": {
        return {
          background: "#e4f1d5",
          icon: <IoGameControllerOutline />,
          color: "#92c44c",
          sign: "-",
        };
      }

      case "Bills": {
        return {
          background: "#b7dffd",
          icon: <BsHouseDoor />,
          color: "#5a92d6",
          sign: "-",
        };
      }

      case "Other": {
        return {
          background: "#ffbece",
          icon: <HiOutlineFire />,
          color: "#ff6275",
          sign: "-",
        };
      }
    }
  };

  useEffect(() => {
    setStyle(categoryStyle());
  }, [category]);
  return (
    <div
      className={styles.iconContainer}
      style={{ background: style.background, color: style.color }}
    >
      {style.icon}
    </div>
  );
};

CategoryIcon.defaultProps = {
  category: "Product",
};

const TransactionCard = ({ category, date, money, description, title }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* INFO */}
        <div className={styles.info}>
          <CategoryIcon category={category} />
          <div className={styles.categoryContainer}>
            <span className={styles.title}>{title}</span>
            <span className={styles.category}>{category}</span>
            <span className={styles.date}>{date}</span>
            <div
              className={`${visible ? styles.descriptionActive : undefined} ${
                styles.description
              }`}
            >
              <p>{description}</p>
            </div>
          </div>
        </div>

        {/* MONEY */}
        <div className={styles.moneyContainer}>
          <span>{`$${money}`}</span>
          <div
            className={styles.iconContainer}
            onClick={() => setVisible(!visible)}
            style={description ? {} : { opacity: 0, pointerEvents: "none" }}
          >
            {visible ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </div>
        </div>
      </div>
    </div>
  );
};

TransactionCard.defaultProps = {
  category: "Product",
  date: "06/06/22",
  title: "Home Groceries",
  description: "Some things for our kitchen",
  money: 85,
};

export default TransactionCard;
