import styles from "./ContactPage.module.css";
const ContactPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Ban liên lạc cựu sinh viên Trường Đại học Nông Lâm TP.Hồ Chí Minh
      </h1>
      <h2>1. Giới thiệu</h2>
      <ul className={styles.list}>
        <li>
          Ban Liên Lạc Cựu Sinh Viên tại Đại học Nông Lâm có nhiệm vụ quan trọng
          trong việc duy trì và phát triển mối quan hệ giữa trường và cựu sinh
          viên. Các hoạt động của ban được thiết kế để thúc đẩy sự kết nối, cung
          cấp thông tin quan trọng và tạo cơ hội cho sự phát triển cá nhân và
          nghề nghiệp của cựu sinh viên.
        </li>
      </ul>
      <h2 style={{ marginTop: "2rem" }}>2. Mục đích</h2>
      <ul className={styles.list}>
        <li>
          Duy trì Mối Liên Kết: Chức năng này giúp duy trì mối liên kết giữa cựu
          sinh viên và trường đại học. Điều này có thể giúp tăng cường tình cảm
          của cựu sinh viên với trường và giúp họ cảm thấy liên kết với cộng
          đồng cựu sinh viên.
        </li>
        <li>
          Chia Sẻ Thông Tin: Ban liên lạc thường chịu trách nhiệm chia sẻ thông
          tin về các sự kiện, hoạt động, và cập nhật từ trường đại học với cựu
          sinh viên. Điều này có thể bao gồm thông tin về những thành tựu mới,
          những thay đổi trong hạng mục đào tạo, cập nhật về cơ sở vật chất, và
          nhiều thông tin khác. 
        </li>
      </ul>
    </div>
  );
};
export default ContactPage;
