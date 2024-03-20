import dadjokeimg from "../assets/dadjoke.jpg";
import photosite from "../assets/photosite.jpg";
import newssite from "../assets/fem.jpg";
import portfoliosite from "../assets/portfolio-site.jpg";

const projectData = [
  {
    key: Math.random(),
    title: "Dad Joke App",
    img: dadjokeimg,
    gitHub: "/dad-joke-generator",
    link: "https://dadjokegen.cloud/",
    builtWith: "HTML CSS JavaScript",
  },
  {
    key: Math.random(),
    title: "Photography Site",
    img: photosite,
    gitHub: "/photo-site",
    link: "https://sidorphotography.com/",
    builtWith: "HTML CSS Bootstrap",
  },
  {
    key: Math.random(),
    title: "Portfolio Site",
    img: portfoliosite,
    gitHub: "portfolio-site",
    link: "https://stephensidor.dev/",
    builtWith: "React Vite",
  },
  {
    key: Math.random(),
    title: "Front End Mentor - News Site",
    img: newssite,
    gitHub: "dad-joke-generator",
    link: "https://sidorphotography.com/",
    builtWith: "React Vite",
  },
];
export default projectData;