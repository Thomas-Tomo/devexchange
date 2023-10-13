import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height = 50, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      <span>
      {text}
      </span>
    </span>
  );
};

export default Avatar;
