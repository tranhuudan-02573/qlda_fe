import styles from "./Profile.module.css";
function Profile() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img
          src="https://i.pinimg.com/736x/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg"
          alt="avatar"
          className={styles.avatar}
        />
      </div>
      <div className={styles.name}>
        <span>Phan Thị An</span>
      </div>
      <div className={styles.bio}>
        <span>Đi 1 ngày đàng, học 1 sàng khôn</span>
      </div>
    </div>
  );
}

export default Profile;
