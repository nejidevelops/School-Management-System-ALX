import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCourses } from "../../services/courses";
import { createPost } from "../../services/posts";
import "./CreatePost.css";

const CreatePost = ({ userData }) => {
  const [courses, setCourses] = useState([]);
  const history = useHistory();

  const [post, setPost] = useState({
    media_url: "",
    content: "",
    course_id: 1,
    user_id: userData.id,
  });

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();
      setCourses(data);
    };
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: name === "course_id" ? parseInt(value) : value,
    });
  };

  const handleClick = () => {
    history.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(post);
    setTimeout(() => {
      history.push("/");
    }, 500);
  };

  return (
    <main id="create-post">
      <form className="create-post-form" onSubmit={handleSubmit}>
        <h2>NEW POST</h2>
        <input
          type="text"
          name="media_url"
          id="media"
          placeholder="Media URL"
          value={post.media_url}
          onChange={handleChange}
        />
        <textarea
          name="content"
          id="content"
          placeholder="Content"
          value={post.content}
          onChange={handleChange}
        />
        <select
          name="course_id"
          id="class"
          value={post.course_id}
          onChange={handleChange}
        >
          {courses.map((course) => (
            <option value={course.id} key={course.id}>
              {course.name}
            </option>
          ))}
        </select>
        <div className="buttons">
          <button onClick={handleClick}>Cancel</button>
          <button type="submit">Create</button>
        </div>
      </form>
    </main>
  );
};

export default CreatePost;
