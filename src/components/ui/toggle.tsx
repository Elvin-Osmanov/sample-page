"use client";
import { FC, useContext } from "react";
import { FaChevronDown } from "react-icons/fa";

import styles from "@/styles/ui/toggle.module.css";
import Link from "next/link";
import { WindowWidthContext } from "@/context/windowWidthContext";

interface IToggleProps {
  toggleName: string;
  options: string[];
}

const Toggle: FC<IToggleProps> = ({ toggleName, options }) => {
  const windowWidth = useContext(WindowWidthContext)!;
  return (
    <div className={`${styles.toggle_wrapper}`}>
      <p className={`${styles.toggle_name_text}`}>{toggleName}</p>
      <span className={`${styles.toggle_icon}`}>
        <FaChevronDown size={windowWidth < 992 ? 8 : 10} />
      </span>
      <ul className={`list-unstyled bg-white ${styles.dropdown}`}>
        {options.map((option: string, index: number) => (
          <li className="py-2" key={index}>
            <Link href="" className="text-decoration-none text-dark fw-bold ">
              {option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toggle;
