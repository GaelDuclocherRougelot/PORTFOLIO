/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import styles from "./Banner.module.scss";
import { profile, arrow } from '../../assets/index.js';

export default function Banner({ textEnter, textLeave }) {
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
        src={profile}
        alt="profile picture"
      />
      <a href="#projects" className={`${styles.down__arrow}`}>
        <motion.img
          src={arrow}
          alt="down arrow"
          onMouseEnter={() => textEnter()}
          onMouseLeave={() => textLeave()}
          className={`${styles.down__arrow}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.2, ease: "backOut" }}
        />
      </a>
    </section>
  );
}
