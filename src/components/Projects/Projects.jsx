/* eslint-disable react/prop-types */
import { useState } from "react";
import CustomH2 from "../CustomH2/CustomH2";
import styles from "./Projects.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { efv, javascript, typescript } from "../../assets/index.js";

const projects = [
  {
    id: 1,
    name: "Events Flash Visual",
    image: efv,
    description: "Photography website (Wedding, Sports and more...)",
    stack: [
      { icon: typescript, color: "#007ACC" },
    ],
  },
  {
    id: 2,
    name: "Actiively",
    image: efv,
    description: "Activities",
    stack: [
      { icon: javascript, color: "#F0DB4F" },
      { icon: typescript, color: "#007ACC" }
    ],
  },
];

const ProjectsCards = ({ setModal, setCard, textEnter, textLeave }) => {
  return (
    <ul className={`${styles.projects__cards}`}>
      {projects.map((project, i) => {
        return (
          <motion.li
            className={`${styles.project__card}`}
            key={project.id}
            onMouseEnter={() => textEnter()}
            onMouseLeave={() => textLeave()}
            onClick={() => {
              setModal(true);
              setCard({
                id: project.id,
                name: project.name,
                image: project.image,
                description: project.description,
                stack: project.stack,
              });
            }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              className={`${styles.project__image}`}
            />
            <h3 className={`${styles.project__name}`}>{project.name}</h3>
          </motion.li>
        );
      })}
    </ul>
  );
};

const CardModal = ({ currentCard, setModal }) => {
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
          <p>{currentCard.description}</p>
        </div>
        <div className={`${styles.modal__center__tech}`}>
          <h3>Tech stack</h3>
          <ul className={`${styles.tech__list}`}>
            {currentCard.stack.map((techno) => (
              <li key={techno.id} className={`${styles.tech__list__item}`}>
                <div className={`${styles.item__icon__container}`} style={{
                  border: `2px solid ${techno.color}`,
                  borderColor: techno.color,
                  boxShadow: `0px 0px 5px 0px ${techno.color}` 
                }}>
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
};

// ----------------------------- Render ------------------------------

export default function Projects({ textEnter, textLeave }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState({});

  return (
    <section className={`${styles.projects__section}`} id="projects">
      <CustomH2
        titleSpan="01."
        title="My Projects"
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <ProjectsCards
        setModal={setModalIsOpen}
        setCard={setCurrentCard}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalIsOpen && (
          <CardModal currentCard={currentCard} setModal={setModalIsOpen} />
        )}
      </AnimatePresence>
    </section>
  );
}
