import React, { FC } from "react";

import styles from "@/styles/ui/hexagon.module.css";

interface IHexagonProps {
  src: string;
}

const Hexagon: FC<IHexagonProps> = ({ src }) => {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className={styles.hexagon_background}
    ></div>
  );
};

export default Hexagon;
