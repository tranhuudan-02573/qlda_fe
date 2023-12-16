import styles from "./SideBar.module.css";
import { categoriesAdmin } from "../../../utils/constants.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CiLogout } from "react-icons/ci";

function SideBar() {
  const [selected, setSelected] = useState("");
  const handleOnClick = (value) => {
    setSelected(value);
  };
  return (
    <div className={styles.wrapper}>
      <ul className={styles["list-item"]}>
        {categoriesAdmin.map((item) => {
          return (
            <li className={styles.item}>
              <Link
                className={styles.link}
                onClick={() => handleOnClick(item.name)}
                to={item.path}
                style={
                  selected === item.name
                    ? { color: "#e87a29" }
                    : { color: "#969696" }
                }
              >
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.title}>{item.name}</span>
              </Link>
            </li>
          );
        })}
        <li className={styles.item}>
          <Link
            className={styles.link}
            onClick={() => handleOnClick("Đăng xuất")}
            style={
              selected === "Đăng xuất"
                ? { color: "#e87a29" }
                : { color: "#969696" }
            }
          >
            <span className={styles.icon}>
              <CiLogout />
            </span>
            <span className={styles.title}>Đăng xuất</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
