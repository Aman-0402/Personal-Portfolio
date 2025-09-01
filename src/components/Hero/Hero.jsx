import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const textArray = [
    "I am an AI/ML expert...",
    "MERN Stack Developer...",
    "Technical Trainer...",
    "Building Intelligent Solutions...",
    "Creating Scalable Web Applications...",
    "Empowering Developers through Training...",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const nextText = textArray[index];

    if (!isDeleting && charIndex < nextText.length) {
      setTimeout(() => setText(nextText.substring(0, charIndex + 1)), typingSpeed);
      setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      setTimeout(() => setText(nextText.substring(0, charIndex - 1)), typingSpeed);
      setTimeout(() => setCharIndex(charIndex - 1), typingSpeed);
    } else if (!isDeleting && charIndex === nextText.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % textArray.length);
    }
  }, [text, charIndex, isDeleting, index]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aman</h1>
        <p className={styles.description}>{text}<span className={styles.cursor}>|</span></p>
        <a href="mailto:aman08.stars@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <img
        src={getImageUrl("hero/mee.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
