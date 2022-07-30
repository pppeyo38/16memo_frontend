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

  return { data, setData };
};
