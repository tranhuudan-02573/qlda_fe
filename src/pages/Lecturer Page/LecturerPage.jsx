import { useState } from "react";
import styles from "./LecturerPage.module.css";
const LecturerPage = () => {
  const [value, setValue] = useState("Hệ thống thông tin");
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <label
        style={{
          marginRight: "15px",
          fontWeight: "bold",
        }}
      >
        Bộ môn:
      </label>
      <select id="mySelect" onChange={handleOnChange}>
        <option value="Hệ thống thông tin">Hệ thống thông tin</option>
        <option value="Mạng máy tính và truyền thông">
          Mạng máy tính và truyền thông
        </option>
        <option value="Công nghệ phần mềm">Công nghệ phần mềm</option>
      </select>
      {value === "Hệ thống thông tin" && (
        <>
          <h1 className={styles.title}>
            Danh sách các giảng viên thuộc bộ môn Hệ thống thông tin
          </h1>

          <ul className={styles.list}>
            <p className={styles.member}>TS. Nguyễn Văn Dũ (Truởng Bộ Môn)</p>
            <li>Email: nvdu@hcmuaf.edu.vn</li>
            <p className={styles.member}>ThS. Khương Hải Châu</p>
            <li>Email: khchau@hcmuaf.edu.vn</li>
            <p className={styles.member}>TS.ThS. Trần Quốc Việt</p>
            <li>Email: tqv@hcmuaf.edu.vn</li>
            <p className={styles.member}>ThS. Trần Lê Như Quỳnh</p>
            <li>Email: nquynh@hcmuaf.edu.vn</li>
            <p className={styles.member}>ThS. Phan Đình Long</p>
            <li>Email: phandinhlong@hcmuaf.edu.vn</li>
          </ul>
        </>
      )}
      {value === "Mạng máy tính và truyền thông" && (
        <>
          <h1 className={styles.title}>
            Danh sách các giảng viên thuộc bộ môn Mạng máy tính và truyền thông
          </h1>
          <ul className={styles.list}>
            <p className={styles.member}>TS. Phạm Văn Tính (Trưởng Bộ Môn)</p>
            <li>Email: pvtinh @hcmuaf.edu.vn</li>
            <p className={styles.member}>ThS. Võ Tấn Toàn</p>
            <li>Email: vttoan@hcmuaf.edu.vn</li>
            <p className={styles.member}>ThS. Phan Vĩnh Thuần</p>
            <li>Email: pvthuan@hcmuaf.edu.vn</li>
            <p className={styles.member}>ThS. Nguyễn Thị Minh Hương</p>
            <li>Email: ntmhuong @hcmuaf.edu.vn</li>
          </ul>
        </>
      )}
      {value === "Công nghệ phần mềm" && (
        <>
          <h1 className={styles.title}>
            Danh sách các giảng viên thuộc bộ môn Công nghệ phần mềm
          </h1>
          <ul className={styles.list}>
            <p className={styles.member}>
              ThS. Lê Phi Hùng (Phó khoa, Trưởng bộ môn)
            </p>
            <li>Email: hunglephi @hcmuaf.edu.vn</li>
            <p className={styles.member}>ThS. Nguyễn Đức Công Song</p>
            <li>Email: songndc @hcmuaf.edu.vn</li>
            <p className={styles.member}>ThS. Nguyễn Thanh Phước</p>
            <li>Email: ntphuoc @hcmuaf.edu.vn</li>
            <p className={styles.member}>ThS. Trần Thị Thanh Nga</p>
            <li>Email: tttnga @hcmuaf.edu.vn</li>
            <p className={styles.member}>TS. Nguyễn Thị Phương Trâm</p>
            <li>Email: ntptram@hcmuaf.edu.vn</li>
          </ul>
        </>
      )}
    </div>
  );
};
export default LecturerPage;
