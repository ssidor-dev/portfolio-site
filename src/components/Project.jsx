/* eslint-disable react/prop-types */
import styles from "./Project.module.css";
export default function Project({ title, img, github, link, builtWith }) {
  return (
    <div className={styles["project-container"]}>
      <a href={link} target="_blank">
       
        <img src={img} alt="" className={styles["project-thumb-img"]} />
      </a>
      <h4>{title}</h4>
      <div className={styles["project-sub-container"]}>
        <p>{builtWith}</p>

        <a
          className={styles["github-link"]}
          href={`https://github.com/ssidor-dev/${github}`}
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
