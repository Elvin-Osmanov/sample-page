import React, { useState, forwardRef, useImperativeHandle } from "react";
import { FaChevronDown } from "react-icons/fa";

import styles from "@/styles/ui/dropdown.module.css";

interface IDropdownProps {
  label: string;
  options: string[];
  onSelectedChange: (selected: string) => void;
}

export interface IDropdownHandle {
  setSelected: (selected: string) => void;
}

const Dropdown = forwardRef<IDropdownHandle, IDropdownProps>(
  ({ label, options, onSelectedChange }, ref) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    useImperativeHandle(
      ref,
      () => ({
        setSelected: (selected: string) => {
          setSelected(selected);
        },
      }),
      []
    );

    const renderedOptions = options.map((option) => (
      <div
        key={option}
        className={styles.option}
        onClick={() => {
          onSelectedChange(option);
          setSelected(option);
          setOpen(false);
        }}
      >
        {option}
      </div>
    ));

    return (
      <div className={styles.dropdown}>
        <div className={styles.labelContainer}>
          <label className={styles.label_text}>{label}</label>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`${styles.dropdown_menu} ${open ? styles.visible : ""}`}
        >
          {selected ?? "Everything"}
          <span className={styles.toggle_icon}>
            <FaChevronDown size={10} />
          </span>
          <div
            className={`${styles.dropdown_options} ${
              open ? styles.visible : ""
            }`}
          >
            {renderedOptions}
          </div>
        </div>
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";

export { Dropdown };
