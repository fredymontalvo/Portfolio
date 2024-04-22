import styles from "./hero.module.css";
import image from "../../assets/hero/fredy.png";

export const Hero = () => {
  return (
    <section className={styles.container} id="Hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Fredy</h1>
        <p className={styles.subtitle}>
          I am ready to deliver creative digital solutions.
        </p>
        <p className={styles.subtitle}>Together, we can achieve success.</p>

        <a href="mailto:fredualdo@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={image} alt="FredyEmojiProfileImg" className={styles.image} />
    </section>
  );
};
