import styles from "./Navbar.module.css";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { categories } from "../../utils/constanst.js";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import Popper from "../Popper/Popper.jsx";
import { FaCaretDown } from "react-icons/fa6";
const Navbar = () => {
  const renderChildren = (children, index) => {
    return children.map((item) => {
      return (
        <li className={styles["menu-item"]} key={index}>
          <Link to={item.path}> {item.title} </Link>
        </li>
      );
    });
  };
  return (
    <div className={styles.container}>
      <ul className={styles["list-item"]}>
        <li className={styles.item} style={{ width: "100px" }}>
          <Link to="/">
            <IoHome />
          </Link>
        </li>
        {categories.map((cate, index) => {
          if (
            cate.name !== "Trang chủ" &&
            cate.name !== "Giới thiệu" &&
            cate.name !== "Sinh viên" &&
            cate.name !== "Liên hệ cựu sinh viên"
          ) {
            return (
              <li key={index} className={styles.item}>
                <Link key={index} to={cate.path}>
                  {cate.name}
                </Link>
              </li>
            );
          }
          return <div></div>;
        })}
        <Tippy
          hideOnClick={false}
          interactive
          placement="bottom-start"
          delay={[0, 700]}
          render={(attrs) => (
            <div className={styles.menu} tabIndex="-1" {...attrs}>
              <Popper>
                {categories.map((item, index) => {
                  if (item.children) {
                    return (
                      <ul className={styles["menu-list"]}>
                        {renderChildren(item.children, index)}
                      </ul>
                    );
                  }
                  return <div></div>;
                })}
              </Popper>
            </div>
          )}
        >
          <li
            className={styles.item}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to="/lienhecuusinhvien">
              Liên hệ cựu sinh viên
              <FaCaretDown style={{ marginLeft: "10px" }} />
            </Link>
          </li>
        </Tippy>
      </ul>
      <hr style={{ borderBottom: "1px solid #4caf50" }} />
    </div>
  );
};
export default Navbar;
