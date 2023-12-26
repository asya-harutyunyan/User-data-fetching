import { CommentsDataType } from "@/types";
import React, { FC } from "react";
import classes from "./index.module.css";

type CommentProps = {
  comment: CommentsDataType;
};

const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <div>
      <li className={classes.comment_container}>
        <p className={classes.comment_name}>{comment.name}</p>
        <p className={classes.comment_email}>{comment.email}</p>
        <p className={classes.comment_info}>{comment.body}</p>
      </li>
    </div>
  );
};

export default Comment;
