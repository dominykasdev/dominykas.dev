import { BsGithub, BsLinkedin } from "react-icons/bs";
import { DiCodepen } from "react-icons/di";
import { MdEmail } from "react-icons/md";
import "./Content.scss";

export const home = (
  <div className="centeredContent">
    <h1>Dominykas.dev</h1>
    <p>Full Stack Engineer, lover of history, philosophy and politics.</p>
    <p>Interested in Judo, reading, and gaming.</p>
    <p>Amateur photographer.</p>
  </div>
);

export const services = (
  <div className="centeredContent">
    <h2>Services</h2>
    <h3>Website Development</h3>
    <p>
      Want a website? Whether it's a bespoke one page site, a blog or an online
      shop I can lend you my knowledge and skills to realise your ideas. You
      will be online in no time!
    </p>
    <h3>Website Management</h3>
    <p>
      Already own a website? I can offer to update your website to the latest
      tech and check for bugs. I also offer suggestions to improve your SEO
      (Search Engine Optimisation), layout or anything else that may improve
      user experience.
    </p>
    <h3>Efficient Process</h3>
    <p>
      I aim to respond to requests as soon as possible! If you are looking for a
      quote do not hesitate to{" "}
      <a
        target="_blank"
        href="mailto:contact@dominykas.dev?subject=Dominykas.dev: Services Request"
        rel="noreferrer"
      >
        contact me
      </a>
      . After a short discussion about your requirements and timelines I can
      give you a quote within 48 hours. You will be regularly updated throughout
      development and be involved in the project to give feedback.
    </p>
  </div>
);

export const about = (
  <div className="centeredContent">
    <h2>About Me</h2>
    <p>Hi, my name is Dominykas, I'm an experienced Full Stack Engineer.</p>
    <p>
      I've worked in a number of companies mainly as a Web Developer and
      Software Engineer for Trigonal, Fignum, and Covance.
    </p>
    <p>My tech stack includes but is not limited to: </p>
    <ul>
      <li>Javascript/Typescript</li>
      <li>HTML/CSS/SASS/LESS</li>
      <li>React</li>
      <li>Redux</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>C# .NET</li>
      <li>Azure and DevOps</li>
      <li>Jira/Asana</li>
      <li>SQL/MongoDB</li>
    </ul>
  </div>
);

export const portfolio = (
  <div className="centeredContent">
    <h2>Portfolio</h2>
    <h3>Websites</h3>

    <a target="_blank" rel="noreferrer" href="https://pablodifrancesco.com/">
      Pablo Di Francesco
    </a>
    <a target="_blank" rel="noreferrer" href="https://psychicfuture.com">
      Psychic Future
    </a>
    <a target="_blank" rel="noreferrer" href="https://thepcsurgeon.co.uk">
      The PC Surgeon
    </a>
    <h3>Projects</h3>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/dominykasdev/cryptowebapp"
    >
      Crypto tracking app
    </a>
    <a target="_blank" rel="noreferrer" href="https://codepen.io/domdev/">
      CodePen projects
    </a>
  </div>
);

export const contact = (
  <div className="centeredContent">
    <h2>Contact</h2>
    <div>
      <a
        className="contactIcon"
        target="_blank"
        rel="noreferrer"
        href="mailto:contact@dominykas.dev?subject=Dominykas.dev: Services Request"
        title="Email contact@dominykas.dev"
      >
        <MdEmail size={"8em"} color="" />
      </a>
      <a
        className="contactIcon"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/dominykasdev"
        title="Dominykasdev - GitHub"
      >
        <BsGithub size={"8em"} />
      </a>
    </div>
    <div>
      <a
        className="contactIcon"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/dominykas-genys-bb466795/"
        title="Dominykas Genys - LinkedIn"
      >
        <BsLinkedin size={"8em"} />
      </a>
      <a
        className="contactIcon"
        target="_blank"
        rel="noreferrer"
        href="https://codepen.io/domdev/"
        title="DomDev - CodePen"
      >
        <DiCodepen size={"8em"} />
      </a>
    </div>
  </div>
);
