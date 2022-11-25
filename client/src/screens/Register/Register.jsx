import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { register } from "../../services/users";
import "./Register.css";
const Register = ({ setUserData }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    is_teacher: false,
    bio: "",
    img_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    const { name } = e.target;
    e.preventDefault();
    if (name === "student" && user.is_teacher) {
      setUser({
        ...user,
        is_teacher: false,
      });
    } else if (name === "teacher" && !user.is_teacher) {
      setUser({
        ...user,
        is_teacher: true,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createUser = async () => {
      const newUser = await register(user);
      setUserData(newUser);
      setTimeout(() => {
        history.push("/");
      }, 500);
    };
    createUser();
  };

  return (
    <div className="login-register">
      <section className="login-register-heading">
        <h1>E-learn</h1>
        <h5>No human is limited</h5>
      </section>
      <form className="login-register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={user.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="image">Profile Picture URL</label>
        <input
          type="text"
          name="img_url"
          id="image"
          value={user.img_url}
          onChange={handleChange}
        />
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          name="bio"
          id="bio"
          value={user.bio}
          onChange={handleChange}
        />
        <div className="register-buttons">
          <button
            className={`student-btn${user.is_teacher ? "" : " btn-selected"}`}
            onClick={handleClick}
            name="student"
          >
            <img
              src="img/BranchOutline.png"
              alt="Talentree Student Logo"
              name="student"
            />{" "}
            Student
          </button>
          <button
            className={`teacher-btn${user.is_teacher ? " btn-selected" : ""}`}
            onClick={handleClick}
            name="teacher"
          >
            <img
              src="img/TreeOutline.png"
              alt="Talentree Student Logo"
              name="teacher"
            />{" "}
            Teacher
          </button>
        </div>
        <button type="submit">Submit</button>
        <p>
          Already have an account?{" "}
          <Link className="login-register-link" to="/login">
            Log in!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
