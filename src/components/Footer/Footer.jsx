import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Uday Ahire</h2>

        <p>
          Java Full Stack Developer | React Developer |
          Passionate about building scalable and modern
          web applications.
        </p>

        <div className="footer-social">

          <a
            href="https://github.com/UdayAhire21"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/uday-ahire-v21/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:udayahire.sit.it@gmail.com"
          >
            <FaEnvelope />
          </a>

        </div>

        <button
          className="scroll-top"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Uday Ahire. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;