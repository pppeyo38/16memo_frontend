import { useState } from "react";
import axios from "axios";
import { API_URL } from "../api/endpoint";

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
    axios.post("http://localhost:3200/signup", data).then((response) => {
      console.log("response body:", response.data);
    });
  };

  return { data, setData, signup };
};
