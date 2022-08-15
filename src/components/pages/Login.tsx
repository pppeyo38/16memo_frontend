import type { FC } from "react";
import { useAuth } from "../../hooks/account/useAuth";
import { LoginLayout } from "../templates/LoginLayout";

type Props = {};

export const Login: FC<Props> = (props) => {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return <LoginLayout />;
};
