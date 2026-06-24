import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="about-container">

        <div className="section-title">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>Java Full Stack Developer</h3>

            <p>
              I am <span>Uday Ahire</span>, a passionate Full Stack Developer
              and Information Technology graduate from Sinhgad Institute of
              Technology, Lonavala.
            </p>

            <p>
              I specialize in building modern web applications using
              React, Java, Hibernate, Oracle Database, HTML, CSS and
              JavaScript. I enjoy solving real-world problems through
              technology and continuously learning new tools and frameworks.
            </p>

            <p>
              My major project <span>StorySphere</span> is a full-stack
              novel reading and publishing platform that allows users to
              read stories, post comments and create their own content.
            </p>

            <div className="about-buttons">
              {/* Redirects down to the Contact section */}
              <a href="#contact">
                <button>Hire Me</button>
              </a>
              
              {/* Opens LinkedIn in a new tab */}
              <a 
                href="https://www.linkedin.com/in/uday-ahire-v21/" 
                target="_blank" 
                rel="noreferrer"
              >
                <button className="secondary-btn">
                  Let's Connect
                </button>
              </a>
            </div>
          </div>

          <div className="about-cards">

            <div className="info-card">
              <h4>🎓 Education</h4>
              <p>B.E Information Technology</p>
              <p>CGPA: 7.51</p>
            </div>

            <div className="info-card">
              <h4>💻 Experience</h4>
              <p>Full Stack Projects</p>
              <p>React & Java</p>
            </div>

            <div className="info-card">
              <h4>🏆 Achievement</h4>
              <p>Secretary - Spark Committee</p>
            </div>

            <div className="info-card">
              <h4>🏑 Sports</h4>
              <p>District Level Hockey Player</p>
            </div>

          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default About;