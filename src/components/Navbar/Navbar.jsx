import styles from "./Navbar.module.css";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles["list-item"]}>
        <li className={styles.item} style={{ width: "100px" }}>
          <Link to="/">
            <IoHome />
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Đào tạo</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Nghiên cứu</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Thông báo</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Tuyển sinh</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Giảng viên</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Sinh viên</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Liên lạc cựu sinh viên</Link>
        </li>
      </ul>
      <hr style={{ borderBottom: "1px solid #4caf50" }} />
    </div>
  );
};
export default Navbar;
