import logo from "../../assets/logo.png";
import picture from "../../assets/Untitled.png";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.center}>
          <h1
            style={{
              color: "#071CD6",
              fontWeight: "800",
              textTransform: "uppercase",
              fontSize: "40px",
            }}
          >
            Trường đại học Nông Lâm TPHCM
          </h1>
          <h1
            style={{
              color: "#065A19",
              fontWeight: "800",
              textTransform: "uppercase",
              fontSize: "40px",
            }}
          >
            Khoa Công nghệ thông tin{" "}
          </h1>
          <h3 style={{ color: "#071cd6", fontWeight: 800 }}>
            Địa chỉ: Tầng 2, Thư viện toà nhà Rạng Đông
          </h3>
          <h3 style={{ color: "#071cd6", fontWeight: 800 }}>
            Email: kcntt@hcmuaf.edu.vn
          </h3>
        </div>
        <div className={styles.right}>
          <img
            src={picture}
            className={styles.picture}
            alt="hinh chup cac thay co trong khoa"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
