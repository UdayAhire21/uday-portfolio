import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
<div className="logo-container">
  <img src={logo} alt="UA Logo" className="logo-img" />
</div>

      <ul className={menu ? "nav-links active" : "nav-links"}>

  <li>
    <Link
      to="home"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      activeClass="active"
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      to="about"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      activeClass="active"
    >
      About
    </Link>
  </li>

  <li>
    <Link
      to="skills"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      activeClass="active"
    >
      Skills
    </Link>
  </li>

  <li>
    <Link
      to="projects"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      activeClass="active"
    >
      Projects
    </Link>
  </li>

  <li>
    <Link
      to="achievements"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      activeClass="active"
    >
      Achievements
    </Link>
  </li>

  <li>
    <Link
      to="contact"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      activeClass="active"
    >
      Contact
    </Link>
  </li>

</ul>

      <button className="resume-btn">
        Resume
      </button>

      <div
        className="menu-icon"
        onClick={() => setMenu(!menu)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;