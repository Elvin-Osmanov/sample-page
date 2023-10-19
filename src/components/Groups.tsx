"use client";
import React, { FC, useMemo } from "react";
import GroupItem from "./GroupItem";
import IGroup from "@/models/IGroup";
import useGroups from "@/hooks/useGroups";
import CenteredSpinner from "./ui/spinner";

interface IGroupsProps {
  limitContent: number;
}

const Groups: FC<IGroupsProps> = ({ limitContent }) => {
  const { groups, loading, error } = useGroups(limitContent);

  const renderedGroups = useMemo(() => {
    if (loading) {
      return <CenteredSpinner />;
    }

    if (error) {
      return <p>Failed to load groups. Please try again later.</p>;
    }

    if (groups.length === 0) {
      return <p>No groups available.</p>;
    }

    return groups.map((group: IGroup) => (
      <GroupItem
        key={group.id}
        src={group.image}
        groupMembers={group.membersCount}
        groupName={group.name}
        isPublic={group.isPublic}
      />
    ));
  }, [groups, loading, error]);

  return <>{renderedGroups}</>;
};

export default Groups;
