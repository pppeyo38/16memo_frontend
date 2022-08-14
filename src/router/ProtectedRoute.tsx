import { FC, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { auth } from "../FirebaseConfig";
import { client } from "../lib/axios";
import { useLoginUser } from "../hooks/useLoginUser";
import { Loading } from "../components/pages/Loading";

export const ProtectedRoute: FC = () => {
  const { loginUser, setLoginUser } = useLoginUser();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        client.get("login").then((response) => {
          const isAdmin = true;
          setLoginUser({ ...response.data, isAdmin });
        });
      } else {
        navigate("/login");
      }
    });
  }, []);

  if (loginUser?.isAdmin) {
    return <Outlet />;
  } else {
    return <Loading />;
  }
};
