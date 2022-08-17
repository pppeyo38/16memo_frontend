import { FC, useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import Div100vh from "react-div-100vh";
import { useMediaQuery } from "@chakra-ui/react";
import { useAuth } from "../hooks/account/useAuth";
import { HeaderControl } from "../hooks/HeaderControl";
import { Loading } from "../components/pages/Loading";
import { Header } from "../components/organisms/Header";
import { LogoWhite } from "../components/atoms/LogoWhite";
import { PCMenu } from "../components/organisms/PCMenu";

export const ProtectedRoute: FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isDesktop] = useMediaQuery("(min-width: 960px)");
  const [isHeader, setIsHeader] = useState(false);

  useEffect(() => {
    currentUser === null && navigate("/login");
  }, [currentUser]);

  useEffect(() => {
    if (pathname.includes("memo") && pathname.search(/[0-9]/g)) {
      setIsHeader(false);
    } else {
      setIsHeader(HeaderControl(pathname));
    }
  }, [pathname]);

  return (
    <Div100vh id="Div100vh">
      {currentUser === undefined ? (
        <Loading />
      ) : (
        <>
          {isDesktop ? (
            <>
              <LogoWhite />
              <PCMenu />
              <Outlet />
            </>
          ) : (
            <>
              {isHeader && <Header isDesktop={isDesktop} />}
              <Outlet />
            </>
          )}
        </>
      )}
    </Div100vh>
  );
};
