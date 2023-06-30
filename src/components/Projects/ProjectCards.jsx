/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import styles from "./Projects.module.scss";

// -------------------------- Import dev icons -----------------------------
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
  actiively,
} from "../../assets/index.js";

// ---------------------------- Data ----------------------------

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
          photographer.
        </p>
        <p>A search bar allows you to quickly find your album.</p>
        <p>
          <strong>Informations :</strong>
        </p>
        <ul>
          <p>- This project was done for a client.</p>
          <p>- All the photos are stored into a AWS S3 Bucket.</p>
          <p>
            - The admin have a dashboard for (Create, View, Update, Delete)
            albums & photos.
          </p>
          <p>
            - The sensitive data are hashed into the database via Bcrypt and
            compared.
          </p>
        </ul>
        <p>
          <strong>Link :</strong>
        </p>
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
    image: actiively,
    description: (
      <>
        <p>Actiively is a centralized activity search platform.</p>
        <p>
          <strong>The problematic :</strong>
        </p>
        <p>
          You want to find an activity, but you are lost, you do not know on
          which website you will be able to find the activity of your dreams.
          because there is no centralized platform and it can be long to find,
          this is where Actiively comes in.
        </p>
        <p>
          <strong>The solution :</strong>
        </p>
        <p>
          The goal is to facilitate the search for an activity or organization.
          With the search and filter system, you can easily and quickly find an
          activity that suits you and highlight organizations that need
          visibility.
        </p>
        <p>
          <strong>Informations :</strong>
        </p>
        <p>
          This project has been created at the end of my bootcamp (O&apos;clock)
          with 3 of my colleague during one month.
        </p>
        <p>- I was the backend developer of this project.</p>
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

// ----------------------------- Render ------------------------------------

export default function ProjectsCards({
  setModal,
  setCard,
  textEnter,
  textLeave,
}) {
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
}
