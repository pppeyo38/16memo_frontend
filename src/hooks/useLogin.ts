import { useState, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

type Data = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const navigate = useNavigate();

  const login = (data: Data, setError: Dispatch<SetStateAction<string>>) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          setError("メールアドレスが無効です");
        } else if (error.code === "auth/user-disabled") {
          setError("ユーザーが無効です");
        } else if (error.code === "auth/user-not-found") {
          setError("ユーザーが存在しません");
        } else if (error.code === "auth/wrong-password") {
          setError("パスワードが違います");
        } else if (error.code === "auth/too-many-requests") {
          setError("");
        } else {
          setError("");
        }
      });
  };

  return { login };
};
