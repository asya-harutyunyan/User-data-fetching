"use client";
import { $apiClient } from "@/api/axios";
import { MyContextValue, UserDataType } from "@/types";
import { FC, createContext, useEffect, useState } from "react";

const MyContext = createContext<MyContextValue | any>(null);

export const MyContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<UserDataType[]>([]);

  useEffect(() => {
    $apiClient
      .get("/users")
      .then((response) => response.data)
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <MyContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
