import { useEffect, useRef, useState } from "react";
import styles from "./DetailPost.module.css";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import axios from "axios";
function DetailPost() {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [userInfo, setUserInfo] = useState([]);

  const getPostById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/user/post/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setPost(response.data);
      } else {
        console.error("Failed to fetch post");
      }
    } catch (error) {
      console.error("Failed to fetch post:", error);
    }
  };
  const handleAddComment = async () => {
    if (comment.length === 0) return;
    const payload = { noiDung: comment };

    try {
      const response = await axios.post(
        `http://localhost:8080/api/user/comment/${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        window.location.reload();
      } else {
        console.error("Failed to fetch post");
      }
    } catch (error) {
      console.error("Failed to fetch post:", error);
    }
  };
  const getCommentsByPost = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/user/post/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setComments(response.data.commentList);
      } else {
        console.error("Failed to fetch comments");
      }
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };
  const getInfoUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:8080/api/user/infoUser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUserInfo(response.data);
      } else {
        console.error("Failed to fetch comments");
      }
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };
  useEffect(() => {
    getPostById();
    getCommentsByPost();
    getInfoUser();
    // eslint-disable-next-line
  }, []);
  console.log(comments);
  const inputRef = useRef();
  const [openComment, setOpenComment] = useState(false);
  const [value, setValue] = useState("");
  const handleOpenComment = () => {
    setOpenComment(true);
  };
  const handleComment = (e) => {
    setComment(e.target.value);
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
            <span className={styles.name}>{userInfo.firstName}</span>
            <span className={styles.time}>
              24 tháng 10 <FaEarthAmericas />
            </span>
          </div>
        </div>
        <span className={styles.topic}>{post.chuDe}</span>
        <p className={styles.content}>{post.noiDung}</p>

        <div className={styles["list-container"]}>
          <ul className={styles["list-comment"]}>
            {comments.map((item) => {
              return (
                <li key={item.id} className={styles.item}>
                  <div className={styles.left}>
                    <img
                      className={styles.avatar}
                      src="https://i.pinimg.com/736x/01/48/0f/01480f29ce376005edcbec0b30cf367d.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div className={styles.right}>
                    <span className={styles.name}>{item.createBy}</span>
                    <p className={styles.content}>{item.noiDung}</p>
                  </div>
                </li>
              );
            })}
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
                onChange={handleComment}
                value={comment}
              />
              {value.length > 0 && (
                <FaRegCircleXmark
                  className={styles.clear}
                  onClick={handleClear}
                />
              )}
              <IoMdSend
                className={styles.send}
                onClick={() => handleAddComment()}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailPost;
