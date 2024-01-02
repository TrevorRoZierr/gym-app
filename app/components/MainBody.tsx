import ExerciseComponent from "./ExerciseComponent";
import styles from "./MainBody.module.css";
import { FaCircleArrowUp } from "react-icons/fa6";

const MainBody = () => {
  return (
    <div className={styles.main}>
      <div>
        <h1 className={styles.head1} id="exercises">
          EXERCISES
        </h1>
      </div>
      <ExerciseComponent />
      <ArrowUp />
    </div>
  );
};

const ArrowUp = () => {
  return (
    <a href="#exercises" className={styles.arrowUp}>
      <FaCircleArrowUp />
    </a>
  );
};

export default MainBody;
