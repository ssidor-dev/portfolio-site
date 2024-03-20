import styles from "./AboutMe.module.css";
import figmalogo from "../assets/figma.png";

export default function AboutMe() {
  return (
    <div className={styles["aboutme-container"]}>
      <section className={styles["aboutme-content"]}>
        <h3>About Me</h3>
        <p>
          Hello! I’m Stephen, and I’m a frontend web developer. I’m interested
          in building intuitive responsive UIs and building React and user
          friendly web applications. I’m a continuous learner and I regularly
          engage in online courses to keep my skills sharp and up-to-date.
        </p>
      </section>
      <section className={styles["aboutme-skills"]}>
        <h3>Skills</h3>
        <div className={styles["aboutme-skills-icons"]}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>HTML5 Logo Badge</title>
              <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512" />
              <path fill="#EF652A" d="M256,472 L405,431 440,37 256,37" />
              <path
                fill="#EBEBEB"
                d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"
              />
              <path
                fill="#FFF"
                d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"
              />
            </svg>
            <p>HTML5</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
            >
              <path
                fill="#264de4"
                d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"
              />
              <path
                fill="#2965f1"
                d="M405.388 431.408l35.148-393.73H256v435.146z"
              />
              <path
                fill="#ebebeb"
                d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
              />
              <path
                fill="#fff"
                d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
              />
            </svg>
            <p>CSS</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
              <rect width="630" height="630" fill="#f7df1e" />
              <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
            </svg>
            <p>JavaScript</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-11.5 -10.23174 23 20.46348"
            >
              <title>React Logo</title>
              <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
              <g stroke="#61dafb" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
            <p>React</p>
          </div>
          <div>
          <img src={figmalogo} alt="" />
          <p>Figma</p>
          </div>
        </div>
      </section>
      {/* <div className={styles["content-divider"]}></div> 
      <section className={styles["devinfo-content"]}>
        <h3>Skills</h3>
       
            <ul>
                <li>UI Design</li>
                <li>Figma</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            
                <li>Time Management</li>
                <li>Critical Thinking</li>
                <li>Problem Solving</li>
                <li>Communication</li>
            </ul>
       
      </section> */}
    </div>
  );
}
