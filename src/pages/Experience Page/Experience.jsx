import styles from "./Experience.module.css";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
function Experience() {
  const [isOpen, setIsOpen] = useState(false);
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
          <tr>
            <td style={{ display: "flex", alignItems: "center" }}>
              <img
                className={styles.imgIcon}
                src="https://png.pngtree.com/element_pic/17/04/27/70551c817cc76eac6465853d5d1063c1.jpg"
                alt="o khoa"
              />
              <Link to="/post"> Có nên học ngành công nghệ thông tin...</Link>
            </td>
            <td>Phạm Tuấn</td>
            <td>11/01/2023</td>
          </tr>
          <tr>
            <td style={{ display: "flex", alignItems: "center" }}>
              <img
                className={styles.imgIcon}
                src="https://png.pngtree.com/element_pic/17/04/27/70551c817cc76eac6465853d5d1063c1.jpg"
                alt="o khoa"
              />
              <Link to="/post">
                {" "}
                Tìm hiểu về tình hình thị trường lao động....
              </Link>
            </td>
            <td>Minh Thư</td>
            <td>21/02/2023</td>
          </tr>
          <tr>
            <td style={{ display: "flex", alignItems: "center" }}>
              <img
                className={styles.imgIcon}
                src="https://png.pngtree.com/element_pic/17/04/27/70551c817cc76eac6465853d5d1063c1.jpg"
                alt="o khoa"
              />
              <Link to="/post">
                {" "}
                Tìm hiểu về thực tế ngành nghề Công nghệ thông tin
              </Link>
            </td>
            <td>Nhựt Hào</td>
            <td>30/03/2023</td>
          </tr>
          <tr>
            <td style={{ display: "flex", alignItems: "center" }}>
              <img
                className={styles.imgIcon}
                src="https://png.pngtree.com/element_pic/17/04/27/70551c817cc76eac6465853d5d1063c1.jpg"
                alt="o khoa"
              />
              <Link to="/post"> Phát triển kỹ năng mềm quan trọng...</Link>
            </td>
            <td>Trung Bảo</td>
            <td>12/04/2023</td>
          </tr>
          <tr>
            <td style={{ display: "flex", alignItems: "center" }}>
              <img
                className={styles.imgIcon}
                src="https://png.pngtree.com/element_pic/17/04/27/70551c817cc76eac6465853d5d1063c1.jpg"
                alt="o khoa"
              />
              <Link to="/post"> Tự học và tiếp tục đào tạo...</Link>
            </td>
            <td>Hữu Dân</td>
            <td>15/05/2023</td>
          </tr>
          <tr>
            <td style={{ display: "flex", alignItems: "center" }}>
              <img
                className={styles.imgIcon}
                src="https://png.pngtree.com/element_pic/17/04/27/70551c817cc76eac6465853d5d1063c1.jpg"
                alt="o khoa"
              />
              <Link to="/post"> Xây dựng hồ sơ và thương hiệu cá nhân...</Link>
            </td>
            <td>Minh Huy</td>
            <td>02/06/2023</td>
          </tr>
          <tr>
            <td style={{ display: "flex", alignItems: "center" }}>
              <img
                className={styles.imgIcon}
                src="https://png.pngtree.com/element_pic/17/04/27/70551c817cc76eac6465853d5d1063c1.jpg"
                alt="o khoa"
              />
              <Link to="/post">
                {" "}
                Chia sẻ về cơ hội nghề nghiệp đặc biệt....
              </Link>
            </td>
            <td>Ngọc Như</td>
            <td>24/10/2023</td>
          </tr>
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

export default Experience;
