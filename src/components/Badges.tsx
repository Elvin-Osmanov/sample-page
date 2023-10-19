"use client";
import React, { FC } from "react";
import BadgeItem from "./BadgeItem";
import IBadge from "@/models/IBadge";
import useBadges from "@/hooks/useBadges";
import CenteredSpinner from "./ui/spinner";

interface IBadgesProps {
  limitContent: number;
}

const Badges: FC<IBadgesProps> = ({ limitContent }) => {
  const { badges, loading, error } = useBadges(limitContent);

  if (loading) {
    return <CenteredSpinner />;
  }

  if (error) {
    return <p>Error loading badges! Please try again later.</p>;
  }

  if (badges.length === 0) {
    return <p>No badges available.</p>;
  }

  return (
    <>
      {badges.map((badge: IBadge, index: number) => (
        <BadgeItem
          key={index}
          src={badge.image}
          badgeName={badge.name}
          description={badge.description}
          progress={badge.progress}
        />
      ))}
    </>
  );
};

export default Badges;
