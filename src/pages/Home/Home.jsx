import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./Home.module.css";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/product/anhNen").then((res) => {
      setData(res.data[0]);
    });
  }, []);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Giới thiệu</h2>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={data.resource} alt="" />
        </div>
        <div className={styles.desc}>
          <p>{data.description}</p>
        </div>
        <h3
          style={{
            textAlign: "center",
            fontSize: "30px",
            marginTop: "2rem",
            color: "rgb(0, 0, 128)",
            fontWeight: "bold",
          }}
        >
          KẾT QUẢ TUYỂN SINH & CHỈ TIÊU QUA CÁC NĂM{" "}
        </h3>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td style={{ color: "red", fontWeight: "bold" }}>Năm</td>
              <td style={{ color: "red", fontWeight: "bold" }}>Điểm chuẩn</td>
              <td style={{ color: "red", fontWeight: "bold" }}>Chỉ tiêu</td>
            </tr>
            <tr>
              <td>2015</td>
              <td>20.0</td>
              <td>210</td>
            </tr>
            <tr>
              <td>2016</td>
              <td>19.5</td>
              <td>210</td>
            </tr>
            <tr>
              <td>2017</td>
              <td>21.0</td>
              <td>210</td>
            </tr>
            <tr>
              <td>2018</td>
              <td>21.0</td>
              <td>210</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
