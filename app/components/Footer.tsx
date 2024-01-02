import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Details = (props: { name: string }) => {
  return (
    <div>
      <p className={styles.paraGraph}>{props.name}</p>
    </div>
  );
};

const Warn = (props: { warn: string }) => {
  return (
    <div>
      <p className={styles.paraGraph}>{props.warn}</p>
    </div>
  );
};

const Socials = (props: { ig: string; gth: string; prtf: string }) => {
  return (
    <div>
      <a
        href="https://www.instagram.com/hoslowtreva/"
        target="_blank"
        className={styles.socialDetails}
      >
        {props.ig}
        <span>
          <FaInstagram />
        </span>
      </a>
      <a
        href="https://github.com/TrevorRoZierr"
        target="_blank"
        className={styles.socialDetails}
      >
        {props.gth}
        <span>
          <FaGithub />
        </span>
      </a>
      <a
        href="https://saad-portfolio-on-next.vercel.app/"
        target="_blank"
        className={styles.socialDetails}
      >
        {props.prtf}
        <span>
          <CgProfile />
        </span>
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.first}>
        <Details name="Made by sayyed saad " />
      </div>
      <div className={styles.first}>
        <Warn warn="2023-2024 copyright reserved" />
      </div>
      <div className={styles.last} id="last">
        <Socials ig="Instagram: " gth="Github:" prtf="Portfolio:" />
      </div>
    </div>
  );
};

export default Footer;
