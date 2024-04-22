import styles from "./contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2 className={styles.title}>Contact</h2>
        <p>Feel free to contact me if you have any questions.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/envelope-regular.svg")}
            alt="emailIcon"
          />
          <a href="mailto:fredualdo@gmail.com">fredualdo@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedin-svgrepo-com.svg")}
            alt="emailIcon"
          />
          <a href="https://www.linkedin.com/in/fredy-montalvo-ruiz-6b524323b/">
            linkedin.com/fredy-montalvo
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/github-142-svgrepo-com.svg")}
            alt="emailIcon"
          />
          <a href="https://github.com/fredymontalvo">
            github.com/fredy-montalvo
          </a>
        </li>
      </ul>
      <a href="#" className={styles.scrollTop} onClick={handleScrollTop}>
        <img src={getImageUrl("contact/house-solid.svg")} alt="" />
      </a>
    </footer>
  );
};
