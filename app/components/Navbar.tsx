"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [titleName, setTitleName] = useState("le cruex famille");

  const changeTitle = () => {
    if (titleName === "le cruex famille") {
      setTitleName("hoslow family");
    } else if (titleName === "hoslow family") {
      setTitleName("le cruex famille");
    } else {
      titleName === "le cruex famille";
    }
  };

  return (
    <div style={{ transition: "3s" }}>
      <div className={styles.main}>
        <h1 className={styles.titleFont} onClick={changeTitle}>
          {<FaEye />} {titleName} {<FaEye />}
        </h1>
      </div>
      <div className={styles.secondaryMain}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div
            style={{
              width: "700px",
              borderTop: "5px solid pink",
              borderBottom: "5px solid pink",
              padding: "2rem",
              marginTop: "200px",
            }}
          >
            <h2 className={styles.subTitle}>What is this about? </h2>
            <p className={styles.subTitle} style={{ fontSize: "0.8rem" }}>
              an online open gym where we teach you exercises based off the
              muscle through API, so you can workout at your local gym. Click
              the buttons below to check different types of exercises based on
              particular a muscle. If you don't understand what the title means,
              click on it for translation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
