import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { verify } from "../../services/users";
import "./Header.css";
const Header = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const reverify = async () => {
      const currUser = await verify();
      setUserData(currUser);
    };
    reverify();
  }, []);
  return (
    <header>
      <section>
        <h1>
          <img
            src="https://images-platform.99static.com//6Op7GsOdNRb4VzB8B2n8UcNjP9E=/154x83:654x583/fit-in/500x500/99designs-contests-attachments/27/27634/attachment_27634520"
            alt="brightes Student Logo"
          />
          E-learn
        </h1>
        <NavLink
          activeClassName="active-profile"
          className="profile-link profile-header"
          to="/profile"
        >
          <img src={userData?.img_url} alt={userData?.username} />
          <div className="profile-link-text">
            <h3>{userData?.username}</h3>
            <h5>{userData?.is_teacher ? "TEACHER" : "STUDENT"}</h5>
          </div>
        </NavLink>
      </section>
      <nav>
        <NavLink exact className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/browse">
          search
        </NavLink>
        <NavLink className="nav-link profile-nav" to="/profile">
          Profile
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
