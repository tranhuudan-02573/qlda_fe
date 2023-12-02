import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./DefaultLayout.module.css";
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <div className={styles.container}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
