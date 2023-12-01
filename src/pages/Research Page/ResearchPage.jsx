import styles from "./ResearchPage.module.css";
const ResearchPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}> NGHIÊN CỨU KHOA HỌC</h1>
      <ul className={styles.list}>
        <li>
          NCKH là một hoạt động xã hội, hướng vào việc tìm kiếm những điều mà
          khoa học chưa biết: hoặc là phát hiện bản chất sự vật, phát triển nhận
          thức khoa học về thế giới; hoặc là sáng tạo phương pháp mới và phương
          tiện kĩ thuật mới để cải tạo thế giới.
        </li>
        <li>Phân loại</li>
      </ul>
      <p style={{ fontSize: "18px" }}>
        Có nhiều cách phân loại NCKH. Trong bài viết này, YRC sẽ đề cập 2 cách
        phân loại thường gặp: theo chức năng nghiên cứu và theo tính chất của
        sản phẩm nghiên cứu
      </p>
      <p style={{ fontSize: "18px" }}>a. Theo chức năng nghiên cứu:</p>
      <ul className={styles.list}>
        <li>
          Nghiên cứu mô tả (Descriptive research): nhằm đưa ra một hệ thống tri
          thức giúp con người phân biệt các sự vật, hiện tượng xung quanh; bao
          gồm mô tả định tính và mô tả định lượng, mô tả một sự vật, hiện tượng
          riêng lẻ hoặc so sánh giữa nhiều sự vật, hiện tượng khác nhau.
        </li>
        <li>
          Nghiên cứu giải thích (Explanatory research): nhằm làm rõ các qui luật
          chi phối các hiện tượng, các quá trình vận động của sự vật.
        </li>
        <li>
          Nghiên cứu dự báo (Anticipatory research): nhằm chỉ ra xu hướng vận
          động của các hiện tượng, sự vật trong tương lai
        </li>
        <li>
          Nghiên cứu sáng tạo (Creative research): nhằm tạo ra các qui luật, sự
          vật mới hoàn toàn
        </li>
      </ul>
      <p style={{ fontSize: "18px" }}>
        b. Theo tính chất của sản phẩm nghiên cứu:
      </p>
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        Nghiên cứu cơ bản (Fundamental research): các nghiên cứu nhằm phát hiện
        thuộc tính, cấu trúc bên trong của các sự vật, hiện tượng.
      </p>
    </div>
  );
};
export default ResearchPage;
