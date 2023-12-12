import { Link } from "react-router-dom";
import styles from "./Forum.module.css";
import Modal from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Forum() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token == null) {
      navigate("/login");
    }
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };
  const [posts, setPosts] = useState([]);
  const getAllPost = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/user/post", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setPosts(response.data);
      } else {
        console.error("Failed to fetch comments");
      }
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };
  console.log(posts);
  useEffect(() => {
    getAllPost();
  }, []);

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
          {posts.map((item) => {
            return (
              <tr key={item.id}>
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

export default Forum;
