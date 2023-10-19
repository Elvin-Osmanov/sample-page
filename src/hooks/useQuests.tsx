"use client";
import { useState, useEffect } from "react";
import { getQuests } from "@/app/api/quests/data";
import IQuest from "@/models/IQuest";

const useQuests = (limitContent: number) => {
  const [quests, setQuests] = useState<IQuest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        const allQuests = await getQuests();
        const limitedQuests = allQuests.slice(0, limitContent);
        setQuests(limitedQuests);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuests();
  }, [limitContent]);

  return { quests, loading, error };
};

export default useQuests;
