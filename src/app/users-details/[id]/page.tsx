"use client";
import React, { FC, useEffect, useState } from "react";
import { $apiClient } from "@/api/axios";
import { PostDataType, UserDataType } from "@/types";
import { useParams } from "next/navigation";
import Image from "next/image";
import classes from "./index.module.css";
import PostCard from "@/components/PostCard";

type UserDetailsProps = {};

const UserDetails: FC<UserDetailsProps> = () => {
  const [user, setUser] = useState<UserDataType | any>([]);
  const [posts, setPosts] = useState<PostDataType | any>([]);
  const params = useParams();

  useEffect(() => {
    $apiClient
      .get(`/users/${params.id}`)
      .then((response) => response.data)
      .then((json) => {
        setUser(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [params]);

  useEffect(() => {
    $apiClient
      .get(`/posts?userId=${params.id}`)
      .then((response) => response.data)
      .then((json) => {
        setPosts(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [params]);

  return (
    <>
      <div className={classes.img_info}>
        <div className={classes.img}>
          <Image
            src="/user-img.png"
            alt="User image"
            width={300}
            height={300}
          />
        </div>
        <div className={classes.info}>
          <p className={classes.user_name}>{user.name}</p>
          <p className={classes.user_info}>{user.username}</p>
          <p className={classes.user_info}>{user.email}</p>
          <p className={classes.user_info}>{user.phone}</p>
          <p className={classes.user_info}>{user.website}</p>
        </div>
      </div>
      <div className={classes.posts_container}>
        <p className={classes.post_title}>User Posts</p>
        <ul className={classes.posts_list}>
          {posts.map((item: PostDataType) => (
            <PostCard key={item.id} post={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserDetails;
