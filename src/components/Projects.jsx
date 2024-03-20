import styles from "./Projects.module.css";
import Project from "./Project";
import projectData from "./projectData";

export default function Projects() {
  return (
    <div className={styles["projects-container"]}>
      <h3>Projects</h3>
      <div className={styles["projects"]}>
        {projectData.map((project) => {
          return (
            <Project
              key={project.key}
              title={project.title}
              img={project.img}
              github={project.gitHub}
              link={project.link}
              builtWith={project.builtWith}
            />
          );
        })}
      </div>
    </div>
  );
}
