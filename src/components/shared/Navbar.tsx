"use client";
import React, { useContext } from "react";
import Search from "./Search";
import Links from "./Links";
import Login from "../Login";
import Logo from "../Logo";
import { WindowWidthContext } from "@/context/windowWidthContext";

const Navbar = () => {
  const windowWidth = useContext(WindowWidthContext)!;
  return (
    <nav className="container-fluid text-center p-3">
      {windowWidth < 768 ? (
        <div className="row align-items-center ">
          <Logo />
          <Login />
        </div>
      ) : (
        <div className="row align-items-center ">
          <Logo />
          <Links />
          <Search />
          <Login />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
