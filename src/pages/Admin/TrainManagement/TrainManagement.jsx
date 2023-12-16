import { useEffect, useState } from "react";
import styles from "./TrainManagement.module.css";
import axios from "axios";
function TrainManagement() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const getAll = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/product/ctDaoTao`
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
        `http://localhost:8080/api/admin/ctDaoTao/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        window.location.reload();
      } else {
        console.error("Failed to fetch");
      }
    } catch (error) {
      console.log(error);
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
            <td>Tiêu dề</td>
            <td>Nội dung</td>
            <td>Người tạo</td>
            <td>Thao tác</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr className={styles.row}>
                <td>{index}</td>
                <td
                  style={{ color: "#56bedd", width: "20%" }}
                  className={styles.content}
                >
                  {item.name}
                </td>
                <td className={styles.content} style={{ width: "50%" }}>
                  {item.description}
                </td>
                <td className={styles.content}>Admin</td>
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
      </table>
    </div>
  );
}

export default TrainManagement;
