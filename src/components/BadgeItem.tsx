import React, { FC } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Hexagon from "./ui/hexagon";

import styles from "@/styles/components/badge.module.css";

interface IBadgeItemsProps {
  badgeName: string;
  description: string;
  src: string;
  progress: number;
}

const BadgeItems: FC<IBadgeItemsProps> = ({
  badgeName,
  description,
  src,
  progress,
}) => {
  return (
    <div className={styles.badge_wrapper}>
      <div className={styles.image_wrapper}>
        <Hexagon src={src} />

        <div className={styles.badge_info}>
          <p className={styles.badge_info_name}>{badgeName}</p>
          <span className={styles.badge_info_desc}>{description}</span>
        </div>
      </div>
      <ProgressBar variant="info" style={{ height: ".3rem" }} now={progress} />
    </div>
  );
};

export default BadgeItems;
