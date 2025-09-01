import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails";
import { MyTech } from "./components/MyTech";

// ✅ Import Framer Motion
import { motion, AnimatePresence } from "framer-motion";

// ✅ Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const pageTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <motion.div
              variants={pageTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                variants={fadeInUp}
              >
                <Hero />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                variants={fadeInUp}
              >
                <About />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                variants={fadeInUp}
              >
                <Experience />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                variants={fadeInUp}
              >
                <MyTech />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                variants={fadeInUp}
              >
                <Projects />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                variants={fadeInUp}
              >
                <Contact />
              </motion.div>
            </motion.div>
          }
        />

        {/* Project Details Page */}
        <Route
          path="/projects/:projectId"
          element={
            <motion.div
              variants={pageTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ProjectDetails />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
