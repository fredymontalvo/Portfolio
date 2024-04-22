import styles from "./projects.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  return (
    <section
      className={styles.mainContainer} id="Projects"
    >
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div key={id} className={styles.container}>
              <img
                src={getImageUrl(project.imageSrc)}
                alt={project.title}
                className={styles.image}
              />
              <h3 className={styles.titleDesc}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.skills}>
                {project.skills.map((skill, id) => {
                  return (
                    <li key={id} className={styles.skill}>
                      {skill}
                    </li>
                  );
                })}
              </ul>
              <div className={styles.links}>
                <a
                  href={project.demo}
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={project.source}
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
