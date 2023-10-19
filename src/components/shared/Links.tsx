"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Toggle from "../ui/toggle";
import { BsGrid } from "react-icons/bs";
import { WindowWidthContext } from "@/context/windowWidthContext";

import styles from "@/styles/components/links.module.css";

const Links = () => {
  const windowWidth = useContext(WindowWidthContext)!;
  return (
    <div className="col-md-3">
      <ul className="list-unstyled d-flex justify-content-around align-items-center  m-0">
        <li>
          <Link
            href="/"
            className="text-decoration-none d-flex align-items-center w-100 position-relative"
          >
            <span>
              <BsGrid
                size={windowWidth < 992 ? 15 : 25}
                color={"rgb(136, 140, 244)"}
              />
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-decoration-none d-flex align-items-center w-100 position-relative"
          >
            <p className={styles.home_link}>Home</p>
          </Link>
        </li>
        <li>
          <Toggle
            toggleName="Features"
            options={["Badges", "Videos", "Photos"]}
          />
        </li>
        <li>
          <Toggle toggleName="More" options={["Groups", "Chat"]} />
        </li>
      </ul>
    </div>
  );
};

export default Links;
