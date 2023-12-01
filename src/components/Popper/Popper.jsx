import styles from "./Popper.module.css";
function Popper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Popper;
