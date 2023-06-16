/* eslint-disable react/prop-types */
import CustomH2 from "../CustomH2/CustomH2";
import styles from "./Projects.module.scss";
export default function Projects({ textEnter, textLeave }) {
  return (
    <section className={`${styles.projects__section}`} id="projects">
      <CustomH2
        titleSpan="01."
        title="My Projects"
        textEnter={textEnter}
        textLeave={textLeave}
      />
    </section>
  );
}
