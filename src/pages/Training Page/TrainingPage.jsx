import styles from "./TrainingPage.module.css";
const TrainingPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Đào tạo</h1>
      <h3 className={styles.description}>Các chuyên ngành đào tạo:</h3>
      <ul className={styles.content}>
        <li className={styles.paragraph}>
          <p>
            <span>* CHUYÊN NGÀNH MẠNG MÁY TÍNH: </span>
            SV được trang bị kiến thức và kỹ năng về hệ thống mạng máy tính; khả
            năng thiết kế, quản trị và bảo trì mạng LAN; thiết kế và lắp đặt bộ
            chuyển mạch (SWITCH) và bộ định tuyến (ROUTER) trong môi trường mạng
            của công ty với cấu trúc LAN & WAN; nâng cấp hoạt động của mạng và
            tổ chức hệ thống bảo mật cho công ty; xử lý các sự cố mạng; quản trị
            hệ thống mạng máy tính với hệ điều hành Windows và LINUX; cài đặt,
            cấu hình máy chủ, xử lý sự cố; xây dựng và triển khai chính sách và
            hệ thống bảo mật mạng máy tính; phục hồi dữ liệu; nắm vững kiến
            thức, xây dựng và triển khai các giải pháp mạng.
          </p>
        </li>
        <li className={styles.paragraph}>
          <p>
            <span>* CHUYÊN NGÀNH HỆ THỐNG THÔNG TIN: </span>
            SV được trang bị kiến thức và kỹ năng về cơ sở dữ liệu, các hệ quản
            trị cơ sở dữ liệu; hiểu rõ phương pháp ánh xạ mô hình đối tượng vào
            mô hình dữ liệu quan hệ; có kiến thức về lập trình ứng dụng web, các
            vấn đề an toàn và bảo mật ứng dụng web; có khả năng phân tích, thiết
            kế hệ thống theo hướng đối tượng với ngôn ngữ mô tả UML; khả năng
            đọc được các bản phân tích, thiết kế, xây dựng và phát triển các hệ
            thống thông tin cho một tổ chức, doanh nghiệp, tham gia vào các dự
            án có quy mô lớn; có khả năng đảm nhận các vị trí công việc trong
            lĩnh vực phần mềm như: lập trình viên, chuyên gia về phân tích &
            thiết kế, quản trị dự án, quản trị cơ sở dữ liệu, thiết kế & lập
            trình web, ...
          </p>
        </li>
        <li className={styles.paragraph}>
          <p>
            <span>* CHUYÊN NGÀNH CÔNG NGHỆ PHẦN MỀM: </span>
            SV được trang bị kiến thức và kỹ năng để hiểu rõ các quy trình phần
            mềm, phương pháp triển khai phần mềm và khả năng áp dụng; hiểu được
            các bản phân tích, thiết kế hệ thống phần mềm; có khả năng thiết kế
            kiến trúc của hệ thống phần mềm; nắm được phương pháp phân tích và
            thiết kế hướng đối tượng; nắm được những nguyên tắc trong thiết kế
            giao diện để giao tiếp giữa người và máy; có kỹ năng để thực hiện
            kiểm thử chất lượng phần mềm; có kiến thức
          </p>
        </li>
      </ul>
    </div>
  );
};
export default TrainingPage;
