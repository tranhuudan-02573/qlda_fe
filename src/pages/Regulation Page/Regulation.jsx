import styles from "./Regulation.module.css";
import { Link } from "react-router-dom";
function Regulation() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>QUY CHẾ TRANG WEB LIÊN LẠC CỰU SINH VIÊN</h1>
      <div className={styles.content}>
        <p>Mục đích</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Xây dựng một nền tảng trực tuyến để kết nối và duy trì liên lạc giữa
            cựu sinh viên và trường đào tạo.
          </li>
          <li className={styles.item}>
            Cung cấp thông tin về cơ hội nghề nghiệp, sự kiện, và tin tức liên
            quan đến cựu sinh viên.
          </li>
          <li className={styles.item}>
            Hỗ trợ cựu sinh viên trong việc xây dựng và mở rộng mạng lưới quan
            hệ nghề nghiệp.
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <p style={{ fontWeight: "bold" }}>
          1. Đăng ký và Thông tin Cựu sinh viên
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Chỉ cựu sinh viên có đăng ký tài khoản mới có thể sử dụng các tính
            năng đầy đủ của trang web.
          </li>
          <li className={styles.item}>
            Cần cung cấp thông tin cá nhân đầy đủ và chính xác trong quá trình
            đăng ký.
          </li>
          <li className={styles.item}>
            Người quản trị có quyền xác nhận và kiểm duyệt thông tin trước khi
            công bố trên trang web.
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <p style={{ fontWeight: "bold" }}>2. Tính Năng Liên lạc</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Cung cấp các công cụ để cựu sinh viên có thể tìm kiếm, kết nối và
            liên lạc với nhau thông qua tin nhắn và email.
          </li>
          <li className={styles.item}>
            Tích hợp hệ thống thông báo để thông báo về các sự kiện quan trọng
            và cập nhật từ cộng đồng cựu sinh viên.
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <p style={{ fontWeight: "bold" }}>3. Hỗ trợ Nghề nghiệp</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Hiển thị thông tin về cơ hội nghề nghiệp, sự kiện tuyển dụng, và
            chương trình đào tạo liên quan.
          </li>
          <li className={styles.item}>
            Cung cấp chức năng để cựu sinh viên chia sẻ kinh nghiệm, tư vấn nghề
            nghiệp, và tạo blog cá nhân.
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <p style={{ fontWeight: "bold" }}>4. An toàn và Bảo mật</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Duy trì và cập nhật đều đặn thông tin về sự kiện, tin tức, và cơ hội
            nghề nghiệp.
          </li>
          <li className={styles.item}>
            Tổ chức các biện pháp chống spam và lừa đảo để duy trì sự chất lượng
            và đáng tin cậy của thông tin trên trang web.
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <p style={{ fontWeight: "bold" }}>5. Quản lý Nội dung</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Duy trì và cập nhật đều đặn thông tin về sự kiện, tin tức, và cơ hội
            nghề nghiệp.
          </li>
          <li className={styles.item}>
            Kiểm duyệt nội dung được đăng để đảm bảo tính chất chân thực và tích
            cực.
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <p style={{ fontWeight: "bold" }}>6.Phản hồi và Nâng cấp</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Mở cửa đối với ý kiến đóng góp và phản hồi từ cựu sinh viên để nâng
            cao chất lượng và tính hiệu quả của trang web.
          </li>
          <li className={styles.item}>
            Thực hiện các cập nhật và nâng cấp trang web để đáp ứng nhu cầu và
            mong muốn ngày càng tăng của cộng đồng cựu sinh viên.
          </li>
        </ul>
      </div>
      <p>
        Nếu bạn đã đọc hết những quy chế trên, bạn có thể tham gia vào diễn đàn
        bằng cách click vào <Link to="/forum">đây</Link>{" "}
      </p>
    </div>
  );
}

export default Regulation;
