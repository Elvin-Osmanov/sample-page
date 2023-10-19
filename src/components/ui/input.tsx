import * as React from "react";
import { BiSearchAlt } from "react-icons/bi";
import styles from "@/styles/ui/input.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <form role="search">
        <div className="d-flex justify-content-center ">
          <input
            className={`${styles.search_bar}`}
            type="search"
            placeholder="Enter your search here..."
            aria-label="Search"
          />
          <span className={styles.search_icon}>
            <BiSearchAlt size={25} />
          </span>
        </div>
      </form>
    );
  }
);
Input.displayName = "Input";

export { Input };
