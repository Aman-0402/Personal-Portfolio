import React from "react";
import styles from "./MyTech.module.css";
import skills from "../data/skills.json";
import { getImageUrl } from "../utils";
import { motion } from "framer-motion";

const groupSkillsByCategory = (skills) => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});
};

// ✅ Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export const MyTech = () => {
  const categorizedSkills = groupSkillsByCategory(skills);

  return (
    <section id="technologies" className={styles.container}>
      <h2 className={styles.title}>My Tech Stack</h2>
      <motion.div
        className={styles.categoriesWrapper}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Object.keys(categorizedSkills).map((category, idx) => (
          <motion.div
            key={idx}
            className={styles.categoryCard}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className={styles.categoryTitle}>{category}</h3>
            <motion.div
              className={styles.skillGrid}
              variants={containerVariants}
            >
              {categorizedSkills[category].map((skill, i) => (
                <motion.div
                  key={i}
                  className={styles.skill}
                  variants={skillVariants}
                  whileHover={{ scale: 1.15 }}
                >
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <span className={styles.skillTitle}>{skill.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
