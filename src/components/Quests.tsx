"use client";
import React, { FC } from "react";
import QuestItem from "./QuestItem";
import IQuest from "@/models/IQuest";
import useQuests from "@/hooks/useQuests";
import CenteredSpinner from "./ui/spinner";

interface IQuestsProps {
  limitContent: number;
}

const Quests: FC<IQuestsProps> = ({ limitContent }) => {
  const { quests, loading, error } = useQuests(limitContent);

  if (loading) {
    return <CenteredSpinner />;
  }

  if (error) {
    return <p>Error loading quests! Please try again later.</p>;
  }

  if (quests.length === 0) {
    return <p>No quests available.</p>;
  }

  return (
    <>
      {quests.map((quest: IQuest) => (
        <QuestItem
          key={quest.id}
          questName={quest.name}
          description={quest.description}
          src={quest.image}
          progress={quest.progress}
        />
      ))}
    </>
  );
};

export default Quests;
