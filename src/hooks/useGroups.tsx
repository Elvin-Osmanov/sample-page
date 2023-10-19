"use client";
import { getGroups } from "@/app/api/groups/data";
import IGroup from "@/models/IGroup";
import { useState, useEffect } from "react";

const useGroups = (limitContent: number) => {
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const allGroups = await getGroups();
        const filteredGroups = allGroups
          .filter((group) => group.membersCount >= 10)
          .slice(0, limitContent);
        setGroups(filteredGroups);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, [limitContent]);

  return { groups, loading, error };
};

export default useGroups;
