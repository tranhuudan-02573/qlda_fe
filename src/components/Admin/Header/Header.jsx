import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Link to="/forum" className={styles.link}>
          FITNLU.COM
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.imgContainer}>
          <img
            src="https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg"
            alt="avatar"
            className={styles.avatar}
          />
        </div>
        <span className={styles.name}>Louis Hamberg</span>
      </div>
    </div>
  );
}

export default Header;
