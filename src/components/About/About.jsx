import styles from "./About.module.css";
import image from "../../assets/about/aboutImg.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <img src={image} alt="FredyEmojiComoputer" className={styles.image} />
      <div className={styles.content}>
        <div className={styles.subtitle}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.info}>
            <p>
              As a hospitality manager with over 10 years of experience in
              leadership and project management within the restaurant industry.
              Throughout my career, I&apos;ve successfully led teams, provided
              comprehensive staff training, implemented innovative point-of-sale
              systems, and organized memorable events.
            </p>
            <p>
              Beyond my professional endeavors, I have a deep passion for
              photography, which has allowed me to capture unique perspectives
              and moments.
            </p>
            <p>
              During the challenges posed by the pandemic, I seized the
              opportunity to explore my interest in IT, leading me to transition
              into the dynamic field of web development.
            </p>
            <p>
              Today, I am a full-stack web developer, equipped with expertise in
              HTML, CSS, JavaScript, and React.
            </p>
            <p>
              Additionally, I&apos;ve recently expanded my skill set to include
              database management systems such as MongoDB, Express.js, and
              MySQL.
            </p>
            <p>
              Driven by a relentless pursuit of excellence and a commitment to
              continuous learning, I am excited to contribute my diverse skill
              set and creative problem-solving abilities to any project or team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
