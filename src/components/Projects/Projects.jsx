import "./Projects.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

import storysphere from "../../assets/projects/storysphere1.png";
import endobite from "../../assets/projects/endobite.png";
import pest from "../../assets/projects/pest1.jpeg";

function Projects() {

  const projects = [

    {
      title: "StorySphere",

      image: storysphere,

      type: "Full Stack Development",

      description:
        "A full-stack novel reading and publishing platform where users can read stories, create novels, publish chapters, interact through comments and manage content through an admin dashboard.",

      tech: [
        "React",
        "Java",
        "Spring Boot",
        "Hibernate",
        "Oracle DB",
        "HTML",
        "CSS",
        "JavaScript"
      ],

      github: "#",

      demo: "#"
    },

    {
      title: "EndoBite Landing Page",

      image: endobite,

      type: "Frontend Development",

      description:
        "A premium and responsive product landing page developed using HTML, CSS and JavaScript with modern UI, animations and fully responsive design.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design"
      ],

      github: "https://github.com/UdayAhire21",

      demo: "https://udayahire21.github.io/EndoBite/"
    },

    {
      title: "AI-ML Pest Detection",

      image: pest,

      type: "Artificial Intelligence",

      description:
        "An AI-powered pest detection system using CNN models, TensorFlow and OpenCV to identify crop pests and improve agricultural productivity.",

      tech: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "CNN",
        "Machine Learning"
      ],

      github: "#",

      demo: "#"
    }

  ];

  return (

    <section
      className="projects"
      id="projects"
    >

      <div className="projects-title">

        <h2>
          Featured Projects
        </h2>

        <div className="projects-underline"></div>

      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <motion.div

            key={index}

            className="project-card"

            initial={{
              opacity: 0,
              y: 80
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            viewport={{
              once: true
            }}

            transition={{
              duration: 0.6
            }}

            whileHover={{
              scale: 1.02
            }}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-content">

              <div className="project-type">

                {project.type}

              </div>

              <h3>

                {project.title}

              </h3>

              <p>

                {project.description}

              </p>

              <div className="tech-stack">

                {project.tech.map((tech, i) => (

                  <span key={i}>
                    {tech}
                  </span>

                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );
}

export default Projects;