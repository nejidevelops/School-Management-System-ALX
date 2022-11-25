import { FiUser, FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <h5>Newton Ombese & Phoebe Ogallo &copy; 2022</h5>
      <div className="socials">
        <a
          href="https://www.instagram.com/__.bofulo.mkate.__/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiUser />
        </a>
        <a
          href="https://github.com/NewtonOmbese"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/newton-ombese-570862210/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100085694547730"
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
