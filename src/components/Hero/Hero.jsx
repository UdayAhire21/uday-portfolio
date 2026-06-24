import "./Hero.css";
import profile from "../../assets/profile.jpg";
import resume from "../../assets/resume.pdf";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAngular,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaArrowDown
} from "react-icons/fa";

import {
  SiC,
  SiEclipseide,
  SiMysql,
  SiMongodb,
  SiHibernate
} from "react-icons/si";
// Import VS Code from the VSC (Visual Studio Code) pack
import { VscVscode } from "react-icons/vsc"; 

// Import Oracle from the Gr (Grommet) pack
import { GrOracle } from "react-icons/gr";

import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <span className="hero-badge">
          🚀 Open To Work
        </span>

        <h3>Hello, I'm</h3>

        <h1>
          Uday <span>Ahire</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Java Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "Backend Developer",
            2000,
            "Open To Work",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <p>
          Passionate Full Stack Developer specializing
          in React, Java, Hibernate and Oracle Database.
          Building scalable and modern web applications
          with clean UI and efficient backend systems.
        </p>

        <div className="hero-buttons">

          <a href={resume} download>
            <button>
              Download Resume
            </button>
          </a>

          <a href="#contact">
            <button className="outline">
              Contact Me
            </button>
          </a>

        </div>

        <div className="hero-social">

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

        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <h2>11+</h2>
            <span>Projects</span>
          </div>

          <div className="stat-card">
            <h2>7.51</h2>
            <span>CGPA</span>
          </div>

          <div className="stat-card">
            <h2>2025</h2>
            <span>Graduate</span>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="image-container">

          {/* All 17 Skills */}
          <div className="orbit orbit1"><FaHtml5 /></div>
          <div className="orbit orbit2"><FaCss3Alt /></div>
          <div className="orbit orbit3"><FaJs /></div>
          <div className="orbit orbit4"><FaAngular /></div>
          <div className="orbit orbit5"><FaReact /></div>
          <div className="orbit orbit6"><SiC /></div>
          <div className="orbit orbit7"><FaJava /></div>
          <div className="orbit orbit8"><FaPython /></div>
          <div className="orbit orbit9"><FaGitAlt /></div>
          <div className="orbit orbit10"><FaGithub /></div>
          <div className="orbit orbit11"><VscVscode /></div>
          <div className="orbit orbit12"><SiEclipseide /></div>
          <div className="orbit orbit13"><SiMysql /></div>
          <div className="orbit orbit14"><SiMongodb /></div>
          <div className="orbit orbit15"><GrOracle /></div>
          <div className="orbit orbit16"><span className="jdbc-text">JDBC</span></div>
          <div className="orbit orbit17"><SiHibernate /></div>

          <img
            src={profile}
            alt="Uday Ahire"
          />

        </div>

      </div>

      <a href="#about" className="scroll-down">
        <FaArrowDown />
      </a>

    </section>
  );
}

export default Hero;