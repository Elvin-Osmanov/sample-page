import React from "react";
import styles from "@/styles/ui/hexprogress.module.css";

const SVG_PATH = "M50 0 L95 25 L95 75 L50 100 L5 75 L5 25 L50 0";
const SVG_VIEWBOX = "0 -1 200 200";
const FULL_HEXAGON_LENGTH = 288;

function HexagonalProgressBar({ percentage = 0 }) {
  const strokeLength = (percentage / 112) * FULL_HEXAGON_LENGTH;

  return (
    <div className="position-absolute">
      <svg className={styles.progress_svg} viewBox={SVG_VIEWBOX}>
        {/* Define Gradient */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(55, 77, 239)" />
            <stop offset="100%" stopColor="rgb(67, 217, 233)" />
          </linearGradient>
        </defs>

        {/* Background Hexagon */}
        <path d={SVG_PATH} fill="none" stroke="grey" strokeWidth="4" />

        {/* Progress Hexagon */}
        <path
          d={SVG_PATH}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeDasharray={FULL_HEXAGON_LENGTH}
          strokeDashoffset={FULL_HEXAGON_LENGTH - strokeLength}
        />
      </svg>
    </div>
  );
}

export default HexagonalProgressBar;
