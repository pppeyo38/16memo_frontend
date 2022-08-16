import { useNavigate } from "react-router-dom";
import { client } from "../lib/axios";

export type Data = {
  email: string;
  password: string;
  nickname: string;
};

export const useSignUp = () => {
  const navigate = useNavigate();

  const signup = async (data: Data) => {
    console.log(data);
    await client
      .post("/signup", data)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return { signup };
};
