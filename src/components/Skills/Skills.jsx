import "./Skills.css";
import { motion } from "framer-motion";
function Skills() {

  const skills = [
    {
      name: "Java",
      percentage: 90
    },
    {
      name: "React",
      percentage: 85
    },
    {
      name: "Spring Boot",
      percentage: 80
    },
    {
      name: "Hibernate",
      percentage: 85
    },
    {
      name: "Oracle DB",
      percentage: 85
    },
    {
      name: "MySQL",
      percentage: 80
    },
    {
      name: "HTML & CSS",
      percentage: 95
    },
    {
      name: "JavaScript",
      percentage: 90
    }
  ];

  return (
    <motion.section
  className="skills"
  id="skills"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

      <div className="section-title">
        <h2>Technical Skills</h2>
        <div className="underline"></div>
      </div>

      <div className="skills-container">

        <div className="skills-left">

          <h3>
            My Technical Expertise
          </h3>

          <p>
            I specialize in Full Stack Development
            using React, Java, Hibernate and Oracle
            Database. I enjoy building scalable,
            responsive and user-friendly applications.
          </p>

          <div className="skill-tags">

            <span>React</span>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>Hibernate</span>
            <span>Oracle</span>
            <span>MySQL</span>
            <span>GitHub</span>
            <span>JavaScript</span>

          </div>

        </div>

        <div className="skills-right">

          {skills.map((skill,index)=>(
            <div
              className="skill-item"
              key={index}
            >

              <div className="skill-info">

                <span>{skill.name}</span>

                <span>
                  {skill.percentage}%
                </span>

              </div>

              <div className="skill-bar">

                <div
                  className="skill-progress"
                  style={{
                    width: `${skill.percentage}%`
                  }}
                ></div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </motion.section>
  );
}

export default Skills;