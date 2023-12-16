import Header from "../../components/Admin/Header/Header";
import SideBar from "../../components/Admin/SideBar/SideBar";
import styles from "./AdminLayout.module.css";
function AdminLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <SideBar />
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
