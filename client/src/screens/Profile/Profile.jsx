import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../../components/CourseCard/CourseCard";
import Post from "../../components/Post/Post";
import { getUserPosts, getUserCourses } from "../../services/users";
import "./Profile.css";

const Profile = ({ userData }) => {
  const [userPosts, setUserPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    if (userData?.id) {
      const fetchPosts = async () => {
        const postsData = await getUserPosts(userData?.id);
        setUserPosts(postsData);
        const coursesData = await getUserCourses(userData?.id);
        setCourses(coursesData);
      };
      fetchPosts();
    }
  }, [userData?.id, toggleFetch]);
  return userData ? (
    <main className="profile">
      <section className="user-info">
        <div className="user-info-image">
          <img src={userData?.img_url} alt={userData?.username} />
        </div>
        <div className="user-info-text">
          <div className="user-info-header">
            <h2>{userData?.username?.toUpperCase()}</h2>
            <h4>{userData?.is_teacher ? "Teacher" : "Student"}</h4>
          </div>
          <p>{userData?.bio}</p>
          <div className="user-stats">
            <h5>POSTS</h5>
            <h2>{userPosts?.length}</h2>
          </div>
          <div className="user-info-buttons">
            <Link to="/logout">Log Out</Link>
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
        {userPosts?.length ? (
          userPosts?.map((post) => (
            <Post
              key={post.id}
              post={post}
              userId={userData?.id}
              setToggleFetch={setToggleFetch}
            />
          ))
        ) : (
          <h4>No posts yet.</h4>
        )}
      </section>
    </main>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Profile;
