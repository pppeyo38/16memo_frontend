import { client } from "../lib/axios";
import { useLogin } from "./useLogin";

export type Data = {
  email: string;
  password: string;
  nickname: string;
};

export const useSignUp = () => {
  const { login } = useLogin();

  const signup = async (data: Data) => {
    await client
      .post("/signup", data)
      .then(async (response) => {
        response && (await login(data));
      })
      .catch((error) => console.log(error));
  };

  return { signup };
};
