import styles from "./Modal.module.css";
function Modal({ handleCloseModal }) {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles["modal-content"]}>
          <div className={styles.head}>
            <span className={styles.create}>Tạo bài viết</span>
            <span onClick={() => handleCloseModal()} class={styles.close}>
              &times;
            </span>
          </div>
          <div className={styles.info}>
            <img
              src="https://i.pinimg.com/originals/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg"
              alt="avatar"
              className={styles.avatar}
            />
            <span className={styles.name}>Phan An</span>
          </div>
          <textarea
            placeholder="Bạn đang nghĩ gì?"
            className={styles["text-input"]}
          ></textarea>
          <div className={styles.btnContainer}>
            {" "}
            <button className={styles.btn}>Đăng</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
