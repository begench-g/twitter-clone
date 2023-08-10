"use client";
import React from "react";
import { Header } from "./Header";
import { Post } from "./Post";
import { Tweet } from "./Tweet";
import { useQuery, useQueryClient } from "react-query";
import { getTweets } from "@/utils";
import { tweetProps } from "@/types";

export const Main = () => {
  const queryClient = useQueryClient();
  const {
    isLoading,
    error,
    data: tweets,
  } = useQuery("tweets", getTweets,{
    refetchInterval: 2000, // Refetch every 5 seconds (5000 milliseconds)
  });
  return (
    <>
      <Header />
      <Post />
      {tweets?.map((tweet: tweetProps) => (
        <Tweet
          name={tweet.name}
          username={tweet.username}
          date={tweet.date}
          imageUrl={tweet.imageUrl}
          title={tweet.imageUrl}
          avatar={tweet.avatar}
          key={tweet.id}
        />
      ))}
    </>
  );
};
         