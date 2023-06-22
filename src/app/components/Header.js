"use client";

import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
          <h1 className={styles.logo}>
            <Link href="/">LOGO</Link>
          </h1>
        </div>
        <Nav />
      </header>
    </>
  );
};

export default Header;
