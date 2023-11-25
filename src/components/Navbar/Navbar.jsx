import styles from "./Navbar.module.css";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { categories } from "../../utils/constanst";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles["list-item"]}>
        <li className={styles.item} style={{ width: "100px" }}>
          <Link to="/">
            <IoHome />
          </Link>
        </li>
        {categories.map((cate, index) => {
          if (cate.name !== "Trang chủ") {
            return (
              <li className={styles.item}>
                <Link to={cate.path}>{cate.name}</Link>
              </li>
            );
          }
        })}
      </ul>
      <hr style={{ borderBottom: "1px solid #4caf50" }} />
    </div>
  );
};
export default Navbar;
