"use client";
import Post from "@/components/Posts";
import Hero from "@/components/Hero";
import SideCard from "@/components/SideCard";
import Tabs from "@/components/Tab";
import Groups from "@/components/Groups";
import Badges from "@/components/Badges";
import Quests from "@/components/Quests";
import Users from "@/components/Users";
import { useContext, useEffect } from "react";
import { WindowWidthContext } from "@/context/windowWidthContext";

export default function Home() {
  const windowWidth = useContext(WindowWidthContext)!;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 pt-5">
          <Hero
            title="Newsfeed"
            paragraph="Check what your friends have been up to!"
          />
        </div>
      </div>
      {windowWidth < 992 && windowWidth > 768 ? (
        <div className="row">
          <div className="col-md-4  pt-4">
            <SideCard title="Newest Members">
              <Users limitContent={5} />
            </SideCard>
            <SideCard title="Quests">
              <Quests limitContent={5} />
            </SideCard>
            <SideCard title="Popular Groups">
              <Groups limitContent={5} />
            </SideCard>
            <SideCard title="Badges">
              <Badges limitContent={6} />
            </SideCard>
          </div>
          <div className="col-md-8 pt-4">
            <Tabs />
            <Post />
          </div>
        </div>
      ) : windowWidth < 768 ? (
        <div className="row">
          <div className="col-lg-6  pt-4">
            <Tabs />
            <Post />
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-3  pt-4">
            <SideCard title="Newest Members">
              <Users limitContent={5} />
            </SideCard>
            <SideCard title="Quests">
              <Quests limitContent={5} />
            </SideCard>
          </div>
          <div className="col-lg-6  pt-4">
            <Tabs />
            <Post />
          </div>
          <div className="col-lg-3  pt-4">
            <SideCard title="Popular Groups">
              <Groups limitContent={5} />
            </SideCard>
            <SideCard title="Badges">
              <Badges limitContent={6} />
            </SideCard>
          </div>
        </div>
      )}
    </div>
  );
}
