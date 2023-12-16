import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { IoNotificationsOutline } from "react-icons/io5";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import Popper from "../../Popper/Popper.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Header() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);
  let currentUser = false;
  if (localStorage.getItem("token") != null) {
    currentUser = true;
  }
  const handleLogOut = () => {
    localStorage.removeItem("token");
    currentUser = false;
    navigate("/login");
  };
  const getInfoUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:8080/api/user/infoUser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUserInfo(response.data);
      } else {
        console.error("Failed to fetch comments");
      }
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };
  useEffect(() => {
    getInfoUser();
  }, []);
  console.log(userInfo);
  return (
    <div className={styles.wrapper}>
      <h1>
        <Link to="/forum">FITNLU.COM</Link>
      </h1>

      {currentUser ? (
        <div className={styles.right}>
          <div>
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
          </div>
          <div className={styles.info}>
            <img
              className={styles.imgIcon}
              src="https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg"
              alt="o khoa"
            />
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              {" "}
              {userInfo.firstName}
            </span>
          </div>
          <button className={styles.logout} onClick={() => handleLogOut()}>
            Đăng xuất
          </button>
        </div>
      ) : (
        <div className={styles.actions}>
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button>
            <Link to="/signup">Register</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
