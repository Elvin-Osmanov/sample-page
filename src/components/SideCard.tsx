"use client";
import React, { FC, PropsWithChildren } from "react";

import styles from "@/styles/components/sidecard.module.css";

interface ISideCardProps {
  title: string;
}

const SideCards: FC<PropsWithChildren<ISideCardProps>> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.sidecard_wrapper}>
      <h6 className="fw-bold pb-4">{title}</h6>
      {children}
    </div>
  );
};

export default SideCards;
