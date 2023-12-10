import styles from "./Navbar.module.css";
import { categoriesForum } from "../../../utils/constanst";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar({ invite }) {
  const [selected, setSelected] = useState("Tất cả bài viết");
  const handleOnClick = (value) => {
    setSelected(value);
  };
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.home}>
          <Link to="/forum">
            {" "}
            <FaHome
              style={{ fontSize: "30px", fontWeight: "bold", color: "#46a9f0" }}
            />
          </Link>
        </li>
        {categoriesForum.map((cate, index) => {
          return (
            <li
              className={styles.item}
              onClick={() => handleOnClick(cate.name)}
              style={
                cate.name === selected
                  ? { backgroundColor: "#46A9f0" }
                  : { backgroundColor: "#919EAB" }
              }
            >
              <Link to={cate.path}>{cate.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
