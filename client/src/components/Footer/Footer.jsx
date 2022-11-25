import { FiUser, FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <h5>John Oketch &copy; 2022</h5>
      <div className="socials">
        <a
          href="https://www.instagram.com/john_mark_69/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiUser />
        </a>
        <a
          href="https://github.com/AWITI0301"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="linkedin.com/in/john-awiti-4b2110208/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100008208971720"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
