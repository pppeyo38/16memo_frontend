import { Dispatch, SetStateAction } from "react";
import { client } from "../lib/axios";
import { useLogin } from "./useLogin";

export type Data = {
  email: string;
  password: string;
  nickname: string;
};

export const useSignUp = () => {
  const { login } = useLogin();

  const signup = async (
    data: Data,
    setError: Dispatch<SetStateAction<string>>
  ) => {
    await client
      .post("/signup", data)
      .then(async (response) => {
        response && (await login(data, setError));
      })
      .catch((error) => {
        setError("ユーザー作成に失敗しました…");
      });
  };

  return { signup };
};
