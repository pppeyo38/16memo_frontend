import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../lib/axios";

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

export const useSignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Data>(initialData);

  const signup = async () => {
    await client
      .post("/signup", data)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return { data, setData, signup };
};
