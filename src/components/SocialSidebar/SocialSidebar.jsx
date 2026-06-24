import "./SocialSidebar.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function SocialSidebar() {
  return (
    <div className="social-sidebar">

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
  );
}

export default SocialSidebar;