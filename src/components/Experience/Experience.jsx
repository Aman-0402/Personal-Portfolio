import React, { useRef } from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { motion, useScroll, useSpring } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export const Experience = () => {
  const containerRef = useRef(null);

  // ✅ Track scroll progress within the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 100px", "end 200px"],
  });

  // ✅ Smooth spring animation for timeline line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className={styles.container} id="experience" ref={containerRef}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.timelineWrapper}>
          {/* Animated vertical line */}
          <motion.div className={styles.timelineLine} style={{ scaleY }} />

          <ul className={styles.history}>
            {history.map((historyItem, id) => (
              <motion.li
                key={id}
                className={styles.historyItem}
                custom={id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={styles.historyItemDetails}>
                  <h3>
                    {historyItem.role} @{" "}
                    <span className={styles.orgName}>
                      {historyItem.organisation}
                    </span>
                  </h3>
                  <p className={styles.duration}>
                    {historyItem.startDate} – {historyItem.endDate} •{" "}
                    {historyItem.duration}
                  </p>

                  {/* Tech stack badges */}
                  <div className={styles.techStack}>
                    {historyItem.techStack.map((tech, idx) => (
                      <span key={idx} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Experience points */}
                  <ul>
                    {historyItem.experiences.map((experience, idx) => (
                      <li key={idx}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
