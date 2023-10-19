"use client";
import React from "react";
import PostItem from "./PostItem";
import IPost from "@/models/IPost";
import usePosts from "@/hooks/usePosts"; // Adjust the import path according to your file structure
import CenteredSpinner from "./ui/spinner";
import PostPlaceholder from "./PostPlaceholder";

const Posts = () => {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return <PostPlaceholder />;
  }

  if (error) {
    return <p>Error loading posts! Please try again later.</p>;
  }

  if (posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <>
      {posts.map((post: IPost) => (
        <PostItem
          key={post.id}
          user={post.user}
          activity={post.activity}
          postImage={post.postImage}
          content={post.content}
          comments={post.comments}
          shares={post.shares}
          reactions={post.reactions}
          createdAt={post.createdAt}
        />
      ))}
    </>
  );
};

export default Posts;
