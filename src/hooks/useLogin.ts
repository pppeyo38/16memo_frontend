import { auth } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type Data = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const navigate = useNavigate();

  const login = (data: Data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        console.log("--- ログイン成功 ---");
        navigate("/");
      })
      .catch((error) => {
        console.log("--- ログイン失敗 ---");
        console.log(error);
      });
  };

  return { login };
};
