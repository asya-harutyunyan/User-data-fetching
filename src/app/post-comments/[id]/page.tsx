"use client";
import { $apiClient } from "@/api/axios";
import { CommentsDataType } from "@/types";
import { useParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import classes from "./index.module.css";
import Comment from "@/components/Comment";

type PostCommentsProps = {};

const PostComments: FC<PostCommentsProps> = () => {
  const [comments, setComments] = useState<CommentsDataType | any>([]);
  const params = useParams();

  useEffect(() => {
    $apiClient
      .get(`/comments?postId=${params.id}`)
      .then((response) => response.data)
      .then((json) => {
        setComments(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [params]);

  return (
    <div>
      <h1 className={classes.comments_title}>Post comments</h1>
      <ul className={classes.comments_list}>
        {comments.map((item: CommentsDataType) => (
          <Comment key={item.id} comment={item} />
        ))}
      </ul>
    </div>
  );
};

export default PostComments;
