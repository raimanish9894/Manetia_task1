import React from "react";
import styles from "@/app/page.module.css";
import Button from "./Button";

const CustomCard = ({
  backgroundColor,
  textColorT,
  textColorP,
  color,
  text,
  borderRadius,
  border,
  buttonColor,
  fontSize,
  height,
  width,
}) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
  };

  const titleStyle = {
    color: textColorT,
  };

  const contentStyle = {
    color: textColorP,
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <h3 className={styles.cardTitle} style={titleStyle}>
        Lorem Ipsum is simply dummy text.
      </h3>
      <p className={styles.cardContent} style={contentStyle}>
        EXAMPLE COMPANY PVT LTD is a team of experienced mobile and web
        applications and website builders measuring dozens of completed
        projects. We build and develop mobile applications for several top
        platforms, including Android & IOS.{" "}
      </p>
      <Button
        color={color}
        text={text}
        size={fontSize}
        border={border}
        background={buttonColor}
        borderRadius={borderRadius}
        width={width}
        height={height}
      />
    </div>
  );
};

export default CustomCard;
