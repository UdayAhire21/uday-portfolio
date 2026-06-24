import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5w7qm9f",
        "template_8o3oc0p",
        form.current,
        "Sjnevsr-_TLyyjM_k"
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.log(error);
        }
      );
  };

  return (
    <section className="contact" id="contact">

      <div className="section-title">
        <h2>Contact Me</h2>
        <div className="underline"></div>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Build Something Amazing Together 🚀</h3>

          <p>
            I'm actively looking for opportunities as a
            Java Full Stack Developer. Feel free to
            connect with me for projects, internships,
            collaborations, or job opportunities.
          </p>

          <div className="contact-card">
            <FaEnvelope className="icon" />
            <span>udayahire.sit.it@gmail.com</span>
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="icon" />
            <span>+91 9421548907</span>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="icon" />
            <span>Pune, Maharashtra, India</span>
          </div>

          <div className="social-links">

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

        </div>

        <div className="contact-form">

          <form ref={form} onSubmit={sendEmail}>

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;