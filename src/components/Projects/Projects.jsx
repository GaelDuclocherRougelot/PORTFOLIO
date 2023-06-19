/* eslint-disable react/prop-types */
import { useState } from "react";
import CustomH2 from "../CustomH2/CustomH2";
import styles from "./Projects.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Events Flash Visual",
    image: "/public/efv.webp",
    description: "Photography website (Wedding, Sports and more...)",
  },
  {
    id: 2,
    name: "Events Flash Visual 2",
    image: "/public/efv.webp",
    description: "Photography website (Wedding, Sports and more...)",
  },
  {
    id: 3,
    name: "Events Flash Visual 3",
    image: "/public/efv.webp",
    description: "Photography website (Wedding, Sports and more...)",
  },
  {
    id: 1,
    name: "Events Flash Visual",
    image: "/public/efv.webp",
    description: "Photography website (Wedding, Sports and more...)",
  },
  {
    id: 2,
    name: "Events Flash Visual 2",
    image: "/public/efv.webp",
    description: "Photography website (Wedding, Sports and more...)",
  },
  {
    id: 3,
    name: "Events Flash Visual 3",
    image: "/public/efv.webp",
    description: "Photography website (Wedding, Sports and more...)",
  },
];

const ProjectsCards = ({ setModal, setCard }) => {
  return (
    <ul className={`${styles.projects__cards}`}>
      {projects.map((project, i) => {
        return (
          <motion.li
            className={`${styles.project__card}`}
            key={project.id}
            onClick={() => {
              setModal(true);
              setCard({
                id: project.id,
                name: project.name,
                image: project.image,
                description: project.description,
              });
            }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: i * 0.3
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
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div
        className={`${styles.card__modal__center}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{currentCard.name}</h3>
        <p>{currentCard.description}</p>
      </div>
    </motion.div>
  );
};

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
      <ProjectsCards setModal={setModalIsOpen} setCard={setCurrentCard} />
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalIsOpen && (
          <CardModal currentCard={currentCard} setModal={setModalIsOpen} />
        )}
      </AnimatePresence>
    </section>
  );
}
