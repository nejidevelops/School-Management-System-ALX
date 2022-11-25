import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import Post from "../../components/Post/Post";
import { getPosts } from "../../services/posts";
import "./Home.css";
const Home = ({ userData }) => {
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data.reverse());
    };
    fetchPosts();
  }, [toggleFetch]);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <main id="home">
      <section className="posts">
        {posts?.map((post) => (
          <Post
            key={post?.id}
            post={post}
            userId={userData?.id}
            setToggleFetch={setToggleFetch}
          />
        ))}
      </section>
      {userData?.is_teacher ? (
        <button className="new-post-link" onClick={handleClick}>
          <AiOutlinePlus />
        </button>
      ) : (
        <Link className="new-post-link" to="/new">
          <AiOutlinePlus />
        </Link>
      )}
      <div className={`show-options${showOptions ? " show" : ""}`}>
        <div className="options-box">
          <div className="options-links">
            <Link to="/course/new">
              {" "}
              <HiOutlineUserGroup />
              &nbsp;Course
            </Link>
            <Link to="/new">
              {" "}
              <BsPencilSquare />
              &nbsp;Post
            </Link>
          </div>
          <button className="cancel-button" onClick={handleClick}>
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
