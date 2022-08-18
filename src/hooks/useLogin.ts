import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

type Data = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const login = (data: Data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.code);
        return error;
      });
  };

  return { login };
};
