import { motion } from "framer-motion";
import styles from "./Banner.module.scss";
export default function Banner() {
  return (
    <section className={`${styles.banner__section}`}>
      <div className={`${styles.title__container}`}>
        <motion.h3
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        >
          Welcome
        </motion.h3>
        <motion.h1
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
        >
          Hey ! I&#39;m Gaël ,
        </motion.h1>
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9, ease: "easeInOut" }}
        >
          <span className={`${styles.js__span}`}>Javascript</span> Developer.
        </motion.h2>
      </div>
      <motion.img 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1, ease: "easeInOut" }} src="/profile-pic.png" alt="profile picture" />
    </section>
  );
}
