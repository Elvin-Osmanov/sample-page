"use client";
import { useState, useEffect } from "react";
import { getBadges } from "@/app/api/badges/data";
import IBadge from "@/models/IBadge";

const useBadges = (limitContent: number) => {
  const [badges, setBadges] = useState<IBadge[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const allBadges = await getBadges();
        const limitedBadges = allBadges.slice(0, limitContent);
        setBadges(limitedBadges);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBadges();
  }, [limitContent]);

  return { badges, loading, error };
};

export default useBadges;
