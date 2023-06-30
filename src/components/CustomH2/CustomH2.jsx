/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import styles from "./CustomH2.module.scss";

export default function CustomH2({ textEnter, textLeave, title, titleSpan, titleColor, titleColorHover }) {
  return (
    <motion.h2
      className={`${styles.h2}`}
      style={{ color: titleColor, borderColor: titleColor}}
      onMouseEnter={() => textEnter()}
      onMouseLeave={() => textLeave()}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ backgroundColor: titleColor, color: titleColorHover }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
    >
      <span>{titleSpan ? titleSpan : ""}</span> {title}
    </motion.h2>
  );
}
