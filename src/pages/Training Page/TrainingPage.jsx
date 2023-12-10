import { useState } from "react";
import styles from "./TrainingPage.module.css";
import { useEffect } from "react";
import axios from "axios";
const TrainingPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/product/ctDaoTao").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Đào tạo</h1>
      <h3 className={styles.description}>Các chuyên ngành đào tạo:</h3>
      <ul className={styles.content}>
        {data.map((item, index) => {
          return (
            <li className={styles.paragraph}>
              <p>
                <span>* {item.name} </span>
                {item.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TrainingPage;
