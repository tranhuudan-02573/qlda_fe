import styles from "./Sidebar.module.css";
import { categories } from "../../utils/constanst";
import { Link } from "react-router-dom";
import { useState } from "react";
const Sidebar = () => {
  const [selected, setSelected] = useState("Trang chủ");

  return (
    <div className={styles.container}>
      <ul className={styles["list-item"]}>
        {categories.map((cate, index) => {
          return (
            <li
              onClick={() => setSelected(cate.name)}
              key={index}
              className={styles.item}
              style={
                cate.name === selected
                  ? { backgroundColor: "#4caf50", color: "white" }
                  : { backgroundColor: " #D9D9D9" }
              }
            >
              {" "}
              <Link
                style={
                  cate.name === selected
                    ? { color: "white" }
                    : { color: "#000" }
                }
                to={cate.path}
              >
                {cate.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Sidebar;
