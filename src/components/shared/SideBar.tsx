"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CiMedal } from "react-icons/ci";
import { AiOutlineStar } from "react-icons/ai";
import { CgChevronDoubleDown } from "react-icons/cg";
import { SlDiamond } from "react-icons/sl";
import { CgCalendarTwo } from "react-icons/cg";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { TbCards } from "react-icons/tb";
import { BsBasket3 } from "react-icons/bs";
import { WindowWidthContext } from "@/context/windowWidthContext";

import styles from "@/styles/components/sidebar.module.css";

interface ISideBarLink {
  id: number;
  name: string;
  route: string;
  icon: any;
}

const SideBar = () => {
  const windowWidth = useContext(WindowWidthContext)!;
  const pathname = usePathname();
  const sidebarContent: ISideBarLink[] = [
    {
      id: 1,
      name: "newsfeed",
      route: "/",
      icon: <HiOutlineComputerDesktop size={30} />,
    },
    {
      id: 2,
      name: "profile",
      route: "/profile",
      icon: <AiOutlineUser size={30} />,
    },
    {
      id: 3,
      name: "groups",
      route: "/groups",
      icon: <HiOutlineUserGroup size={30} />,
    },
    {
      id: 4,
      name: "achievements",
      route: "/achievements",
      icon: <CiMedal size={30} />,
    },
    {
      id: 5,
      name: "favorites",
      route: "/favorites",
      icon: <AiOutlineStar size={30} />,
    },
    {
      id: 6,
      name: "chevrons",
      route: "/chevrons",
      icon: <CgChevronDoubleDown size={30} />,
    },
    {
      id: 7,
      name: "gifts",
      route: "/gifts",
      icon: <SlDiamond size={30} />,
    },
    {
      id: 8,
      name: "calendar",
      route: "/calendar",
      icon: <CgCalendarTwo size={30} />,
    },
    {
      id: 9,
      name: "chat",
      route: "/chat",
      icon: <IoChatboxEllipsesOutline size={30} />,
    },
    {
      id: 10,
      name: "cart",
      route: "/cart",
      icon: <BsBasket3 size={30} />,
    },
    {
      id: 11,
      name: "cards",
      route: "/cards",
      icon: <TbCards size={30} />,
    },
  ];
  return (
    <ul className={styles.sidebar_list}>
      {windowWidth < 768
        ? sidebarContent.slice(0, 4).map((link: ISideBarLink) => (
            <li key={link.id} className="py-2 px-xl-4 px-lg-2 px-md-2 ">
              <Link
                href={link.route}
                className={`${styles.sidebar_link} ${
                  pathname === link.route ? styles.sidebar_link_active : ""
                }`}
              >
                <span
                  className={`${styles.sidebar_icon} ${
                    pathname === link.route ? styles.sidebar_icon_active : ""
                  }`}
                >
                  {link.icon}
                </span>
              </Link>
            </li>
          ))
        : sidebarContent.map((link: ISideBarLink) => (
            <li key={link.id} className="py-2 px-xl-4 px-lg-2 px-md-2 ">
              <Link
                href={link.route}
                className={`${styles.sidebar_link} ${
                  pathname === link.route ? styles.sidebar_link_active : ""
                }`}
              >
                <p className={styles.sidebar_link_name}>{link.name}</p>
                <span
                  className={`${styles.sidebar_icon} ${
                    pathname === link.route ? styles.sidebar_icon_active : ""
                  }`}
                >
                  {link.icon}
                </span>
              </Link>
            </li>
          ))}
    </ul>
  );
};

export default SideBar;
