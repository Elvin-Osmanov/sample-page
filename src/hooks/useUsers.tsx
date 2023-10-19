"use client";
import { useState, useEffect } from "react";
import { getUsers } from "@/app/api/users/data";
import IUser from "@/models/IUser";

const useUsers = (limitContent: number) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const allUsers = await getUsers();
        const sortedUsers = allUsers.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        const limitedUsers = sortedUsers.slice(0, limitContent);
        setUsers(limitedUsers);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [limitContent]);

  return { users, loading, error };
};

export default useUsers;
