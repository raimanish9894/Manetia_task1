import React, { useEffect, useState } from "react";
import styles from "@/app/styles/navbar.module.css";
import Button from "./Button";
import Link from "next/link";

const Nav = () => {
  const [currentPath, setCurrentPath] = React.useState("");

  React.useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div className={styles.navbar}>
      <div>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <div className={styles.navbardiv}>
              <Link
                href="/"
                onClick={() => setCurrentPath("/")}
                className={currentPath === "/" ? styles.activeLink : ""}
              >
                Home
              </Link>
            </div>
          </li>
          <li className={styles.navbarItem}>
            <div className={styles.navbardiv}>
              <Link
                href="/about"
                onClick={() => setCurrentPath("/about")}
                className={currentPath === "/about" ? styles.activeLink : ""}
              >
                About Us
              </Link>
            </div>
          </li>
          <li className={styles.navbarItem}>
            <div className={styles.navbardiv}>
              <Link
                href="/services"
                onClick={() => setCurrentPath("/services")}
                className={currentPath === "/services" ? styles.activeLink : ""}
              >
                Services
              </Link>
            </div>
          </li>
          <li className={styles.navbarItem}>
            <div className={styles.navbardiv}>
              <Link
                href="/blog"
                onClick={() => setCurrentPath("/blog")}
                className={currentPath === "/blog" ? styles.activeLink : ""}
              >
                Blog
              </Link>
            </div>
          </li>
          <li className={styles.navbarItem}>
            <Button
              color="#FFFFFF"
              text="Contact Us"
              size="13px"
              border="0px"
              background="#1090CB"
              borderRadius="6px"
              width="125px"
              height="41px"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
