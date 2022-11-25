import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { getCourse, editCourse, deleteCourse } from "../../services/courses";
import RegisterConfirmation from "../RegisterConfirmation/RegisterConfirmation";

import "./CourseDetail.css";

const CourseDetail = ({ userData }) => {
  const params = useParams();
  const history = useHistory();
  const [course, setCourse] = useState({});
  const [registered, setRegistered] = useState(false);
  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourse(params.id);
      setCourse(data);
    };
    fetchCourses();
  }, [params.id]);

  const handleRegister = async () => {
    await editCourse(params.id, {
      ...course,
      student_id: userData?.id,
    });
    setRegistered(true);
  };

  const handleDelete = async () => {
    await deleteCourse(params.id);
    setTimeout(() => {
      history.push("/browse");
    }, 500);
  };

  return registered ? (
    <RegisterConfirmation courseName={course?.name} />
  ) : (
    <main id="course-detail">
      <article className="course-card">
        <div className="course-card-header">
          <h2>{course?.name}</h2>
          <h4>{course?.category}</h4>
        </div>
        <p>{course?.description}</p>
        <div className="course-card-footer">
          <img
            src={course?.teacher?.img_url}
            alt={`${course?.teacher?.username}`}
          />
          <div className="course-card-footer-text">
            <h5>Taught by</h5>
            <h3>{course?.teacher?.username}</h3>
          </div>
        </div>
        <div className="buttons">
          {!userData?.is_teacher && course?.student_id === null ? (
            <button onClick={handleRegister}>Register</button>
          ) : course.teacher_id === userData?.id ? (
            <>
              <Link to={`/course/${course.id}/edit`}>Edit</Link>
              <button onClick={handleDelete}>Delete</button>
            </>
          ) : (
            <></>
          )}
        </div>
      </article>
    </main>
  );
};

export default CourseDetail;
