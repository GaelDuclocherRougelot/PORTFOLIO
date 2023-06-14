import styles from "./Projects.module.scss";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className={`${styles.projects__section}`}>
      <motion.h2
        className={`${styles.project__title}`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{opacity: 1, x: 0}}
        viewport={{ once: true }}
        transition={{ duration: .5, delay: 0.2, ease: "easeInOut" }}
      >
        <span>01.</span> My Projects
      </motion.h2>
    </section>
  );
}
