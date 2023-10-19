"use client";
import React, { FC } from "react";
import UserItem from "./UserItem";
import IUser from "@/models/IUser";
import useUsers from "@/hooks/useUsers"; // Adjust the import path according to your file structure
import CenteredSpinner from "./ui/spinner";

interface IUsersProps {
  limitContent: number;
}

const Users: FC<IUsersProps> = ({ limitContent }) => {
  const { users, loading, error } = useUsers(limitContent);

  if (loading) {
    return <CenteredSpinner />;
  }

  if (error) {
    return <p>Error loading users! Please try again later.</p>;
  }

  if (users.length === 0) {
    return <p>No users available.</p>;
  }

  return (
    <>
      {users.map((user: IUser) => (
        <UserItem
          key={user.id}
          level={user.level}
          progress={user.progress}
          src={user.profilePicture}
          fullName={user.fullName}
          userName={user.userName}
          isVerified={user.isVerified}
        />
      ))}
    </>
  );
};

export default Users;
