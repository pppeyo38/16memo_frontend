import { auth } from "../FirebaseConfig";
import { client } from "../lib/axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "./useLoginUser";

type Data = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const navigate = useNavigate();
  const { setLoginUser } = useLoginUser();

  const login = (data: Data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        console.log("--- ログイン ---");
        client
          .get("login")
          .then((response) => {
            const isAdmin = true;
            setLoginUser({ ...response.data, isAdmin });
            navigate("/");
          })
          .catch(() => console.log("ユーザー情報取得失敗..."));
      })
      .catch((error) => {
        console.log("--- ログイン失敗 ---");
        console.log(error);
      });
  };

  return { login };
};
