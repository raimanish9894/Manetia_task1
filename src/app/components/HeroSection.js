import React from "react";
import styles from "@/app/page.module.css";
import Image from "next/image";

const HeroSection = ({ imageColor }) => {
  const imageStyle = {
    background: imageColor,
  };

  return (
    <div className={styles.div}>
      <div className={styles.section3Herosectiondiv_top}>
        <div
          className={styles.section3Herosectiondiv_topImage}
          style={imageStyle}
        >
          <Image alt="happy" src="/happy 1.png" width={26} height={26} />
        </div>
        <div className={styles.section3Herosectiondiv_topText}>
          <h3>Lorem Ipsum is simply dummy text</h3>
          <p>Lorem Ipsum is simply dummy text</p>
        </div>
      </div>
      <div className={styles.section3Herosectiondiv_main}>
        <h2 className={styles.section3Herosectiondiv_mainH}>
          {" "}
          <span className={styles.highlightedText}>Lorem Ipsum </span>is simply
          dummy text of the printing.
        </h2>
        <p className={styles.section3Herosectiondiv_mainP}>
          EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.{" "}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
