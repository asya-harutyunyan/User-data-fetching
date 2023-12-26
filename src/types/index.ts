export type UserDataType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
};

export type MyContextValue = {
  data: UserDataType[];
};

export type PostDataType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type CommentsDataType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
