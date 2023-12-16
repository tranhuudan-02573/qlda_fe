import { useEffect, useState } from "react";
import styles from "./PostManagement.module.css";
import axios from "axios";
function PostManagement() {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");

  const getAllPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user/post`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log(response.data);
        setPosts(response.data);
      } else {
        console.error("Failed to fetch post");
      }
    } catch (error) {
      console.error("Failed to fetch post:", error);
    }
  };
  const handleDeletePostById = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/user/post/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("ok");
        window.location.reload();
      } else {
        console.error("Failed to fetch comments");
      }
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };
  useEffect(() => {
    getAllPost();
    // eslint-disable-next-line
  }, []);
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead style={{ border: "1px solid #000" }}>
          <tr className={styles.row}>
            <td>STT</td>
            <td>Tiêu dề</td>
            <td>Nội dung</td>
            <td>Người tạo</td>
            <td>Thao tác</td>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => {
            return (
              <tr className={styles.row}>
                <td>{index + 1}</td>
                <td
                  style={{ color: "#56bedd", width: "20%" }}
                  className={styles.content}
                >
                  {post.chuDe}
                </td>
                <td className={styles.content} style={{ width: "50%" }}>
                  {post.noiDung}
                </td>
                <td className={styles.content}>{post.createBy}</td>
                <td className={styles.content}>
                  <button className={styles.button}>Sửa</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDeletePostById(post.id)}
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PostManagement;
