"use client";
import React, { FC } from "react";
import Hexagon from "../ui/hexagon";

import styles from "@/styles/components/profile.picture.module.css";
import HexagonalProgressBar from "../ui/hexprogress";

interface IProfilePictureProps {
  src: string;
  level: number;
  progress: number;
}

const ProfilePicture: FC<IProfilePictureProps> = ({ src, level, progress }) => {
  return (
    <div className={styles.profile_picture_wrapper}>
      <HexagonalProgressBar percentage={progress} />
      <div className={styles.hexagon_background_wrapper}>
        <Hexagon src={src} />
      </div>
      <div className={styles.hexagon_badge_wrapper}>
        <div className={styles.hexagon_badge}>
          <span className={styles.level}>{level}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
