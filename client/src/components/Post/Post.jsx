import { useState } from "react";
import { Link } from "react-router-dom";
import { deletePost } from "../../services/posts";
import "./Post.css";

const Post = ({ post, userId, setToggleFetch }) => {
  const { media_url, content, user, course, created_at, user_id, id } = post;

  const [showDelete, setShowDelete] = useState(false);

  const dateCreated = new Date(created_at).toString();
  const dateArray = dateCreated.split(" ").splice(0, 5);
  dateArray[4] = dateArray[4].slice(0, 5);
  const displayDate = `${dateArray[0]}, ${dateArray[1]} ${dateArray[2]}, ${dateArray[3]} at ${dateArray[4]}`;

  const toggleDelete = () => {
    setShowDelete(!showDelete);
  };

  const handleClick = async () => {
    await deletePost(id);
    setToggleFetch((curr) => !curr);
    setTimeout(() => {
      toggleDelete();
    }, 500);
  };

  return (
    <>
      <article className="post">
        <div className="post-header">
          <div className="post-header-img">
            <img src={user?.img_url} alt={user?.username} />
          </div>
          <div className="post-header-text">
            <h3>
              {user?.username} • {course?.name}
            </h3>
            <h5>{displayDate}</h5>
          </div>
        </div>
        <p>{content}</p>
        <img src={media_url} alt={user?.username} />
        <div className="post-buttons">
          {user_id === userId ? (
            <>
              <button>
                <Link to={`/edit/${id}`}>Edit</Link>
              </button>
              <button onClick={toggleDelete}>Delete</button>
            </>
          ) : (
            <></>
          )}
        </div>
      </article>
      <div className={`delete-confirm${showDelete ? " show" : ""}`}>
        <div className="delete-box">
          <h2>Are you sure you want to delete?</h2>
          <h5>After deletion, you can no longer recover this post.</h5>
          <div className="delete-buttons">
            <button onClick={toggleDelete}>Cancel</button>
            <button onClick={handleClick}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
