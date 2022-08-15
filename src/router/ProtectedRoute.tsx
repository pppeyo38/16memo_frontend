import { FC, useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import Div100vh from "react-div-100vh";
import { useMediaQuery } from "@chakra-ui/react";
import { auth } from "../FirebaseConfig";
import { client } from "../lib/axios";
import { useLoginUser } from "../hooks/useLoginUser";
import { HeaderControl } from "../hooks/HeaderControl";
import { Loading } from "../components/pages/Loading";
import { Header } from "../components/organisms/Header";
import { LogoWhite } from "../components/atoms/LogoWhite";

export const ProtectedRoute: FC = () => {
  const { loginUser, setLoginUser } = useLoginUser();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isDesktop] = useMediaQuery("(min-width: 960px)");
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
    if (pathname.includes("memo") && pathname.search(/[0-9]/g)) {
      setIsHeader(false);
    } else {
      setIsHeader(HeaderControl(pathname));
    }
  }, [pathname]);

  return (
    <Div100vh id="Div100vh">
      {loginUser?.isAdmin ? (
        <>
          {isDesktop && <LogoWhite />}
          {isHeader && <Header isDesktop={isDesktop} />}
          <Outlet />
        </>
      ) : (
        <Loading />
      )}
    </Div100vh>
  );
};
