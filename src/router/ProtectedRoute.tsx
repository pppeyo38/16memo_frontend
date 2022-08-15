import { FC, useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import Div100vh from "react-div-100vh";
import { auth } from "../FirebaseConfig";
import { client } from "../lib/axios";
import { useLoginUser } from "../hooks/useLoginUser";
import { HeaderControl } from "../hooks/HeaderControl";
import { Loading } from "../components/pages/Loading";
import { Header } from "../components/organisms/Header";

export const ProtectedRoute: FC = () => {
  const { loginUser, setLoginUser } = useLoginUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [isHeader, setIsHeader] = useState(false);

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

  useEffect(() => {
    console.log("--- useEffect ---");
    setIsHeader(HeaderControl(location.pathname));
  }, [location.pathname]);

  return (
    <Div100vh id="Div100vh">
      {loginUser?.isAdmin ? (
        <>
          {isHeader && <Header />}
          <Outlet />
        </>
      ) : (
        <Loading />
      )}
    </Div100vh>
  );
};
