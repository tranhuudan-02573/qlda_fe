import { useRef, useState } from "react";
import styles from "./DetailPost.module.css";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { FaRegCircleXmark } from "react-icons/fa6";

function DetailPost() {
  const inputRef = useRef();
  const [openComment, setOpenComment] = useState(false);
  const [value, setValue] = useState("");
  const handleOpenComment = () => {
    setOpenComment(true);
  };
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const handleClear = () => {
    setValue("");
    inputRef.current.focus();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.head}>Bài viết mới</span>
        <div className={styles.info}>
          <div className={styles.left}>
            <img
              className={styles.avatar}
              src="https://i.pinimg.com/736x/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg"
              alt="avatar"
            />
          </div>
          <div className={styles.right}>
            <span className={styles.name}>Phan An</span>
            <span className={styles.time}>
              24 tháng 10 <FaEarthAmericas />
            </span>
          </div>
        </div>
        <span className={styles.topic}>Chủ đề: Phát triển kỹ năng mềm....</span>
        <p className={styles.content}>
          Phát triển kỹ năng mềm là chìa khóa quan trọng cho sự nghiệp trong
          lĩnh vực Công nghệ Thông tin. Trải qua học tập và làm việc, tôi nhận
          thức sâu sắc về tầm quan trọng của kỹ năng giao tiếp, làm việc nhóm,
          và lãnh đạo.
        </p>
        <p className={styles.content}>
          Kỹ năng giao tiếp giúp tôi truyền đạt ý kiến một cách rõ ràng và xây
          dựng mối quan hệ chặt chẽ. Làm việc nhóm đòi hỏi sự linh hoạt và sẵn
          sàng lắng nghe tạo ra một môi trường tích cực và sáng tạo. Trong vai
          trò lãnh đạo, tôi học được cách định hình mục tiêu và tạo động lực cho
          đội ngũ
        </p>
        <p className={styles.content}>
          Để phát triển kỹ năng mềm, tôi không ngừng học hỏi từ mọi trải nghiệm
          và duy trì tư duy tích cực. Sự linh hoạt và sẵn sàng tiếp thu kiến
          thức mới đã giúp tôi không chỉ làm việc hiệu quả mà còn tạo ra sự ảnh
          hưởng tích cực trong sự nghiệp Công nghệ Thông tin
        </p>
        <div className={styles["list-container"]}>
          <ul className={styles["list-comment"]}>
            <li className={styles.item}>
              <div className={styles.left}>
                <img
                  className={styles.avatar}
                  src="https://i.pinimg.com/736x/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg"
                  alt="avatar"
                />
              </div>
              <div className={styles.right}>
                <span className={styles.name}>Trung Bảo</span>
                <p className={styles.content}>Tuyệt vời quá chị</p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.left}>
                <img
                  className={styles.avatar}
                  src="https://i.pinimg.com/736x/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg"
                  alt="avatar"
                />
              </div>
              <div className={styles.right}>
                <span className={styles.name}>Trung Bảo</span>
                <p className={styles.content}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  corporis cupiditate, doloribus rerum ipsum repudiandae
                  dolorem. Similique perspiciatis nesciunt atque, est ab harum
                  ullam error, officiis dicta libero ipsa accusamus!
                </p>
              </div>
            </li>
          </ul>
        </div>
        {!openComment && (
          <div className={styles.comment} onClick={handleOpenComment}>
            <FaRegMessage className={styles.icon} />
            <input
              type="text"
              className={styles.inputComment}
              placeholder="Bình luận ..."
            />
          </div>
        )}
        {openComment && (
          <div className={styles.actions}>
            <div className={styles.left}>
              <img
                className={styles.avatar}
                src="https://i.pinimg.com/736x/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg"
                alt="avatar"
              />
            </div>
            <div className={styles.comment}>
              <input
                ref={inputRef}
                type="text"
                className={styles.inputComment}
                placeholder="Viết bình luận ..."
                onChange={handleOnChange}
                value={value}
              />
              {value.length > 0 && (
                <FaRegCircleXmark
                  className={styles.clear}
                  onClick={handleClear}
                />
              )}
              <IoMdSend className={styles.send} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailPost;
