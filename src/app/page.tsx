"use client";
import UserCard from "@/components/UserCard";
import { UserDataType } from "@/types";
import React, { FC, useContext } from "react";
import classes from "./page.module.css";
import MyContext from "@/context";

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  const { data } = useContext(MyContext);

  return (
    <>
      <h2 className={classes.title}>List of users</h2>
      <ul className={classes.user_list}>
        {data.map((user: UserDataType) => (
          <UserCard key={user.id} item={user} id={user.id} />
        ))}
      </ul>
    </>
  );
};

export default Home;
