import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";
import axios from "axios";
function Modal({ handleCloseModal }) {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const token = localStorage.getItem("token");
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();
  const handleTopic = (e) => {
    setTopic(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  const handleSubmit = async () => {
    if (topic.length === 0 || content.length === 0) {
      return;
    }
    const payload = { noiDung: content, chuDe: topic };
    try {
      const response = await axios.post(
        `http://localhost:8080/api/user/post`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        window.location.reload();
        navigate("/forum");
      } else {
        console.error("Failed to fetch post");
      }
    } catch (error) {
      console.error("Failed to fetch post:", error);
    }
  };
  const getInfoUser = async () => {
    try {
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
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className={styles.modal}>
        <div className={styles["modal-content"]}>
          <div className={styles.head}>
            <span className={styles.create}>Tạo bài viết</span>
            <span onClick={() => handleCloseModal()} class={styles.close}>
              &times;
            </span>
          </div>
          <div className={styles.info}>
            <img
              src="https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg"
              alt="avatar"
              className={styles.avatar}
            />
            <span className={styles.name}> {userInfo.firstName}</span>
          </div>
          <input
            type="text"
            placeholder="Chủ đề"
            className={styles.inputTopic}
            onChange={(e) => handleTopic(e)}
            value={topic}
          />
          <textarea
            placeholder="Bạn đang nghĩ gì?"
            className={styles["text-input"]}
            onChange={(e) => handleContent(e)}
            value={content}
          ></textarea>
          <div className={styles.btnContainer}>
            {" "}
            <button className={styles.btn} onClick={() => handleSubmit()}>
              Đăng
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
