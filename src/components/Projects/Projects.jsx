/* eslint-disable react/prop-types */
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import CustomH2 from "../CustomH2/CustomH2";
import CardModal from "./CardModal";
import ProjectsCards from "./ProjectCards";
import styles from "./Projects.module.scss";

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
        titleColor="#fff"
        titleColorHover="#1a1a1a"
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
