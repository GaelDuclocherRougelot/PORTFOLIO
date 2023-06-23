/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  aws,
  efv,
  express,
  javascript,
  next,
  node,
  postgres,
  prisma,
  react,
  sass,
  typescript,
} from "../../assets/index.js";
import CustomH2 from "../CustomH2/CustomH2";
import styles from "./Projects.module.scss";

const projects = [
  {
    id: 1,
    name: "Events Flash Visual",
    image: efv,
    url: "https://eventsflashvisual.fr/",
    description: (
      <>
        <p>
          Events photography website (Wedding, shootings, sports and more...)
        </p>
        <p>
          The site contains a portfolio and a private gallery to view your
          photos, for this you must enter a password that was given by the
          photographer when creating the album. A search bar allows you to
          quickly find your album.
        </p>
        <ul>
          <p>- All the photos are stored into a AWS S3 Bucket.</p>
          <p>- The admin have a dashboard for (Create, View, Update, Delete) albums & Photos.</p>
          <p>- The sensitive data are hashed into the database via Bcrypt.</p>
        </ul>
      </>
    ),
    stack: [
      { icon: typescript },
      { icon: next },
      { icon: node },
      { icon: express },
      { icon: postgres },
      { icon: prisma },
      { icon: aws },
      { icon: sass },
    ],
  },
  {
    id: 2,
    name: "Actiively",
    image: efv,
    description: (
      <>
        <p>Actiively is a centralized activity search platform.</p>
        <p>The problematic:</p>
        <p>
          You want to find an activity, but you are lost, you do not know on
          which website you will be able to find the activity of your dreams.
          because there is no centralized platform and it can be long to find,
          this is where Actiively comes in.
        </p>
        <p>The solution:</p>
        <p>
          The goal is to facilitate the search for an activity or organization.
          With the search and filter system, you can easily and quickly find an
          activity that suits you and highlight organizations that need
          visibility.
        </p>
      </>
    ),
    stack: [
      { icon: javascript },
      { icon: react },
      { icon: node },
      { icon: express },
      { icon: postgres },
      { icon: sass },
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
                url: project.url,
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
