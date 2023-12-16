import styles from "./NotificationManagement.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
function NotificationManagement() {
  const [data, setData] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const token = localStorage.getItem("token");
  const handleTopic = (e) => {
    setTopic(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  const getAll = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/product/thongBao`
      );

      if (response.status === 200) {
        console.log(response.data);
        setData(response.data);
      } else {
        console.error("Failed to fetch comments");
      }
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/product/thongBao/${id}`
      );
      if (response.status === 200) {
        window.location.reload();
      } else {
        console.error("Failed to fetch comments");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addNotification = async () => {
    if (topic.length === 0 || content.length === 0) {
      return;
    }
    const payload = { title: topic, content: content };
    try {
      const response = await axios.post(
        `http://localhost:8080/api/product/thongBao`,
        payload
      );

      if (response.status === 200) {
        window.location.reload();
      } else {
        console.error("Failed to fetch ");
      }
    } catch (error) {
      console.error("Failed to fetch post:", error);
    }
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead style={{ border: "1px solid #000" }}>
          <tr className={styles.row}>
            <td>STT</td>
            <td>Tiêu đề</td>
            <td>Nội dung</td>
            <td>Người tạo</td>
            <td>Thao tác</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr className={styles.row}>
                <td>{index + 1}</td>
                <td
                  style={{ color: "#56bedd", width: " 20% " }}
                  className={styles.content}
                >
                  {item.title}
                </td>
                <td
                  className={styles.content}
                  style={{
                    width: "40%",
                    textAlign: "justify",
                    paddingRight: "20px",
                  }}
                >
                  {item.content}
                </td>
                <td>Admin</td>
                <td className={styles.content}>
                  <button className={styles.button}>Sửa</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(item.id)}
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>{" "}
      <div className={styles.containerButton}>
        {" "}
        <button className={styles.button} onClick={() => setIsOpenModal(true)}>
          Thêm thông báo
        </button>
      </div>
      {isOpenModal ? (
        <>
          <div className={styles.modal}>
            <div className={styles["modal-content"]}>
              <div className={styles.head}>
                <span className={styles.create}>Tạo bài viết</span>
                <span
                  class={styles.close}
                  onClick={() => setIsOpenModal(false)}
                >
                  &times;
                </span>
              </div>

              <input
                type="text"
                placeholder="Chủ đề"
                className={styles.inputTopic}
                onChange={handleTopic}
                value={topic}
              />
              <textarea
                placeholder="Nội dung"
                className={styles["text-input"]}
                onChange={handleContent}
                value={content}
              ></textarea>
              <div className={styles.btnContainer}>
                {" "}
                <button
                  className={styles.btn}
                  onClick={() => addNotification()}
                >
                  Đăng
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default NotificationManagement;
