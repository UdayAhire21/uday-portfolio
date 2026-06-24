import "./Achievements.css";
import { motion } from "framer-motion";

<motion.div
  className="achievement-card"
  whileHover={{
    scale: 1.05
  }}
  initial={{
    opacity: 0,
    y: 50
  }}
  whileInView={{
    opacity: 1,
    y: 0
  }}
  transition={{
    duration: 0.5
  }}
></motion.div>
function Achievements() {
  const achievements = [
    {
      icon: "🏆",
      title: "Secretary - Spark Committee",
      desc: "Led and coordinated college events, activities and student engagement programs."
    },
    {
      icon: "🏑",
      title: "District Level Hockey Player",
      desc: "Represented at district level hockey competitions and demonstrated leadership on the field."
    },
    {
      icon: "🐍",
      title: "Python Certification",
      desc: "Successfully completed Python Certification with an aggregate score of 96/100."
    },
    {
      icon: "☁️",
      title: "AWS Cloud Certification",
      desc: "Created and managed Virtual Private Cloud (VPC) environments using AWS."
    },
    {
      icon: "🤖",
      title: "Generative AI Certification",
      desc: "Completed Introduction to Generative AI certification from Google Cloud."
    },
    {
      icon: "🎨",
      title: "Portrait Artist",
      desc: "Passionate artist skilled in creating hand-drawn portraits and creative artwork."
    }
  ];

  return (
    <section className="achievements" id="achievements">

      <div className="section-title">
        <h2>Achievements</h2>
        <div className="underline"></div>
      </div>

      <div className="achievement-grid">

        {achievements.map((item, index) => (
          <motion.div
            className="achievement-card"
            whileHover={{
              scale: 1.05
            }}
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5
            }}
            key={index}
          >
            <div className="achievement-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Achievements;