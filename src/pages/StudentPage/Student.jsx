import styles from "./Student.module.css";
function Student() {
  return (
    <div className={styles.wrapper}>
      <h1>Sinh viên khóa 2020/ Danh sách sinh viên lớp DH20DTA</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>MSSV</td>
            <td>Họ và tên</td>
            <td>Ngày sinh</td>
            <td>Giới tính </td>
            <td>Email </td>
            <td>Số điện thoại </td>
            <td>Ngành học </td>
            <td>Khoá học </td>
            <td>Lớp</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20130204</td>
            <td>Hoàng Văn Khánh</td>
            <td>20/1/2002</td>
            <td>Nam</td>
            <td>20130204@st.hcmuaf.edu.vn</td>
            <td>0987 654 321</td>
            <td>Công nghệ thông tin</td>
            <td>K46</td>
            <td>DH20DTA</td>
          </tr>
          <tr>
            <td>20130204</td>
            <td>Hoàng Văn Khánh</td>
            <td>20/1/2002</td>
            <td>Nam</td>
            <td>20130204@st.hcmuaf.edu.vn</td>
            <td>0987 654 321</td>
            <td>Công nghệ thông tin</td>
            <td>K46</td>
            <td>DH20DTA</td>
          </tr>
          <tr>
            <td>20130204</td>
            <td>Hoàng Văn Khánh</td>
            <td>20/1/2002</td>
            <td>Nam</td>
            <td>20130204@st.hcmuaf.edu.vn</td>
            <td>0987 654 321</td>
            <td>Công nghệ thông tin</td>
            <td>K46</td>
            <td>DH20DTA</td>
          </tr>
          <tr>
            <td>20130204</td>
            <td>Hoàng Văn Khánh</td>
            <td>20/1/2002</td>
            <td>Nam</td>
            <td>20130204@st.hcmuaf.edu.vn</td>
            <td>0987 654 321</td>
            <td>Công nghệ thông tin</td>
            <td>K46</td>
            <td>DH20DTA</td>
          </tr>
          <tr>
            <td>20130204</td>
            <td>Hoàng Văn Khánh</td>
            <td>20/1/2002</td>
            <td>Nam</td>
            <td>20130204@st.hcmuaf.edu.vn</td>
            <td>0987 654 321</td>
            <td>Công nghệ thông tin</td>
            <td>K46</td>
            <td>DH20DTA</td>
          </tr>
          <tr>
            <td>20130204</td>
            <td>Hoàng Văn Khánh</td>
            <td>20/1/2002</td>
            <td>Nam</td>
            <td>20130204@st.hcmuaf.edu.vn</td>
            <td>0987 654 321</td>
            <td>Công nghệ thông tin</td>
            <td>K46</td>
            <td>DH20DTA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Student;
