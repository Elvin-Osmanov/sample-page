import React, { FC } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import styles from "@/styles/components/quest.module.css";
import Image from "next/image";

interface IQuestItemsProps {
  questName: string;
  description: string;
  src: string;
  progress: number;
}

const QuestItems: FC<IQuestItemsProps> = ({
  questName,
  description,
  src,
  progress,
}) => {
  return (
    <div className={styles.quest_wrapper}>
      <div className={styles.image_wrapper}>
        <Image width={40} height={40} src={src} alt="quest" />
        <div className={styles.quest_info}>
          <p className={styles.quest_info_name}>{questName}</p>
          <span className={styles.quest_info_desc}>{description}</span>
        </div>
      </div>
      <ProgressBar variant="info" style={{ height: ".3rem" }} now={progress} />
    </div>
  );
};

export default QuestItems;
