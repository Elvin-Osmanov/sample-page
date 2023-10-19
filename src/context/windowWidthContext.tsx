"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface WindowWidthContextProps {
  children: ReactNode;
}

// Creating a context with 'number' type
export const WindowWidthContext = createContext<number | undefined>(undefined);

export const WindowWidthProvider: React.FC<WindowWidthContextProps> = ({
  children,
}) => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Checking if we're on the client side
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth); // Setting initial width

      const handleResize = () => {
        setWindowWidth(window.innerWidth); // Updating width when the window is resized
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <WindowWidthContext.Provider value={windowWidth}>
      {children}
    </WindowWidthContext.Provider>
  );
};
