import { Link } from "react-router-dom";
import "./TeacherCard.css";

const TeacherCard = ({ teacher }) => {
  const { username, email, img_url, id } = teacher;
  return (
    <Link to={`/teacher/${id}`} className="teacher">
      <img src={img_url} alt={username} />
      <div className="teacher-text">
        <h2>{username}</h2>
        <h3>{email}</h3>
      </div>
    </Link>
  );
};

export default TeacherCard;
