import Image from "next/image";
import React, { FC } from "react";
import classes from "./index.module.css";
import { UserDataType } from "@/types";
import Link from "next/link";

type UserCardProps = {
  item: UserDataType;
  id: number;
};

const UserCard: FC<UserCardProps> = ({ item, id }) => {
  return (
    <Link href={`/users-details/${id}`} className={classes.link}>
      <li key={item.id} className={classes.list_item}>
        <p className={classes.user_info}>{item.name}</p>
        <Image src="/user-img.png" alt="User image" width={100} height={100} />
        <p className={classes.user_info}>{item.email}</p>
        <p className={classes.user_info}>{item.phone}</p>
      </li>
    </Link>
  );
};

export default UserCard;
