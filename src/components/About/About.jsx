/* eslint-disable react/prop-types */
import CustomH2 from "../CustomH2/CustomH2";
import styles from "./About.module.scss";

export default function About({ textEnter, textLeave }) {
  return (
    <section className={`${styles.about__section}`}>
      <CustomH2
        titleSpan="02."
        title="About me"
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <div className={`${styles.me__container}`}>
        <div className={`${styles.me__description}`}>
          <p>IT enthusiast for more than ten years now, I decided to drop my overalls three years ago.</p>
        </div>
      </div>
    </section>
  );
}
