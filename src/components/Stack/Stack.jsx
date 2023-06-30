/* eslint-disable react/prop-types */
import CustomH2 from "../CustomH2/CustomH2";
import styles from "./Stack.module.scss";

export default function Stack({ textEnter, textLeave }) {
  return (
    <section className={`${styles.stack__section}`}>
      <CustomH2
        titleSpan="03."
        title="My tech stack"
        textEnter={textEnter}
        textLeave={textLeave}
      />
    </section>
  );
}
