import Header from "../../../components/Forum/Header/Header";
import styles from "../ForumLayout.module.css";
import { CiSearch } from "react-icons/ci";
function ForumLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.search}>
        <CiSearch style={{ fontSize: "20px" }} className={styles.icon} />
        <input type="text" className={styles["search-input"]} />
        <button>Search</button>
      </div>
      <img src="https://fit.hcmuaf.edu.vn/data/banner_kcntt.png" alt="khoa" />
      {children}
    </div>
  );
}
export default ForumLayout;
