import styles from "./AnnouncementPage.module.css";

const AnnouncementPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Thông báo của khoa CNTT</h1>
      <ul className={styles.list}>
        <li>
          <a href="/#">Biên bản xét TN đợt 2 năm 2023</a>
        </li>
        <li>
          <a href="/#">
            Thông báo về việc đăng ký hoãn thi học kỳ 2 năm 2022-2023
          </a>
        </li>
        <li>
          <a href="/#">
            [TUYEN SINH] Tư Vấn Tuyển Sinh Ngành Công Nghệ Thông Tin
          </a>
        </li>
        <li>
          <a href="/#">
            [Thông báo] Giải quyết việc điều chỉnh các môn thi trực tuyến sang
            trực tiếp.
          </a>
        </li>
        <li>
          <a href="/#">
            [Thông báo] Thời gian đào tạo tối đa với các chương trình đào tạo
          </a>
        </li>
      </ul>
    </div>
  );
};
export default AnnouncementPage;
