/* eslint-disable react/prop-types */
import { coding } from "../../assets";
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
        titleColor="#1a1a1a"
        titleColorHover="#fff"
      />
      <div className={`${styles.me__container}`}>
        <div className={`${styles.me__description}`}>
          <p>
            Passionate about IT for ten years now, at 20 I decided to make it
            my job.
          </p>
          <p>Before, I was in overalls painting and repairing cars, but
            that was not my destiny.</p>
          <p>
            I like everything creative, design, logic, new technologies... so I
            found my new way: the way of web development !
          </p>
          <p>

          </p>
        </div>
        <img src={coding} alt="me" />
      </div>
      <h2 className={`${styles.me__using__title}`}>What do I use ?</h2>
    </section>
  );
}
