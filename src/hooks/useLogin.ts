import axios from "axios";
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
    console.log(data);

    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
          import.meta.env.VITE_FIREBASE_API_KEY
        }`,
        { ...data, returnSecureToken: true }
      )
      .then((response) => {
        axios
          .get("http://localhost:3200/login", {
            headers: {
              Authorization: `Bearer ${response.data.idToken}`,
            },
          })
          .then((response) => {
            if (response.data) {
              const isAdmin = true;
              setLoginUser({ ...response.data, isAdmin });
              navigate("/");
            }
          });
      });
  };

  return { login };
};
