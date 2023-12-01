import styles from "./Community.module.css";
function Community() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Để cập nhật thường xuyên và tham gia các hoạt động của Hội cựu sinh viên
        NLU, Bạn theo dõi các kênh sau:
      </h1>
      <p style={{ marginTop: "2rem" }}>
        Website: https://cuusinhvienfit.nlu.edu.vn/
      </p>
      <p>Kênh Fanpage: @cuusinhviennlu</p>
      <p>
        Mọi thắc mắc về Mạng lưới cựu sinh viên NLU, vui lòng liên hệ qua email:
        cuusinhviennlu@nlu.edu.vn
      </p>
    </div>
  );
}

export default Community;
