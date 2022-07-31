import { useState } from "react";

export type Data = {
  email: string;
  password: string;
  nickname: string;
  createdID: string;
};

const initialData: Data = {
  email: "",
  password: "",
  nickname: "",
  createdID: "",
};

export const useSignUpData = () => {
  const [data, setData] = useState<Data>(initialData);

  const signup = () => {
    console.log("サインアップ");
    console.log(data);
  };

  return { data, setData, signup };
};
