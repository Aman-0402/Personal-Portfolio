import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import styles from "./ProjectDetails.module.css";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.details === `/projects/${projectId}`);

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{project.title}</h1>
      
      {/* Main Project Image
      <img src={`/${projects.imageSrc}`} alt={project.title} className={styles.mainImage} /> */}

      {/* Description Section */}
      <p className={styles.description}>{project.longDescription}</p>

      {/* Features List */}
      <h2 className={styles.subTitle}>Features</h2>
      <ul className={styles.features}>
        {project.features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>{feature}</li>
        ))}
      </ul>

      {/* Additional Images */}
      <h2 className={styles.subTitle}>Screenshots</h2>
      <div className={styles.imageGallery}>
        {project.additionalImages.map((image, index) => (
          <img key={index} src={`/${image}`} alt={`Screenshot ${index + 1}`} className={styles.galleryImage} />
        ))}
      </div>

      {/* Source Code Link */}
      <a href={project.source} target="_blank" rel="noopener noreferrer" className={styles.link}>
        View Source Code
      </a>
    </div>
  );
};

export default ProjectDetails;
