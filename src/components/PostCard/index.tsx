import React, { FC } from "react";
import classes from "./index.module.css";
import Link from "next/link";
import { PostDataType } from "@/types";

type PostCardProps = {
  post: PostDataType;
};

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <>
      <li className={classes.post}>
        <div>
          <p className={classes.post_title}>{post.title}</p>
          <p className={classes.post_info}>{post.body}</p>
        </div>
        <div>
          <Link href={`/post-comments/${post.id}`} className={classes.link}>
            <button className={classes.button}>See Comments</button>
          </Link>
        </div>
      </li>
    </>
  );
};

export default PostCard;
