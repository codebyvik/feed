import User from "../../assets/user.jpg";
import comment from "../../assets/comment.png";
import like from "../../assets/like.png";
import mall from "../../assets/mall.jpg";
import { useEffect, useState } from "react";
import "./post.style.css";

const PostComponent = ({ post, users }) => {
  // console.log(post, users);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const U = users.find((u) => post.userId === u.id);
    setUser(U);
  }, [post.userId, users]);

  return (
    <div className="post-card">
      {user && (
        <>
          <div className="post-card-header">
            <a href="/">
              <img className="post-user-pic" src={User} alt="" />
              <p>by {user.name} </p>
            </a>
          </div>
          <div className="post-title">{post.title}</div>
          <p className="post-time">{post.time}</p>
          <img className="post-image" src={mall} alt="" />
          <div className="post-footer">
            <div className="post-footer-left">
              <img src={like} alt="like" />
              <img src={comment} alt="comment" />
              <p>7 comments</p>
            </div>
            <div className="post-footer-right">
              <p>Add a comment</p>
              <img src={User} alt={user[0]} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostComponent;
