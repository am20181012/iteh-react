import styles from "../styles/CategoryCard.module.scss";
import { FiBox } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { BsHouseDoor } from "react-icons/bs";
import { HiOutlineFire } from "react-icons/hi";
import { GiReceiveMoney, GiChart } from "react-icons/gi";

import { useEffect, useState } from "react";

const CategoryCard = ({ category, money }) => {
  const [style, setStyle] = useState({});
  const categoryStyle = () => {
    switch (category) {
      default: {
        return {
          ctg: "Income",
          icon: <GiReceiveMoney style={{ color: "#f4c4e7" }} />,
          background: "#ee27b9",
          sign: "+",
        };
      }
      case "Product":
      case 1: {
        return {
          ctg: "Product",
          icon: <FiBox style={{ color: "#fdeacc" }} />,
          background: "#f8aa35",
          sign: "-",
        };
      }

      case "Entertainment":
      case 2:
        return {
          ctg: "Entertainment",
          icon: <IoGameControllerOutline style={{ color: "#e4f1d5" }} />,
          background: "#92c44c",
          sign: "-",
        };

      case "Bills":
      case 3: {
        return {
          ctg: "Bills",
          icon: <BsHouseDoor style={{ color: "#b7dffd" }} />,
          background: "#5a92d6",
          sign: "-",
        };
      }

      case "Other":
      case 4: {
        return {
          ctg: "Other",
          icon: <HiOutlineFire style={{ color: "#ffbece" }} />,
          background: "#ff6275",
          sign: "-",
        };
      }

      case "Bilans":
      case 5: {
        return {
          ctg: "Bilans",
          icon: <GiChart style={{ color: "#f8c2c7" }} />,
          background: "#f44554",
          sign: "",
        };
      }
    }
  };

  useEffect(() => {
    setStyle(categoryStyle());
  }, []);

  return (
    <div className={styles.container} style={{ background: style.background }}>
      <div className={styles.inner}>
        <div className={styles.iconContainer}>{style.icon}</div>
        <div className={styles.info}>
          <div className={styles.title}>{style.ctg}</div>
          <div className={styles.money}>{`${
            category === "Bilans"
              ? money < 0
                ? "-"
                : money === 0
                ? ""
                : "+"
              : style.sign
          }$${Math.abs(money)}`}</div>
        </div>
      </div>
    </div>
  );
};

CategoryCard.defaultProps = {
  category: "Other",
  money: 0,
  sign: "-",
};

export default CategoryCard;
