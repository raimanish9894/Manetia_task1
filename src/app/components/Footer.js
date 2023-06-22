import React from "react";
import Styles from "@/app/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={Styles.main_footer}>
      <div className={Styles.footerObjects}>
        <div className={Styles.footerObjects_row1}>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <h3
                style={{ color: "#00329B", textDecoration: "none" }}
                className={Styles.bottomLogo}
              >
                <Link href="/">LOGO</Link>
              </h3>
            </li>
            <li
              style={{ fontSize: "16px", lineHeight: "24px", color: "#515151" }}
            >
              Lorem Ipsum is simply dummy text of the<br></br> printing and
              typesetting industry.{" "}
            </li>
            <li
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#515151",
                paddingTop: "20px",
              }}
            >
              @Lorem
            </li>
          </ul>
        </div>
        <div className={Styles.footerObjects_row2}>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <h3>About us</h3>
            </li>
            <li
              style={{ fontSize: "16px", lineHeight: "24px", color: "#515151" }}
            >
              Lorem
            </li>
            <li
              style={{ fontSize: "16px", lineHeight: "24px", color: "#515151" }}
            >
              Portfolio
            </li>
            <li
              style={{ fontSize: "16px", lineHeight: "24px", color: "#515151" }}
            >
              Careers
            </li>
            <li
              style={{ fontSize: "16px", lineHeight: "24px", color: "#515151" }}
            >
              Contact us
            </li>
          </ul>
        </div>
        <div className={Styles.footerObjects_row3}>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <h3>Contact us</h3>
            </li>
            <li
              style={{ fontSize: "16px", lineHeight: "24px", color: "#515151" }}
            >
              Lorem Ipsum is simply dummy text of the<br></br> printing and
              typesetting industry.{" "}
            </li>
            <li
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#515151",
                paddingTop: "20px",
              }}
            >
              +908 89097 890
            </li>
          </ul>
        </div>
        <div className={Styles.footerObjects_row4}>
          <div className={Styles.iconDiv}>
            <Image
              alt="facebook"
              src="/facebook 1.png"
              width={12}
              height={12}
            />
          </div>
          <div className={Styles.iconDiv}>
            <Image
              alt="instagram"
              src="/instagram 1.png"
              width={12}
              height={12}
            />
          </div>
          <div className={Styles.iconDiv}>
            <Image
              alt="linkedin"
              src="/linkedin 1.png"
              width={12}
              height={12}
            />
          </div>
          <div className={Styles.iconDiv}>
            <Image alt="twitter" src="/twitter 1.png" width={12} height={12} />
          </div>
        </div>
      </div>
      <div className={Styles.footer_line}></div>
      <div className={Styles.bottomFooter}>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "#515151",
            marginTop: "29px",
          }}
        >
          Copyright ® {new Date().getFullYear()} Lorem All rights Rcerved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
