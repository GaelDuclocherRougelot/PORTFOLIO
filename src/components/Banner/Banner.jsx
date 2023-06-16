import { motion } from "framer-motion";
import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <section className={`${styles.banner__section}`}>
      <div className={`${styles.title__container}`}>
        <motion.h3
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        >
          Welcome
        </motion.h3>
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
        >
          Hey ! I&#39;m Gaël ,
        </motion.h1>
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
        >
          <span className={`${styles.js__span}`}>Javascript</span> Developer.
        </motion.h2>
      </div>
      <motion.img
        className={`${styles.profile__img}`}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
        src="/profile2.png"
        alt="profile picture"
      />
      <a href="#projects" className={`${styles.down__arrow}`}>
        <motion.img
          src="/arrow.svg"
          alt="down arrow"
          className={`${styles.down__arrow}`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "backOut" }}
        />
      </a>
    </section>
  );
}
