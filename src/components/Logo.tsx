"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "@/styles/components/logo.module.css";
import { WindowWidthContext } from "@/context/windowWidthContext";

const Logo = () => {
  const windowWidth = useContext(WindowWidthContext)!;
  return (
    <div className="col-md-2 col-4">
      <Link
        href="/"
        className="text-decoration-none d-flex justify-content-around align-items-center "
      >
        <Image
          src="/assets/xlogo.png"
          alt="logo"
          width={windowWidth < 992 ? 40 : 50}
          height={windowWidth < 992 ? 40 : 50}
        />
        <p className={styles.logotext}>Sample Page</p>
      </Link>
    </div>
  );
};

export default Logo;
