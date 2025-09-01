import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About</h1>
      </motion.h2>
      <div className={styles.content}>
        <motion.img
          src={getImageUrl("about/ro.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <ul className={styles.aboutItems}>
          {aboutData.map((item, index) => (
            <motion.li
              key={index}
              className={styles.aboutItem}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={getImageUrl(item.icon)} alt={item.title} />
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const aboutData = [
  {
    icon: "about/uiIcon.png",
    title: "AI/ML Expert",
    description:
      "I specialize in building intelligent, data-driven solutions using AI and machine learning. My expertise includes deep learning, NLP, and automation to enhance decision-making and optimize processes.",
  },
  {
    icon: "about/serverIcon.png",
    title: "MERN Stack Developer",
    description:
      "As a MERN Stack developer, I create scalable full-stack applications using MongoDB, Express.js, React, and Node.js, ensuring high performance and seamless user experiences.",
  },
  {
    icon: "about/cursorIcon.png",
    title: "Technical Trainer",
    description:
      "I am passionate about mentoring and upskilling developers, delivering hands-on training in AI, web development, and programming with a practical, real-world approach.",
  },
  {
    icon: "about/cursorIcon.png",
    title: "UI Designer",
    description:
      "I create intuitive and visually appealing user interfaces, combining modern design principles with seamless user experience to enhance digital products.",
  },
];
