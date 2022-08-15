import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/account/useAuth";
import { LoginLayout } from "../templates/LoginLayout";

export const Login: FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  console.log(currentUser);

  useEffect(() => {
    currentUser && navigate("/");
  }, [currentUser]);

  return <>{currentUser === null && <LoginLayout />}</>;
};
