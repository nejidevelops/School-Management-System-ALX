import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/CourseCard/CourseCard";
import Post from "../../components/Post/Post";
import { getUser, getUserPosts, getUserCourses } from "../../services/users";

const TeacherProfile = ({ userData }) => {
  const params = useParams();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchUserInfo = async () => {
      const teacherData = await getUser(params.id);
      setUser(teacherData);
      const postsData = await getUserPosts(params.id);
      setPosts(postsData);
      const coursesData = await getUserCourses(params.id);
      setCourses(coursesData);
    };
    fetchUserInfo();
  }, [params.id]);

  return (
    <main className="profile">
      <section className="user-info">
        <div className="user-info-image">
          <img src={user?.img_url} alt={user?.username} />
        </div>
        <div className="user-info-text">
          <div className="user-info-header">
            <h2>{user?.username?.toUpperCase()}</h2>
            <h4>{user?.is_teacher ? "Teacher" : "Student"}</h4>
          </div>
          <p>{user?.bio}</p>
          <div className="user-stats">
            <h5>POSTS</h5>
            <h2>{posts?.length}</h2>
          </div>
        </div>
      </section>
      <hr />
      <h2>COURSES</h2>
      <section className="user-courses">
        {courses?.length ? (
          courses?.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <h4>No courses yet.</h4>
        )}
      </section>
      <hr />
      <h2>POSTS</h2>
      <section className="user-posts">
        {posts?.length ? (
          posts?.map((post) => (
            <Post key={post.id} post={post} userId={userData?.id} />
          ))
        ) : (
          <h4>No posts yet.</h4>
        )}
      </section>
    </main>
  );
};

export default TeacherProfile;
