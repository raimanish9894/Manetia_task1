import React from "react";
import styles from "@/app/page.module.css";
import Image from "next/image";

const WebApplication = ({
  imageSrc,
  imageAlt,
  heading,
  description,
  backgroundColor,
}) => {
  const containerStyle = {
    background: backgroundColor,
  };
  return (
    <div className={styles.webApplication}>
      <div className={styles.webApplicationDiv} style={containerStyle}>
        <Image alt={imageAlt} src={imageSrc} width={38.44} height={37.97} />
      </div>
      <div className={styles.webApplicationDivText}>
        <h3>{heading}</h3>
        <p
          style={{ color: "#969696" }}
          className={styles.webApplicationDivTextP}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default WebApplication;
