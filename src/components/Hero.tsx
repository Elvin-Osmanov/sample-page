"use client";
import React, { FC, useContext } from "react";
import Image from "next/image";

import styles from "@/styles/components/hero.module.css";
import { WindowWidthContext } from "@/context/windowWidthContext";

interface IHeroProps {
  title: string;
  paragraph?: string;
}

const Hero: FC<IHeroProps> = ({ title, paragraph }) => {
  const windowWidth = useContext(WindowWidthContext)!;
  return (
    <div className="position-relative">
      <Image
        src="/assets/heartimage.png"
        className={styles.heart_image}
        alt="hero"
        width={75}
        height={75}
      />
      <div className={styles.hero}>
        <div className="row">
          <div className="col-md-2">
            <div className={styles.image_wrapper}>
              <Image
                src="/assets/hero.png"
                className={styles.hero_image}
                alt="hero"
                width={290}
                height={290}
              />
            </div>
          </div>
          <div className="col-md-10">
            <div className={styles.hero_text}>
              {windowWidth < 768 ? (
                <h4 className="fw-bold text-white position-relative ">
                  {title}
                </h4>
              ) : (
                <h1 className="fw-bold text-white position-relative ">
                  {title}
                </h1>
              )}

              {paragraph && windowWidth > 768 ? (
                <p className="fs-6 fw-light position-relative text-white m-0 ">
                  {paragraph}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
