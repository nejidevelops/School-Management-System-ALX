import { Link } from "react-router-dom";
import "./CourseCard.css";
const CourseCard = ({ course }) => {
  const { name, teacher, description, id } = course;
  return (
    <Link to={`/course/${id}`} className="course">
      <h2>{name}</h2>
      <h3>{teacher.username}</h3>
      <p>{description}</p>
    </Link>
  );
};

export default CourseCard;
