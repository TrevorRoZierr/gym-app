"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ExerciseComponent.module.css";

const ExerciseComponent = () => {
  const [exerciseData, setExerciseData] = useState<any>(null);
  const [muscle, setMuscle] = useState("biceps");
  const apiKey = "Qpdh/BQ8Lb9xp1t65JH+6g==T4HR2mTvf78hbGD6";

  const changeMuscle = () => {
    if (muscle === "lower_back") {
      return <h1 className={styles.muscleName}>Lower Back</h1>;
    } else if (muscle === "biceps") {
      return <h1 className={styles.muscleName}>Biceps</h1>;
    } else if (muscle === "chest") {
      return <h1 className={styles.muscleName}>Chest</h1>;
    } else if (muscle === "hamstrings") {
      return <h1 className={styles.muscleName}>Hamstrings</h1>;
    } else if (muscle === "triceps") {
      return <h1 className={styles.muscleName}>Triceps</h1>;
    } else if (muscle === "middle_back") {
      return <h1 className={styles.muscleName}>Middle Back</h1>;
    } else if (muscle === "lats") {
      return <h1 className={styles.muscleName}>Laterals</h1>;
    } else if (muscle === "shoulders") {
      return <h1 className={styles.muscleName}>Shoulders</h1>;
    } else if (muscle === "glutes") {
      return <h1 className={styles.muscleName}>Glutes</h1>;
    } else {
      return <h1 className={styles.muscleName}>{muscle}</h1>;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
          {
            headers: {
              "X-Api-Key": apiKey,
            },
          }
        );
        setExerciseData(response.data);
      } catch (error) {
        console.error("Request failed:", error);
      }
    };

    fetchData();
  }, [muscle, apiKey]);

  return (
    <div className={styles.main}>
      <div className={styles.buttonOuter}>
        <div className={styles.buttonInner}>
          <button onClick={() => setMuscle("biceps")}>Biceps</button>
          <button onClick={() => setMuscle("chest")}>Chest</button>
          <button onClick={() => setMuscle("triceps")}>Triceps</button>
        </div>
        <div className={styles.buttonInner}>
          <button onClick={() => setMuscle("shoulders")}>Shoulders</button>
          <button onClick={() => setMuscle("lats")}>Laterals</button>
          <button onClick={() => setMuscle("middle_back")}>Back</button>
        </div>
        <div className={styles.buttonInner}>
          <button onClick={() => setMuscle("lower_back")}>Lower Back</button>
          <button onClick={() => setMuscle("hamstrings")}>Hamstrings</button>
          <button onClick={() => setMuscle("glutes")}>Glutes</button>
        </div>
      </div>
      {exerciseData ? (
        <div className={styles.muscleMain}>
          {changeMuscle()}
          {exerciseData.map(
            (
              exercise: {
                name: string;
                equipment: string;
                instructions: string;
              },
              index: number
            ) => (
              <div className={styles.muscleData} key={index}>
                <h2>
                  Name: <span>{exercise.name}</span>
                </h2>
                <h3>
                  Equipment: <span>{exercise.equipment}</span>
                </h3>
                <h4>
                  Instruction: <span>{exercise.instructions}</span>
                </h4>
              </div>
            )
          )}
        </div>
      ) : (
        <div className={styles.loading}>
          <h3>Loading Hold on...</h3>
        </div>
      )}
    </div>
  );
};

export default ExerciseComponent;
