import { Link } from "react-router-dom";
import styles from "./OutstadingPost.module.css";
import Modal from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
function OutstadingPost() {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const getAllTopPost = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/user/topPost`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        setData(response.data);
      } else {
        console.error("Failed to fetch");
      }
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };
  useEffect(() => {
    getAllTopPost();

    // eslint-disable-next-line
  }, []);
  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td style={{ textAlign: "left" }}>Chủ đề </td>
            <td className={styles.send}>Gửi bởi</td>
            <td>Thời gian đăng bài</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td style={{ display: "flex", alignItems: "center" }}>
                  <img
                    className={styles.imgIcon}
                    src="https://png.pngtree.com/element_pic/17/04/27/70551c817cc76eac6465853d5d1063c1.jpg"
                    alt="o khoa"
                  />
                  <Link to={`/post/${item.id}`}>{item.chuDe}</Link>
                </td>
                <td>{item.createBy}</td>
                <td>{item.ngayDangBai}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.buttonContainer}>
        <button className={styles.createBtn} onClick={() => setIsOpen(true)}>
          Đăng bài viết mới
        </button>
      </div>
      {isOpen && <Modal handleCloseModal={handleCloseModal} />}
    </div>
  );
}

export default OutstadingPost;
