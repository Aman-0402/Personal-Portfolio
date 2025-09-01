import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.footer 
      id="contact" 
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.text}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Feel free to reach out!
        </motion.p>
      </div>
      <ul className={styles.links}>
        {[{
          icon: "emailIcon.png",
          alt: "Email icon",
          link: "mailto:aman08.stars@gmail.com",
          text: "aman08.stars@gmail.com"
        }, {
          icon: "linkedinIcon.png",
          alt: "LinkedIn icon",
          link: "https://www.linkedin.com/in/aman-raj-081905211",
          text: "linkedin.com/in/aman-raj-081905211"
        }, {
          icon: "githubIcon.png",
          alt: "Github icon",
          link: "https://github.com/Aman-0402",
          text: "github.com/Aman-0402"
        }].map((item, index) => (
          <motion.li 
            key={index} 
            className={styles.link}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={getImageUrl(`contact/${item.icon}`)} alt={item.alt} />
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.text}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.footer>
  );
};
