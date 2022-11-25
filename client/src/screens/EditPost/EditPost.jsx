import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getCourses } from "../../services/courses";
import { getPost, editPost } from "../../services/posts";
import "./EditPost.css";

const EditPost = ({ userData }) => {
  const history = useHistory();
  const params = useParams();
  const { id } = params;

  const [courses, setCourses] = useState([]);
  const [post, setPost] = useState({
    media_url: "",
    content: "",
    course_id: 1,
    user_id: userData.id,
  });

  useEffect(() => {
    const fetchPostAndCourses = async () => {
      const postData = await getPost(id);
      setPost(postData);
      const courseData = await getCourses();
      setCourses(courseData);
    };
    fetchPostAndCourses();
  }, [id]);

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
    await editPost(id, post);
    setTimeout(() => {
      history.push("/");
    }, 500);
  };

  return (
    <main id="edit-post">
      <form className="edit-post-form" onSubmit={handleSubmit}>
        <h2>EDIT POST</h2>
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
          <button type="submit">Edit</button>
        </div>
      </form>
    </main>
  );
};

export default EditPost;
