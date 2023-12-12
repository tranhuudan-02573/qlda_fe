import styles from "./Member.module.css";
import { FaRegFileAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Member() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/user/post`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setData(response.data);
      } else {
        console.error("Failed to fetch post");
      }
    } catch (error) {
      console.error("Failed to fetch post:", error);
    }
  };
  const getCountPostByCreator = (value) => {
    let count = 0;
    data.forEach((item) => {
      if (item.createBy === value) {
        count++;
      }
    });
    return count;
  };

  useEffect(() => {
    getData();
  }, []);
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonContainer}>
        <button onClick={() => handleOpenModal()}>+ Mời</button>
      </div>
      <div className={styles.box}>
        <p style={{ fontSize: "20px" }}>
          <FaRegFileAlt />{" "}
          <span style={{ fontStyle: "italic" }}>
            Danh sách các thành viên trong diễn dàn FITNLU
          </span>
        </p>
        <div className={styles.search}>
          <CiSearch className={styles.icon} />
          <input placeholder="Search User Name" />
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td style={{ textAlign: "left", paddingLeft: "20px" }}>
              Tên thành viên{" "}
            </td>
            <td className={styles.send}>Ngày tham gia</td>
            <td>Số bài đăng</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ display: "flex", alignItems: "center" }}>
              <img
                className={styles.imgIcon}
                src="https://png.pngtree.com/element_pic/17/04/27/70551c817cc76eac6465853d5d1063c1.jpg"
                alt="o khoa"
              />
              <div className={styles.info} style={{ marginLeft: "10px" }}>
                {" "}
                <Link
                  to="/profile"
                  style={{
                    fontStyle: "italic",
                    cursor: "pointer",
                    color: "#000",
                  }}
                >
                  Phan An
                </Link>
                <p style={{ fontSize: "16px" }}>Quản trị viên</p>
              </div>
            </td>
            <td>24/10/2023</td>
            <td>0</td>
          </tr>{" "}
          <tr>
            <td style={{ display: "flex", alignItems: "center" }}>
              <img
                className={styles.imgIcon}
                src="https://png.pngtree.com/element_pic/17/04/27/70551c817cc76eac6465853d5d1063c1.jpg"
                alt="o khoa"
              />
              <div className={styles.info} style={{ marginLeft: "10px" }}>
                {" "}
                <Link
                  to="/profile"
                  style={{
                    fontStyle: "italic",
                    cursor: "pointer",
                    color: "#000",
                  }}
                >
                  Trung Bảo
                </Link>
                <p style={{ fontSize: "16px" }}>Quản trị viên</p>
              </div>
            </td>
            <td>04/01/2023</td>
            <td>1</td>
          </tr>{" "}
          <tr>
            <td style={{ display: "flex", alignItems: "center" }}>
              <img
                className={styles.imgIcon}
                src="https://png.pngtree.com/element_pic/17/04/27/70551c817cc76eac6465853d5d1063c1.jpg"
                alt="o khoa"
              />
              <div className={styles.info} style={{ marginLeft: "10px" }}>
                {" "}
                <Link
                  to="/profile"
                  style={{
                    fontStyle: "italic",
                    cursor: "pointer",
                    color: "#000",
                  }}
                >
                  Nhựt Duy{" "}
                </Link>
                <p style={{ fontSize: "16px" }}>Thành viên mới</p>
              </div>
            </td>
            <td>24/09/2023</td>
            <td>{getCountPostByCreator("Nhut Duy")}</td>
          </tr>
          <tr>
            <td style={{ display: "flex", alignItems: "center" }}>
              <img
                className={styles.imgIcon}
                src="https://png.pngtree.com/element_pic/17/04/27/70551c817cc76eac6465853d5d1063c1.jpg"
                alt="o khoa"
              />
              <div className={styles.info} style={{ marginLeft: "10px" }}>
                {" "}
                <Link
                  to="/profile"
                  style={{
                    fontStyle: "italic",
                    cursor: "pointer",
                    color: "#000",
                  }}
                >
                  Hữu Dân
                </Link>
                <p style={{ fontSize: "16px" }}>Thành viên mới</p>
              </div>
            </td>
            <td>14/06/2023</td>
            <td>2</td>
          </tr>
          <tr>
            <td style={{ display: "flex", alignItems: "center" }}>
              <img
                className={styles.imgIcon}
                src="https://png.pngtree.com/element_pic/17/04/27/70551c817cc76eac6465853d5d1063c1.jpg"
                alt="o khoa"
              />
              <div className={styles.info} style={{ marginLeft: "10px" }}>
                {" "}
                <Link
                  to="/profile"
                  style={{ fontStyle: "italic", color: "#000" }}
                >
                  Trung Kiên{" "}
                </Link>
                <p style={{ fontSize: "16px" }}>Thành viên mới</p>
              </div>
            </td>
            <td>24/10/2023</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      {isOpen && (
        <div class={styles.modal}>
          <div class={styles["modal-content"]}>
            <div className={styles.head}>
              <div className={styles.textHead}>
                <span>Mời bạn bè tham gia nhóm này</span>
              </div>
              <span onClick={() => handleCloseModal()} className={styles.close}>
                &times;
              </span>
            </div>
            <div className={styles.searchBox}>
              <CiSearch className={styles.searchIcon} />
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Tìm kiếm theo tên"
              />
            </div>
            <ul className={styles["list-user"]}>
              <li className={styles["user-item"]}>
                <div className={styles["user-info"]}>
                  <img
                    className={styles["user-avatar"]}
                    src="https://i.pinimg.com/736x/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg"
                    alt="o khoa"
                  />
                  <span className={styles["user-name"]}>Ngọc Chi</span>
                </div>
                <input type="checkbox" className={styles.checkBox} />
              </li>
            </ul>
            <div className={styles.actions}>
              <button
                onClick={() => handleCloseModal()}
                className={styles.cancel}
              >
                Hủy
              </button>
              <button className={styles.sendBtn}>Gửi lời mời</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Member;
