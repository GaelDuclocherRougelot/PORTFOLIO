/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import styles from "./CustomH2.module.scss";

export default function CustomH2({ textEnter, textLeave, title, titleSpan }) {
  return (
    <motion.h2
      className={`${styles.h2}`}
      onMouseEnter={() => textEnter()}
      onMouseLeave={() => textLeave()}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ backgroundColor: "#FFF", color: "black" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
    >
      <span>{titleSpan ? titleSpan : ""}</span> {title}
    </motion.h2>
  );
}
