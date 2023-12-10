import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { IoNotificationsOutline } from "react-icons/io5";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import Popper from "../../Popper/Popper.jsx";

function Header() {
  let currentUser = true;
  return (
    <div className={styles.wrapper}>
      <h1>
        <Link to="/forum">FITNLU.COM</Link>
      </h1>

      {currentUser ? (
        <div className={styles.right}>
          <Tippy
            hideOnClick={false}
            placement="bottom-end"
            interactive
            delay={[0, 700]}
            render={(attrs) => (
              <div className={styles["tippy-box"]} tabIndex="-1" {...attrs}>
                <Popper>
                  <h1 className={styles.textHead}>Thông báo</h1>
                  <div className={styles.notifications}>
                    <Link className={styles.notification}>
                      <img
                        src="https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg"
                        alt="avatar"
                        className={styles.avatar}
                      />
                      <span className={styles.desc}>
                        Trần Hữu Dân đã yêu cầu tham gia diễn đàn FITNLU.COM
                      </span>
                    </Link>
                    <Link className={styles.notification}>
                      <img
                        src="https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg"
                        alt="avatar"
                        className={styles.avatar}
                      />
                      <span className={styles.desc}>
                        Phan An đã bình luận vào bài viết của bạn
                      </span>
                    </Link>
                    <Link className={styles.notification}>
                      <img
                        src="https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg"
                        alt="avatar"
                        className={styles.avatar}
                      />
                      <span className={styles.desc}>
                        Phan An đã bình luận vào bài viết của bạn
                      </span>
                    </Link>
                  </div>
                </Popper>
              </div>
            )}
          >
            <span>
              {" "}
              <IoNotificationsOutline className={styles.icon} />
            </span>
          </Tippy>
          <div className={styles.info}>
            <img
              className={styles.imgIcon}
              src="https://png.pngtree.com/element_pic/17/04/27/70551c817cc76eac6465853d5d1063c1.jpg"
              alt="o khoa"
            />
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              {" "}
              Phan An
            </span>
          </div>
        </div>
      ) : (
        <div className={styles.actions}>
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button>Register</button>
        </div>
      )}
    </div>
  );
}

export default Header;
