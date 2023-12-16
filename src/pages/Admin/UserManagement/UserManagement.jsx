import { useEffect, useState } from "react";
import styles from "./UserManagement.module.css";
import axios from "axios";
function UserManagement() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const getAll = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/admin/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
  useEffect(() => {
    getAll();
    // eslint-disable-next-line
  }, []);
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead style={{ border: "1px solid #000" }}>
          <tr className={styles.row}>
            <td>STT</td>
            <td>Tên</td>
            <td>Email</td>
            <td>Vai trò</td>
            <td>Thao tác</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr className={styles.row}>
                <td>{index + 1}</td>
                <td style={{ color: "#56bedd" }} className={styles.content}>
                  {item.firstName}
                </td>
                <td className={styles.content}>{item.email}</td>
                <td className={styles.content}>{item.role}</td>
                <td className={styles.content}>
                  <button className={styles.button}>Sửa</button>
                  <button className={styles.button}>Xoá</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
