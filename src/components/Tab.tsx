"use client";
import React, { useEffect, useRef } from "react";
import { Dropdown, IDropdownHandle } from "./ui/dropdown";

import styles from "@/styles/components/tab.module.css";

const Tabs = () => {
  const dropdownRef = useRef<IDropdownHandle>(null);

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.setSelected("Everything");
    }
  }, []);

  return (
    <div className={styles.tab_wrapper}>
      <div className="tabs">
        <div className={styles.tab_text_wrapper}>
          <p className="fw-bold m-0">All Updates</p>
        </div>
      </div>
      <div className={styles.dropdown_wrapper}>
        <Dropdown
          ref={dropdownRef}
          label="Show"
          onSelectedChange={(selected) => console.log(selected)}
          options={["Everything", "Latest", "Shorts"]}
        />
      </div>
    </div>
  );
};

export default Tabs;
