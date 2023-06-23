/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import styles from "./Projects.module.scss";


export default function CardModal ({ currentCard, setModal }) {
  return (
    <motion.div
      className={`${styles.card__modal}`}
      onClick={() => setModal(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <motion.div
        className={`${styles.card__modal__center}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className={`${styles.modal__center__desc}`}>
          <h3>{currentCard.name}</h3>
          {currentCard.description}
          <a href={currentCard.url} target="blank">
            <p>{currentCard.url}</p>
          </a>
        </div>
        <div className={`${styles.modal__center__tech}`}>
          <h3>Tech stack</h3>

          <ul className={`${styles.tech__list}`}>
            {currentCard.stack.map((techno) => (
              <li key={techno.id} className={`${styles.tech__list__item}`}>
                <div className={`${styles.item__icon__container}`}>
                  <img
                    src={techno.icon}
                    alt="techno icon"
                    className={`${styles.item__icon}`}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
