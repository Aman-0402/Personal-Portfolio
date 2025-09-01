import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, details, source, demo },
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {/* Skills */}
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className={styles.links}>
        <button onClick={() => navigate(details)} className={styles.btnPrimary}>
          View Details
        </button>

        {source && source !== "#" && (
          <a
            href={source}
            className={styles.btnSecondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}

        {demo && (
          <a
            href={demo}
            className={styles.btnDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};
